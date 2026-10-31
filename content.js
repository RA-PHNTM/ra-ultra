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
   5. If the page shows a pink warning bar, it names the line with the typo.
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
    { label: "YouTube",    url: "" },
    { label: "Spotify",    url: "" },
    { label: "Apple Music",url: "" }
  ],

  // Hosts where music embeds (SoundCloud player) are allowed to load.
    embedHosts: ["raultra.com", "github.io", "localhost"],
  soundcloudEmbed: "https://soundcloud.com/ra-sputin",

  blurbs: {
    about: "brooklyn guitarist, brownsville raised. twenty-one years chasing what lives between the notes: jazz-rock bent by afro-latin and caribbean rhythm, arabic lines, punk nerve, and a loop pedal that never sleeps. king kumite. abu recordings. a hard drive full of voice memos i never threw away. i play for the room, and for whatever is listening past it.",
    meet: "players who listen more than they talk. poets, rappers and singers carrying something heavy, lightly. rooms that let a set run long. luthiers in spain who still hear the wood."
  },

  interests: [
    { k: "sounds",  v: "alt jazz-rock · afro-punk · afro-latin & caribbean · arabic scales · hardcore · boom bap · lo-fi · found sound" },
    { k: "lineage", v: "coltrane · pharoah · alice coltrane · sonny sharrock · hendrix · zappa · mahavishnu · santana · loueke · rosenwinkel · dilla · madlib" },
    { k: "the rig", v: "j mascis jazzmaster · michael kelly semi-hollow · blues junior · whitey tighty · blues screamer · boss loop station · chase bliss blooper · sy-1 · dm-2w · skysurfer" },
    { k: "beats",   v: "fl studio · crates · dilla, alchemist, kev brown, ohbliv, daringer energy · soul flips slowed till they glow" }
  ],

  upcoming: [
    { date: "11.08", what: "departing for spain", where: "luthier hunting · voice memos to follow" },
    { date: "winter", what: "booking open", where: "nyc · solo loops · trio · session guitar · features" }
  ],

  // Blog / transmissions — newest first. DRAFTS: rewrite in your own words.
  transmissions: [
    { date: "11.2026", title: "the room moved", body: "instagram was the diary. this is the house: songs, pictures, dates, a door for booking. built slow, on purpose." },
    { date: "11.2026", title: "spain", body: "heading out on the 8th to find a guitar made by hand, by someone who listens to wood. notes from the road will land here." }
  ],

  // Where a release with no url of its own should link (best: your Spotify artist page).
  // Spotify: artist page → ⋯ → Share → Copy link to artist. Paste between the quotes.
  catalogLink: "",

  // Releases. Best url per release: its DistroKid HyperFollow link
  // (DistroKid → My Music → click the release → copy the HyperFollow link).
  // A release with url "" links to catalogLink instead, or shows as plain text if that's empty too.
  releases: [
    { title: "Shadow", kind: "EP", year: "2025", tracks: "wonder wheel · anubis · glass", url: "" },
    { title: "Prayers", kind: "single", year: "2025", tracks: "", url: "" },
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
    { img: "img/found-tone.jpg",       cap: "found it." },
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
