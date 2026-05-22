export const brandConfig = {
  "slug": "sweet-stockroom",
  "repo": "sweet-stockroom-malang-landing",
  "brandName": "Sweet Stockroom",
  "monogram": "SS",
  "layout": "sweet",
  "category": "Boutique fashion stockroom",
  "address": "Jl. Soekarno Hatta No.59A, Mojolangu, Malang",
  "contact": "WhatsApp via Linktree",
  "hours": "Daily 10:00-21:00, social checkout by channel",
  "publicLink": "https://linktr.ee/sweetstockroom",
  "instagram": "https://www.instagram.com/sweetstockroom",
  "theme": {
    "bg": "#fbf3f6",
    "ink": "#1c161b",
    "muted": "#6d5e68",
    "accent": "#ff8fab",
    "accent2": "#3b2a35",
    "panel": "#ffffff"
  },
  "dna": {
    "visual": "Boutique bento editorial with soft stockroom shelves, outfit routing, and social-commerce channel cards.",
    "business": "Connect local store visits, TikTok Shop, Shopee, Instagram, and WhatsApp into one curated buying journey.",
    "story": "Visitor enters new-in edit, checks outfit pairings, chooses channel, reads shipping/returns, then shops.",
    "emotion": "Curated, sweet, social, stylish, light.",
    "type": "Fashion grotesk with soft editorial display and tight product labels.",
    "motion": "Slow bento reveal, product-shelf hover, channel cards that feel tappable.",
    "layout": "Shoppable stockroom grid rather than generic boutique landing page.",
    "conversion": "Primary route is shop new arrivals; secondary route is store pickup and WhatsApp styling help.",
    "photo": "Rack details, model fit checks, flat-lay outfit pairings, pink-toned store corners.",
    "unique": "It feels like a curated stockroom feed made to convert social traffic."
  },
  "metrics": [
    "TikTok Shop path",
    "Shopee path",
    "Store pickup",
    "Soekarno Hatta address"
  ],
  "packages": [
    {
      "name": "Daily Top",
      "price": "from Rp89k",
      "note": "new-in item"
    },
    {
      "name": "Weekend Set",
      "price": "from Rp159k",
      "note": "paired outfit"
    },
    {
      "name": "Dress Edit",
      "price": "from Rp189k",
      "note": "curated stock"
    }
  ],
  "operations": [
    "Size guide",
    "Material notes",
    "Product filters",
    "Channel router",
    "Return policy"
  ],
  "workflow": [
    "Choose fit edit",
    "Check size and material",
    "Pick Shopee/TikTok/WhatsApp",
    "Confirm stock",
    "Select delivery or pickup"
  ],
  "proof": [
    "Public profile links TikTok Shop, Shopee, Instagram, WhatsApp, and store location.",
    "Soekarno Hatta address supports pickup and walk-in discovery.",
    "Social-commerce structure fits a curated bento layout."
  ],
  "team": [
    "Styling admin",
    "Stockroom crew",
    "Checkout admin"
  ],
  "testimonials": [
    "Outfit pairing bikin belanja lebih cepat.",
    "Channel belanja jelas, tinggal pilih Shopee atau WhatsApp."
  ],
  "faqs": [
    "Can I ask for styling help?",
    "How do returns work?",
    "Can I pick up in store?"
  ],
  "policies": [
    "Stock is confirmed by admin/channel.",
    "Return/exchange follows item condition and availability.",
    "Delivery depends on selected platform."
  ],
  "sourceLinks": [
    {
      "label": "Sweet Stockroom Linktree",
      "url": "https://linktr.ee/sweetstockroom"
    },
    {
      "label": "Sweet Stockroom Instagram",
      "url": "https://www.instagram.com/sweetstockroom"
    },
    {
      "label": "Sweet Stockroom TikTok Shop",
      "url": "https://linktr.ee/sweetstockroom"
    }
  ]
} as const;

export type BrandConfig = typeof brandConfig;
