/* RA ULTRA — renders content.js into the page and runs the moiré field. */
(function () {
  var R = window.RA || {};
  function $(id) { return document.getElementById(id); }
  function el(tag, cls, text) { var e = document.createElement(tag); if (cls) e.className = cls; if (text != null) e.textContent = text; return e; }

  // ---------- profile ----------
  $("name").textContent = R.name || "Ra Hope";
  $("mood").textContent = R.mood || "";
  $("place").textContent = R.place || "";
  $("status").textContent = R.status || "";
  if (R.portrait) $("portrait").src = R.portrait;
  if (R.aka) $("aka").textContent = "aka " + R.aka.join(" · ");
  $("year").textContent = "© " + new Date().getFullYear();

  // ---------- top links ----------
  (R.links || []).forEach(function (l) {
    if (!l.url) return;
    var a = el("a", null, l.label); a.href = l.url; a.target = "_blank"; a.rel = "noopener"; $("links").appendChild(a);
  });

  // ---------- upcoming ----------
  (R.upcoming || []).forEach(function (u) {
    var li = el("li"); li.appendChild(el("span", "d", u.date));
    var b = el("div"); b.appendChild(el("div", "w", u.what)); b.appendChild(el("div", "x", u.where)); li.appendChild(b);
    $("dates").appendChild(li);
  });

  // ---------- interests ----------
  (R.interests || []).forEach(function (i) {
    var d = el("div"); d.appendChild(el("dt", null, i.k)); d.appendChild(el("dd", null, i.v)); $("interests").appendChild(d);
  });

  // ---------- blurbs ----------
  $("about").textContent = (R.blurbs && R.blurbs.about) || "";
  $("meet").textContent = (R.blurbs && R.blurbs.meet) || "";

  // ---------- transmissions ----------
  (R.transmissions || []).forEach(function (p) {
    var a = el("article", "post"); a.appendChild(el("div", "meta", p.date)); a.appendChild(el("h4", null, p.title)); a.appendChild(el("p", null, p.body));
    $("posts").appendChild(a);
  });

  // ---------- releases ----------
  (R.releases || []).forEach(function (r) {
    var li = el("li"), t = el("div", "t");
    if (r.url) { var a = el("a", null, r.title); a.href = r.url; a.target = "_blank"; a.rel = "noopener"; t.appendChild(a); } else t.textContent = r.title;
    li.appendChild(t); li.appendChild(el("div", "k", r.kind + " · " + r.year));
    if (r.tracks) li.appendChild(el("div", "tr", r.tracks));
    $("releases").appendChild(li);
  });

  // SoundCloud player, only where embeds are allowed (the live site, not previews)
  var host = location.hostname || "";
  var allow = (R.embedHosts || []).some(function (h) { return host === h || host.endsWith("." + h) || host.endsWith(h); });
  if (allow && R.soundcloudEmbed) {
    var f = document.createElement("iframe");
    f.title = "Ra Hope on SoundCloud"; f.loading = "lazy"; f.allow = "autoplay";
    f.src = "https://w.soundcloud.com/player/?url=" + encodeURIComponent(R.soundcloudEmbed) + "&color=%23e07a52&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&visual=false";
    $("embed").appendChild(f);
  }

  // ---------- lookbook + lightbox ----------
  var box = $("lightbox");
  (R.lookbook || []).forEach(function (s) {
    var b = el("button", "shot"); b.type = "button";
    var im = el("img"); im.src = s.img; im.alt = s.cap; im.loading = "lazy";
    b.appendChild(im); b.appendChild(el("span", null, s.cap));
    b.addEventListener("click", function () {
      box.querySelector("img").src = s.img; box.querySelector("img").alt = s.cap; box.querySelector("p").textContent = s.cap;
      if (box.showModal) box.showModal();
    });
    $("grid").appendChild(b);
  });
  box.querySelector(".close").addEventListener("click", function () { box.close(); });
  box.addEventListener("click", function (e) { if (e.target === box) box.close(); });

  // ---------- rooms ----------
  (R.playedAt || []).forEach(function (r) {
    var li = el("li"); li.appendChild(el("b", null, r.room)); li.appendChild(el("span", null, r.note)); $("rooms").appendChild(li);
  });
  $("roomcount").textContent = (R.playedAt || []).length + " rooms";

  // ---------- booking ----------
  var mail = R.bookingEmail || "";
  $("mailaddr").textContent = mail;
  $("copymail").addEventListener("click", function () {
    try { navigator.clipboard.writeText(mail).then(function () { $("formnote").textContent = "Address copied."; }, function () { $("formnote").textContent = "Select the address to copy it."; }); }
    catch (e) { $("formnote").textContent = "Select the address to copy it."; }
  });
  $("bookform").addEventListener("submit", function (e) {
    e.preventDefault();
    var v = function (id) { return ($(id).value || "").trim(); };
    if (!v("b-name") || !v("b-email")) { $("formnote").textContent = "Add your name and email so I can write back."; return; }
    var subject = "Booking: " + v("b-kind") + (v("b-date") ? " · " + v("b-date") : "");
    var body = "Name: " + v("b-name") + "\nEmail: " + v("b-email") + "\nFor: " + v("b-kind") + "\nDate(s): " + v("b-date") +
      "\nWhere: " + v("b-where") + "\nBudget: " + v("b-budget") + "\n\n" + v("b-msg");
    var note = $("formnote");
    note.textContent = "Your email app should open with this filled in. If it doesn't, copy the text below and send it to " + mail + ".";
    var pre = el("pre", null, "To: " + mail + "\nSubject: " + subject + "\n\n" + body); note.appendChild(pre);
    location.href = "mailto:" + mail + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
  });

  // ---------- moiré field ----------
  var c = $("field"), ctx = c.getContext("2d");
  var still = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;
  var S = 6, W, H, img, t = 0, last = 0;
  // palette stops: night, indigo, clay, ochre, neon
  var P = [[20,17,24],[45,42,110],[122,58,34],[184,134,43],[255,79,179]];
  function lerp(a, b, k) { return [a[0]+(b[0]-a[0])*k, a[1]+(b[1]-a[1])*k, a[2]+(b[2]-a[2])*k]; }
  function col(v) { // v in 0..1
    if (v < .45) return lerp(P[0], P[1], v / .45);
    if (v < .7) return lerp(P[1], P[2], (v - .45) / .25);
    if (v < .9) return lerp(P[2], P[3], (v - .7) / .2);
    return lerp(P[3], P[4], (v - .9) / .1);
  }
  function size() {
    W = Math.ceil(innerWidth / S); H = Math.ceil(innerHeight / S);
    c.width = W; c.height = H; img = ctx.createImageData(W, H); draw();
  }
  function draw() {
    var d = img.data, i = 0;
    var ax = W * (.3 + .15 * Math.sin(t * .13)), ay = H * (.4 + .2 * Math.cos(t * .11));
    var bx = W * (.7 + .15 * Math.cos(t * .09)), by = H * (.6 + .2 * Math.sin(t * .07));
    for (var y = 0; y < H; y++) for (var x = 0; x < W; x++) {
      var d1 = Math.hypot(x - ax, y - ay), d2 = Math.hypot(x - bx, y - by);
      var v = Math.sin(d1 * .55 - t) + Math.sin(d2 * .5 + t * .8) + .6 * Math.sin((x * .7 + y) * .08 + t * .3);
      v = (v + 2.6) / 5.2; v = v * v; // bias dark
      var p = col(Math.max(0, Math.min(1, v)));
      d[i++] = p[0]; d[i++] = p[1]; d[i++] = p[2]; d[i++] = 255;
    }
    ctx.putImageData(img, 0, 0);
  }
  function loop(ts) {
    if (!document.hidden && ts - last > 50) { t += .045; draw(); last = ts; }
    requestAnimationFrame(loop);
  }
  addEventListener("resize", size); size();
  if (!still) requestAnimationFrame(loop);
})();
