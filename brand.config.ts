export const brandConfig = {
  "slug": "sweet-stockroom",
  "repo": "sweet-stockroom-malang-landing",
  "brandName": "Sweet Stockroom",
  "monogram": "SS",
  "category": "Fashion retail and stockroom",
  "location": "Soekarno Hatta retail strip",
  "address": "Jl. Soekarno Hatta No.59A, Mojolangu, Malang",
  "contact": "WhatsApp via Linktree",
  "publicLink": "https://linktr.ee/sweetstockroom",
  "instagram": "https://www.instagram.com/sweetstockroom",
  "designConcept": "Bento Grid fashion retail landing",
  "conversionGoal": "Connect store visits, TikTok Shop, Shopee, Instagram, and WhatsApp into a curated boutique buying path.",
  "proofPoints": [
    "Public profile links TikTok Shop, Shopee, TikTok, Instagram, WhatsApp, and store location.",
    "Soekarno Hatta address positions the store for local pickup and walk-in discovery.",
    "Fashion stockroom identity fits a curated bento layout with new-in, fit edit, and social checkout blocks."
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
  ],
  "theme": {
    "bg": "#171317",
    "accent": "#ff8fab",
    "accent2": "#ffd7e5",
    "paper": "#fff7fb"
  },
  "nav": [
    "New In",
    "Curated",
    "Shop",
    "Visit"
  ],
  "hero": {
    "eyebrow": "Boutique stockroom and social commerce",
    "title": "Curated fashion drops built for TikTok, Shopee, and store visits.",
    "body": "A stylish stockroom page for new arrivals, curated bundles, social commerce, and store pickup. Simple, visual, and campaign-ready.",
    "cta": "Shop New Arrivals"
  },
  "sections": [
    {
      "id": "new-in",
      "kicker": "New In",
      "title": "Fresh arrivals displayed like a boutique campaign.",
      "items": [
        "Daily fit",
        "Weekend set",
        "Seasonal edit"
      ]
    },
    {
      "id": "curated",
      "kicker": "Curated Stock",
      "title": "Bundles and outfit edits make the store feel selected, not crowded.",
      "items": [
        "Color stories",
        "Outfit pairings",
        "Limited stock"
      ]
    },
    {
      "id": "shop",
      "kicker": "Social Commerce",
      "title": "TikTok Shop, Shopee, Instagram, and WhatsApp become one path.",
      "items": [
        "TikTok traffic",
        "Shopee checkout",
        "Store pickup"
      ]
    }
  ],
  "layout": "boutique"
} as const;

export type BrandConfig = typeof brandConfig;
