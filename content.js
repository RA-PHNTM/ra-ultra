/* ============================================================
   RA ULTRA — SITE CONTENT
   This is the only file you need to edit to update the site.

   EDITING RULES (break one and the page goes blank):
   1. Only change text BETWEEN the straight double quotes "like this".
   2. Need a double quote inside text? Type \" or use single quotes ' instead.
      Apostrophes (I'd, Ra's) are fine as they are.
   3. Every item in a list ends with a comma, except the last one is optional.
   4. Edit in Notepad, VS Code, or GitHub's pencil icon. NOT Word or Google Docs,
      which swap " for curly quotes and break the file.
   5. If the page shows a pink warning bar, there's a typo; undo your last edit.
   ============================================================ */
window.RA = {

  site: "RA ULTRA",
  name: "Ra Hope",
  aka: ["Ra", "RA ULTRA", "his_name_is_rakeem", "Ra Phantom", "pka Sir RaRa"],
  place: "Brooklyn, NY",
  mood: "tuning by ear",
  status: "packing for spain",
  portrait: "img/looking-up.jpg",

  // Booking: change to a forwarding address (e.g. booking@yourdomain) once the domain is live
  bookingEmail: "rakeemjhope@gmail.com",

  // Top bar links. Add/remove freely. Leave url "" to hide one.
  links: [
    { label: "Bandcamp",   url: "https://ra-ultra.bandcamp.com" },
    { label: "SoundCloud", url: "https://soundcloud.com/ra-sputin" },
    { label: "Streaming",  url: "https://distrokid.com/hyperfollow/sirrara/miracle" },
    { label: "Instagram",  url: "https://www.instagram.com/his_name_is_rakeem/" },
    { label: "YouTube",    url: "https://youtube.com/channel/UCPpLv9BOjvOLL4dmR_9GzNw?si=uWyx8vW1hY4zaQ5H" },
    { label: "Spotify",    url: "https://open.spotify.com/artist/7MnuhuTojp6AbOCdsN4nmP?si=a_80a6vFSRuNlghuheYvYw" },
    { label: "Apple Music",url: "https://music.apple.com/us/artist/sir-rara/1698103908" }
  ],

  // Hosts where music embeds (SoundCloud player) are allowed to load.
  embedHosts: ["raultra.com", "github.io", "localhost"],
  soundcloudEmbed: "https://soundcloud.com/ra-sputin",

  blurbs: {
    about: "brooklyn guitarist and producer, bronx and brownsville raised. chasing what lives between the notes: jazz-rock bent by afro-latin and caribbean rhythm, latin and arabic lines, punk nerve, and a loop pedal that never sleeps. king kumite. colores. abu recordings. i play for the room, and for whatever is listening past it.",
    meet: "players who listen more than they talk. musicians, poets, rappers and singers carrying something heavy, lightly. rooms that let a set run long or end fast. nomadic artist searching for source through sound."
  },

  interests: [
    { k: "sounds",  v: "alt jazz-rock · afro-punk · afro-latin & caribbean · experimental fusion · boom bap · lo-fi · punk hardcore · found sound" },
    { k: "lineage", v: "coltrane · pharoah · alice coltrane · sonny sharrock · hendrix · zappa · mahavishnu · santana · loueke · rosenwinkel · dilla · madlib" },
  ],

  upcoming: [
    { date: "11.08", what: "departing for spain", where: "sound hunting · voice memos to follow" },
    { date: "winter", what: "booking open", where: "nyc · solo loops · trio · session guitar · features" }
  ],

  // Blog / transmissions — newest first. DRAFTS: rewrite in your own words.
  transmissions: [
    { date: "11.2026", title: "the room moved", body: "instagram was the diary. this is the house: songs, pictures, dates, a door for booking. built slow, on purpose. self-preservation over corporate content creation."   },
    { date: "11.2026", title: "spain", body: "hand made guitars and flamenco, studying origins of latin music in all its forms and collaborating with artists from all backgrounds and styles. notes from the road coming soon." }
  ],

  // Where a release with no url of its own links (your Spotify artist page).
  catalogLink: "https://open.spotify.com/artist/7MnuhuTojp6AbOCdsN4nmP",

  // Releases. A release with url "" links to catalogLink instead.
  releases: [
    { title: "Shadow", kind: "EP", year: "2025", tracks: "wonder wheel · anubis · glass", url: "https://open.spotify.com/album/5bhDS72puTgkFAk5ybRwUZ?si=Zw8a_mcNTmSwfFm4KYn0Zw" },
    { title: "Prayers", kind: "single", year: "2025", tracks: "", url: "https://open.spotify.com/album/70xo7KpvEqFh6JxB7GxzTO?si=4ywRN9yAR5qgVqw3Bp36fg" },
    { title: "pockets / slow clap / cents / High / iMPOSSIBLE", kind: "singles", year: "2023", tracks: "", url: "" },
    { title: "Hope", kind: "album · bandcamp", year: "2023", tracks: "pockets · miracle · prayrs · impossible · hope", url: "https://ra-ultra.bandcamp.com/album/hope" },
    { title: "MIRACLE", kind: "single", year: "2023", tracks: "", url: "https://distrokid.com/hyperfollow/sirrara/miracle" },
    { title: "the soundcloud archive", kind: "early", year: "2015–19", tracks: "acid · heart · time · abra · new groove", url: "https://soundcloud.com/ra-sputin" }
  ],

  // Lookbook — captions are the vague subtitles under each picture.
  lookbook: [
    { img: "img/pedalboard-rug.jpg",   cap: "seven boxes on a persian rug. the whole map." },
    { img: "img/red-room.jpg",         cap: "red room. the amp breathing." },
    { img: "img/bw-jazzmaster.jpg",    cap: "offset. on purpose." },
    { img: "img/nublu.jpg",            cap: "nublu jazz fest. ave c, late." },
    { img: "img/halo.jpg",             cap: "a lamp, a halo, a hum." },
    { img: "img/yellow-coat.jpg",      cap: "session weather." },
    { img: "img/seven-boxes.jpg",      cap: "feet first." },
    { img: "img/red-stage.jpg",        cap: "the drummer knows." },
    { img: "img/jazzmaster-rest.jpg",  cap: "she rests between takes." },
    { img: "img/blur.jpg",             cap: "the song before it had a name." },
    { img: "img/bw-play.jpg",          cap: "listening with the hands." }
  ],

  playedAt: [
    { room: "Nublu Jazz Festival", note: "nyc" },
    { room: "Prospect Park Alliance Gala", note: "solo acoustic · 2021" },
    { room: "Mark Fletcher Studio", note: "\"through the walls\" live · 07.24.20" },
    { room: "Abu Nights", note: "abu recordings" },
    { room: "The Broadway", note: "03.17.22" },
    { room: "Shane's", note: "w/ king kumite" },
    { room: "Manhattan Brew", note: "thursday night live · 05.19.16" }
  ]
};
