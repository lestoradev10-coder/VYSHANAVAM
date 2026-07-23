/* =========================================================
   VYSHNAVAM — product catalog
   Single source of truth for every page (index, shop, product,
   cart, account, dashboard). No prices, per brief — WhatsApp enquiry only.
========================================================= */
const PRODUCTS = [
  /* ---------------- NECKLACES ---------------- */
  {
    id: "n1", name: "Eterna Infinity Pendant Necklace", category: "Necklaces", tag: "Best Seller",
    image: "images/Eterna-Infinity-Pendant-Necklace.webp",
    gallery: ["images/Eterna-Infinity-Pendant-Necklace.webp"],
    short: "An infinity pendant on a fine chain — a everyday-easy gift piece.",
    description: "Eterna keeps things simple and sentimental: a single infinity motif in 18kt gold plating, hung on a lightweight chain that layers effortlessly. Anti-tarnish sealed and 100% skin-safe, it's built to be worn daily without a second thought — making it one of our most-gifted pieces.",
    specs: { "Plating":"18kt gold plated, anti-tarnish sealed", "Base Metal":"Brass, nickel & lead free", "Skin Safety":"100% skin-safe, hypoallergenic", "Chain":"16in with 2in extender", "Care":"Keep dry, store in the pouch provided" }
  },
  {
    id: "n2", name: "Crystal Bow Pendant Necklace", category: "Necklaces", tag: "",
    image: "images/Crystal-Bow-Pendant-Necklace.webp",
    gallery: ["images/Crystal-Bow-Pendant-Necklace.webp"],
    short: "A sparkling bow pendant with hand-set crystal detailing.",
    description: "A dainty bow, fully paved in hand-set crystals and finished in warm 18kt gold plating. Delicate enough for daily wear, sparkly enough for a night out — and always skin-safe against sensitive ears and necks.",
    specs: { "Plating":"18kt gold plated, anti-tarnish sealed", "Base Metal":"Brass, nickel & lead free", "Skin Safety":"100% skin-safe, hypoallergenic", "Chain":"16in with 2in extender", "Care":"Avoid contact with perfume and water" }
  },
  {
    id: "n3", name: "Ginkgo Leaf Pendant Necklace", category: "Necklaces", tag: "New",
    image: "images/Ginkgo-Leaf-Pendant-Necklace.webp",
    gallery: ["images/Ginkgo-Leaf-Pendant-Necklace.webp"],
    short: "A nature-inspired ginkgo leaf pendant, hand-finished in gold.",
    description: "A single ginkgo leaf, cast in fine detail and plated in 18kt gold. A quiet, nature-led piece that's just as at home at the office as it is dressed up — with our full anti-tarnish, skin-safe promise.",
    specs: { "Plating":"18kt gold plated, anti-tarnish sealed", "Base Metal":"Brass, nickel & lead free", "Skin Safety":"100% skin-safe, hypoallergenic", "Chain":"18in adjustable", "Care":"Store flat, away from moisture" }
  },
  {
    id: "n4", name: "Heart Link Station Necklace", category: "Necklaces", tag: "",
    image: "images/Heart-Link-Station-Necklace.webp",
    gallery: ["images/Heart-Link-Station-Necklace.webp"],
    short: "A chain necklace punctuated with heart-shaped stations.",
    description: "Heart-shaped links sit along a fine chain for a piece that reads playful without trying too hard. Layer it or wear it solo — either way, the 18kt gold plating and anti-tarnish base keep the colour honest wear after wear.",
    specs: { "Plating":"18kt gold plated, anti-tarnish sealed", "Base Metal":"Brass, nickel & lead free", "Skin Safety":"100% skin-safe, hypoallergenic", "Chain":"17in with 2in extender", "Care":"Wipe with a soft cloth after wear" }
  },
  {
    id: "n5", name: "Layered Pearl Snake Chain Necklace", category: "Necklaces", tag: "",
    image: "images/Layered-Pearl-Snake-Chain-Necklace.webp",
    gallery: ["images/Layered-Pearl-Snake-Chain-Necklace.webp"],
    short: "A pre-layered set pairing a pearl strand with a sleek snake chain.",
    description: "Two necklaces in one — a hand-knotted pearl strand layered against a smooth snake chain in 18kt gold plating. No fiddly layering required, and no risk of tarnish or skin reaction, so it's ready to wear straight out of the box.",
    specs: { "Plating":"18kt gold plated, anti-tarnish sealed", "Base Metal":"Brass, nickel & lead free", "Skin Safety":"100% skin-safe, hypoallergenic", "Layers":"2 pre-connected chains", "Care":"Avoid contact with perfume and water" }
  },
  {
    id: "n6", name: "Midnight Heart & Star Layered Necklace Set", category: "Necklaces", tag: "Set",
    image: "images/Midnight-Heart-Star-Layered-Necklace-Set.webp",
    gallery: ["images/Midnight-Heart-Star-Layered-Necklace-Set.webp"],
    short: "A layered set of heart and star pendants — a ready-made gift.",
    description: "A celestial-and-heart pairing on two lengths of chain, finished in 18kt gold plating with an anti-tarnish seal. Boxed and ready, this set is one of our most-gifted pieces for birthdays and anniversaries alike.",
    specs: { "Plating":"18kt gold plated, anti-tarnish sealed", "Base Metal":"Brass, nickel & lead free", "Skin Safety":"100% skin-safe, hypoallergenic", "Set":"2 layered necklaces", "Care":"Store flat in the box provided" }
  },
  {
    id: "n7", name: "Mixed-Cut Crystal Drop Necklace", category: "Necklaces", tag: "",
    image: "images/Mixed-Cut-Crystal-Drop-Necklace.webp",
    gallery: ["images/Mixed-Cut-Crystal-Drop-Necklace.webp"],
    short: "A statement drop necklace set with mixed-cut crystals.",
    description: "Round, emerald and pear-cut crystals come together in a single cascading drop, plated in 18kt gold for a piece that carries real occasion-wear sparkle without the occasion-wear price or upkeep.",
    specs: { "Plating":"18kt gold plated, anti-tarnish sealed", "Base Metal":"Brass, nickel & lead free", "Skin Safety":"100% skin-safe, hypoallergenic", "Chain":"16in with 2in extender", "Care":"Avoid contact with perfume and water" }
  },
  {
    id: "n8", name: "Roman Numeral Coin Paperclip Necklace", category: "Necklaces", tag: "New",
    image: "images/Roman-Numeral-Coin-Paperclip-Necklace.webp",
    gallery: ["images/Roman-Numeral-Coin-Paperclip-Necklace.webp"],
    short: "A coin pendant with Roman numerals on a bold paperclip chain.",
    description: "A engraved coin pendant hangs from a chunky paperclip chain, both finished in the same warm 18kt gold plating. A trend-led piece with the same anti-tarnish, skin-safe base as the rest of the collection.",
    specs: { "Plating":"18kt gold plated, anti-tarnish sealed", "Base Metal":"Brass, nickel & lead free", "Skin Safety":"100% skin-safe, hypoallergenic", "Chain":"18in with 2in extender", "Care":"Wipe with a soft cloth after wear" }
  },
  {
    id: "n9", name: "Rosette Teardrop Bridal Necklace Set", category: "Necklaces", tag: "Set",
    image: "images/Rosette-Teardrop-Bridal-Necklace-Set.webp",
    gallery: ["images/Rosette-Teardrop-Bridal-Necklace-Set.webp"],
    short: "A bridal-ready necklace and earring set with teardrop detailing.",
    description: "Rosette clusters and teardrop crystals come together in a coordinated necklace and earring set, made for brides, bridesmaids and once-in-a-lifetime occasions — and made to be handed down, thanks to its anti-tarnish finish.",
    specs: { "Plating":"18kt gold plated, anti-tarnish sealed", "Base Metal":"Brass, nickel & lead free", "Skin Safety":"100% skin-safe, hypoallergenic", "Set":"Necklace + earrings", "Care":"Store in the pouch provided" }
  },
  {
    id: "n10", name: "Vintage Clover Station Necklace", category: "Necklaces", tag: "",
    image: "images/Vintage-Clover-Station-Necklace.webp",
    gallery: ["images/Vintage-Clover-Station-Necklace.webp"],
    short: "A vintage-inspired chain set with clover stations.",
    description: "Clover motifs sit as stations along a fine 18kt gold-plated chain — a lucky little detail with a lived-in, vintage feel and all the everyday durability of our anti-tarnish base.",
    specs: { "Plating":"18kt gold plated, anti-tarnish sealed", "Base Metal":"Brass, nickel & lead free", "Skin Safety":"100% skin-safe, hypoallergenic", "Chain":"17in with 2in extender", "Care":"Avoid contact with perfume and water" }
  },
  {
    id: "n11", name: "Amara Heart Knot Jewelry Set", category: "Necklaces", tag: "Set",
    image: "images/Amara-Heart-Knot-Jewelry-Set.webp",
    gallery: ["images/Amara-Heart-Knot-Jewelry-Set.webp"],
    short: "A coordinated heart-knot necklace and earring set — best gift pick.",
    description: "A soft heart-knot motif repeats across a necklace-and-earring set, both in 18kt gold plating with an anti-tarnish, skin-safe base. Boxed together, it's one of our best gift picks for every occasion.",
    specs: { "Plating":"18kt gold plated, anti-tarnish sealed", "Base Metal":"Brass, nickel & lead free", "Skin Safety":"100% skin-safe, hypoallergenic", "Set":"Necklace + earrings", "Care":"Store in the pouch provided" }
  },

  /* ---------------- EARRINGS ---------------- */
  {
    id: "e1", name: "Golden Croissant Hoop Earrings", category: "Earrings", tag: "New",
    image: "images/Golden-Croissant-Hoop-Earrings.webp",
    gallery: ["images/Golden-Croissant-Hoop-Earrings.webp"],
    short: "Sculptural, croissant-shaped hoops in warm 18kt gold plating.",
    description: "A twisted, sculptural take on the classic hoop, finished in warm 18kt gold plating. Light enough for all-day wear, with a secure hinged back and our standard anti-tarnish, skin-safe build.",
    specs: { "Plating":"18kt gold plated, anti-tarnish sealed", "Base Metal":"Brass, nickel & lead free", "Skin Safety":"100% skin-safe, hypoallergenic", "Closure":"Hinged snap closure", "Care":"Wipe with a soft cloth after wear" }
  },
  {
    id: "e2", name: "Petite Heart Stud Drop Earrings", category: "Earrings", tag: "Best Seller",
    image: "images/Petite-Heart-Stud-Drop-Earrings-1.webp",
    gallery: ["images/Petite-Heart-Stud-Drop-Earrings-1.webp", "images/Petite-Heart-Stud-Drop-Earrings-2.webp"],
    short: "A tiny heart stud with a gently swinging drop below.",
    description: "A petite heart stud sits at the ear with a small drop swinging just beneath — subtle enough for the office, sweet enough to gift. Anti-tarnish sealed and 100% skin-safe for sensitive ears.",
    specs: { "Plating":"18kt gold plated, anti-tarnish sealed", "Base Metal":"Brass, nickel & lead free", "Skin Safety":"100% skin-safe, hypoallergenic", "Closure":"Push back", "Care":"Remove before washing hands" }
  },
  {
    id: "e3", name: "Teardrop Crystal Drop Earrings", category: "Earrings", tag: "",
    image: "images/Teardrop-Crystal-Drop-Earrings.webp",
    gallery: ["images/Teardrop-Crystal-Drop-Earrings.webp"],
    short: "A single teardrop crystal on a fine gold-plated drop.",
    description: "One clean teardrop crystal, hand-set and finished in 18kt gold plating — an easy everyday-to-evening drop that won't dull, tarnish or irritate sensitive skin.",
    specs: { "Plating":"18kt gold plated, anti-tarnish sealed", "Base Metal":"Brass, nickel & lead free", "Skin Safety":"100% skin-safe, hypoallergenic", "Closure":"Push back", "Care":"Avoid contact with perfume and water" }
  },
  {
    id: "e4", name: "Triple Hoop Crystal Ear Cuff", category: "Earrings", tag: "New",
    image: "images/Triple-Hoop-Crystal-Ear-Cuff.webp",
    gallery: ["images/Triple-Hoop-Crystal-Ear-Cuff.webp"],
    short: "A no-piercing-needed cuff with triple hoop and crystal detail.",
    description: "A wraparound ear cuff that layers three fine hoops with a touch of crystal sparkle — no extra piercing needed. Finished in 18kt gold plating on our usual anti-tarnish, skin-safe base.",
    specs: { "Plating":"18kt gold plated, anti-tarnish sealed", "Base Metal":"Brass, nickel & lead free", "Skin Safety":"100% skin-safe, hypoallergenic", "Fit":"Adjustable, no piercing required", "Care":"Handle gently when adjusting fit" }
  },
  {
    id: "e5", name: "Wildflower Pearl Statement Earrings", category: "Earrings", tag: "",
    image: "images/Wildflower-Pearl-Statement-Earrings.webp",
    gallery: ["images/Wildflower-Pearl-Statement-Earrings.webp"],
    short: "Statement floral earrings finished with pearl accents.",
    description: "Wildflower petals in hand-finished 18kt gold plating are dotted with pearl accents for a statement earring that still keeps to our anti-tarnish, skin-safe promise — perfect for festive dressing.",
    specs: { "Plating":"18kt gold plated, anti-tarnish sealed", "Base Metal":"Brass, nickel & lead free", "Skin Safety":"100% skin-safe, hypoallergenic", "Closure":"Push back", "Care":"Store in the pouch provided" }
  },

  /* ---------------- BRACELETS ---------------- */
  {
    id: "bg1", name: "Aurelia Crystal Cluster Bracelet", category: "Bracelets", tag: "Best Seller",
    image: "images/Aurelia-Crystal-Cluster-Bracelet-1.webp",
    gallery: ["images/Aurelia-Crystal-Cluster-Bracelet-1.webp"],
    short: "A tennis-style bracelet set with a cluster of hand-placed crystals.",
    description: "A continuous line of hand-set crystals wraps the wrist in 18kt gold plating — our best-selling bracelet, and a piece built to keep its shine with everyday, skin-safe wear.",
    specs: { "Plating":"18kt gold plated, anti-tarnish sealed", "Base Metal":"Brass, nickel & lead free", "Skin Safety":"100% skin-safe, hypoallergenic", "Closure":"Secure box clasp", "Care":"Avoid contact with perfume and water" }
  },
  {
    id: "bg2", name: "Charm Bell Layered Chain Bracelet", category: "Bracelets", tag: "",
    image: "images/Charm-Bell-Layered-Chain-Bracelet.webp",
    gallery: ["images/Charm-Bell-Layered-Chain-Bracelet.webp"],
    short: "A layered chain bracelet finished with a soft bell charm.",
    description: "Two fine chains layer together with a small bell charm at rest, finished in warm 18kt gold plating. Anti-tarnish sealed and 100% skin-safe, so it moves with you all day, every day.",
    specs: { "Plating":"18kt gold plated, anti-tarnish sealed", "Base Metal":"Brass, nickel & lead free", "Skin Safety":"100% skin-safe, hypoallergenic", "Closure":"Lobster clasp", "Care":"Wipe with a soft cloth after wear" }
  },
  {
    id: "bg3", name: "Clover Charm Layered Bracelet", category: "Bracelets", tag: "",
    image: "images/Clover-Charm-Layered-Bracelet.webp",
    gallery: ["images/Clover-Charm-Layered-Bracelet.webp"],
    short: "A stacked-look bracelet with a lucky clover charm.",
    description: "Pre-layered chains with a small clover charm give the look of a full stack in a single, easy-to-wear bracelet — 18kt gold plated, anti-tarnish sealed and completely skin-safe.",
    specs: { "Plating":"18kt gold plated, anti-tarnish sealed", "Base Metal":"Brass, nickel & lead free", "Skin Safety":"100% skin-safe, hypoallergenic", "Closure":"Lobster clasp", "Care":"Avoid contact with perfume and water" }
  },
  {
    id: "bg4", name: "Emerald-Cut Crystal Bracelet", category: "Bracelets", tag: "",
    image: "images/Emerald-Cut-Crystal-BRACELET.webp",
    gallery: ["images/Emerald-Cut-Crystal-BRACELET.webp"],
    short: "A line bracelet of emerald-cut crystals in 18kt gold plating.",
    description: "Emerald-cut crystals sit edge to edge along a slim 18kt gold-plated band — a clean, occasion-ready bracelet that holds its colour thanks to our anti-tarnish base.",
    specs: { "Plating":"18kt gold plated, anti-tarnish sealed", "Base Metal":"Brass, nickel & lead free", "Skin Safety":"100% skin-safe, hypoallergenic", "Closure":"Secure box clasp", "Care":"Store in the pouch provided" }
  },
  {
    id: "bg5", name: "Harper Paperclip Tennis Bracelet", category: "Bracelets", tag: "New",
    image: "images/Harper-Paperclip-Tennis-Bracelet-1.webp",
    gallery: ["images/Harper-Paperclip-Tennis-Bracelet-1.webp"],
    short: "A paperclip-link bracelet dotted with hand-set crystals.",
    description: "Bold paperclip links alternate with hand-set crystal stations, all finished in 18kt gold plating. A trend piece with everyday durability, built on our anti-tarnish, skin-safe base.",
    specs: { "Plating":"18kt gold plated, anti-tarnish sealed", "Base Metal":"Brass, nickel & lead free", "Skin Safety":"100% skin-safe, hypoallergenic", "Closure":"Lobster clasp", "Care":"Wipe with a soft cloth after wear" }
  },
  {
    id: "bg6", name: "Heart Halo Bangle Bracelet", category: "Bracelets", tag: "",
    image: "images/Heart-Halo-Bangle-Bracelet.webp",
    gallery: ["images/Heart-Halo-Bangle-Bracelet.webp"],
    short: "An open bangle with a crystal-haloed heart charm.",
    description: "A rounded open bangle carries a single heart charm ringed in crystal — a sweet, easy piece in 18kt gold plating, fully anti-tarnish sealed and skin-safe for daily stacking.",
    specs: { "Plating":"18kt gold plated, anti-tarnish sealed", "Base Metal":"Brass, nickel & lead free", "Skin Safety":"100% skin-safe, hypoallergenic", "Sizing":"Adjustable open cuff", "Care":"Avoid contact with perfume and water" }
  },
  {
    id: "bg7", name: "Paperclip Crystal Station Bracelet", category: "Bracelets", tag: "",
    image: "images/Paperclip-Crystal-Station-Bracelet.webp",
    gallery: ["images/Paperclip-Crystal-Station-Bracelet.webp"],
    short: "A paperclip chain bracelet with crystal stations throughout.",
    description: "Chunky paperclip links are punctuated with crystal stations along their length, all in warm 18kt gold plating — an easy everyday layer with our full anti-tarnish, skin-safe promise.",
    specs: { "Plating":"18kt gold plated, anti-tarnish sealed", "Base Metal":"Brass, nickel & lead free", "Skin Safety":"100% skin-safe, hypoallergenic", "Closure":"Lobster clasp", "Care":"Wipe with a soft cloth after wear" }
  },

  /* ---------------- RINGS ---------------- */
  {
    id: "r1", name: "Braided Link Solitaire Ring", category: "Rings", tag: "",
    image: "images/Braided-Link-Solitaire-Ring.webp",
    gallery: ["images/Braided-Link-Solitaire-Ring.webp"],
    short: "A braided band ring set with a single solitaire stone.",
    description: "A braided 18kt gold-plated band leads up to a single hand-set solitaire stone — a quiet, everyday ring finished with our anti-tarnish, skin-safe promise.",
    specs: { "Plating":"18kt gold plated, anti-tarnish sealed", "Base Metal":"Brass, nickel & lead free", "Skin Safety":"100% skin-safe, hypoallergenic", "Sizing":"Adjustable, fits most sizes", "Care":"Remove before washing hands" }
  },
  {
    id: "r2", name: "Celeste Solitaire Open Ring", category: "Rings", tag: "Best Seller",
    image: "images/Celeste-Solitaire-Open-Ring-1.webp",
    gallery: ["images/Celeste-Solitaire-Open-Ring-1.webp", "images/Celeste-Solitaire-Open-Ring-2.webp"],
    short: "An open-band ring with a floating solitaire stone.",
    description: "A slim open band frames a single floating solitaire stone in 18kt gold plating — one of our best-selling rings, easy to adjust and completely skin-safe for daily wear.",
    specs: { "Plating":"18kt gold plated, anti-tarnish sealed", "Base Metal":"Brass, nickel & lead free", "Skin Safety":"100% skin-safe, hypoallergenic", "Sizing":"Adjustable, fits most sizes", "Care":"Remove before washing hands" }
  },
  {
    id: "r3", name: "Dual Heart Wrap Ring", category: "Rings", tag: "",
    image: "images/Dual-Heart-Wrap-Ring.webp",
    gallery: ["images/Dual-Heart-Wrap-Ring.webp"],
    short: "A wraparound ring with two interlocking heart accents.",
    description: "Two hearts wrap gently around the finger in warm 18kt gold plating — a sweet, giftable ring built on our anti-tarnish, skin-safe base for everyday wear.",
    specs: { "Plating":"18kt gold plated, anti-tarnish sealed", "Base Metal":"Brass, nickel & lead free", "Skin Safety":"100% skin-safe, hypoallergenic", "Sizing":"Adjustable, fits most sizes", "Care":"Remove before washing hands" }
  },
  {
    id: "r4", name: "Onyx Oval Signet Ring", category: "Rings", tag: "New",
    image: "images/Onyx-Oval-Signet-Ring.webp",
    gallery: ["images/Onyx-Oval-Signet-Ring.webp"],
    short: "A signet ring set with a deep oval onyx stone.",
    description: "A classic signet silhouette in 18kt gold plating, set with a deep oval onyx stone for contrast — sized to layer with our stacking rings, and finished with our anti-tarnish, skin-safe base.",
    specs: { "Plating":"18kt gold plated, anti-tarnish sealed", "Base Metal":"Brass, nickel & lead free", "Skin Safety":"100% skin-safe, hypoallergenic", "Sizing":"Adjustable, fits most sizes", "Care":"Remove before washing hands" }
  },
  {
    id: "r5", name: "Pavé Heart & Lightning Stacking Rings", category: "Rings", tag: "Set",
    image: "images/Pave-Heart-Lightning-Stacking-Rings.webp",
    gallery: ["images/Pave-Heart-Lightning-Stacking-Rings.webp"],
    short: "A stacking set pairing a pavé heart ring with a lightning bolt band.",
    description: "A pavé-set heart ring pairs with a slim lightning bolt band, both in 18kt gold plating — made to stack together or split across fingers, with the same anti-tarnish, skin-safe finish throughout.",
    specs: { "Plating":"18kt gold plated, anti-tarnish sealed", "Base Metal":"Brass, nickel & lead free", "Skin Safety":"100% skin-safe, hypoallergenic", "Set":"2 stacking rings", "Care":"Remove before washing hands" }
  },
  {
    id: "r6", name: "Stackable Rings Set (20pc)", category: "Rings", tag: "Set",
    image: "images/Stackable-Rings-Set-20pc.webp",
    gallery: ["images/Stackable-Rings-Set-20pc.webp"],
    short: "A 20-piece stacking ring set — our best gift pick for any occasion.",
    description: "Twenty slim, mix-and-match bands in 18kt gold plating give you a stack for every mood and every finger. Anti-tarnish sealed and 100% skin-safe, it's boxed and ready — one of our best gift picks.",
    specs: { "Plating":"18kt gold plated, anti-tarnish sealed", "Base Metal":"Brass, nickel & lead free", "Skin Safety":"100% skin-safe, hypoallergenic", "Set":"20 rings, mixed sizing", "Care":"Remove before washing hands" }
  },
  {
    id: "r7", name: "Vienna Beaded Solitaire Ring", category: "Rings", tag: "",
    image: "images/Vienna-Beaded-Solitaire-Ring-1.webp",
    gallery: ["images/Vienna-Beaded-Solitaire-Ring-1.webp"],
    short: "A beaded band ring centred on a single solitaire stone.",
    description: "A fine beaded band in 18kt gold plating leads to a single hand-set solitaire stone — textured, understated, and finished with our full anti-tarnish, skin-safe promise.",
    specs: { "Plating":"18kt gold plated, anti-tarnish sealed", "Base Metal":"Brass, nickel & lead free", "Skin Safety":"100% skin-safe, hypoallergenic", "Sizing":"Adjustable, fits most sizes", "Care":"Remove before washing hands" }
  },
];

const CATEGORY_META = {
  "Necklaces": { image:"images/Eterna-Infinity-Pendant-Necklace.webp" },
  "Earrings": { image:"images/Golden-Croissant-Hoop-Earrings.webp" },
  "Bracelets": { image:"images/Aurelia-Crystal-Cluster-Bracelet-1.webp" },
  "Rings": { image:"images/Celeste-Solitaire-Open-Ring-1.webp" }
};

function getProduct(id){ return PRODUCTS.find(p => p.id === id); }
