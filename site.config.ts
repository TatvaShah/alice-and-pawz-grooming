import type { SiteConfig } from "@/lib/types";

export const site: SiteConfig = {
  name: "Alice & Pawz Grooming",
  tagline: "Gentle, stress free house call dog grooming in Oakville.",
  category: "Mobile dog grooming",
  schemaType: "LocalBusiness",
  area: "Oakville, ON",
  siteUrl: "https://alice-and-pawz-grooming.vercel.app",

  theme: {
    preset: "salon-chic",
    colors: { accent: "#a97f5f" },
  },
  logo: "/images/logo.png",
  showNameWithLogo: true,

  hero: {
    variant: "split",
    eyebrow: "House call pet salon in Oakville",
    headline: "Gentle grooming, right at your home",
    subhead: "Stress free dog grooming brought to your door, from a groomer with a veterinary medicine background. Send a DM to schedule your appointment.",
    images: [
      { src: "/images/post-3.jpg", alt: "Fluffy dog with teddy bear cut and bandana" },
      { src: "/images/post-1.jpg", alt: "Senior dog Teddy after a gentle groom" },
      { src: "/images/post-9.jpg", alt: "Smiling senior dog after a spa day" },
    ],
    secondaryCta: { label: "See the pups", href: "#gallery" },
  },

  highlights: ["House calls to your home", "Veterinary medicine background", "Gentle and stress free", "Book by Instagram DM"],

  about: {
    title: "Calm, caring grooming at home",
    body: [
      "Alice & Pawz Grooming is a house call pet salon in Oakville. We come to your home, so your dog can be pampered somewhere familiar, without the stress of a busy salon.",
      "With a veterinary medicine background, we take extra care with every pup, including our sweet seniors, who are always treated with patience and lots of TLC.",
    ],
    image: { src: "/images/post-1.jpg", alt: "Senior dog Teddy after a gentle groom" },
  },

  menu: {
    label: "Services",
    title: "Grooming services",
    intro: "Every groom is tailored to your dog. Message us for pricing and availability.",
    variant: "list",
    showPrices: false,
    priceNote: "Message us for pricing for your dog.",
    groups: [
      {
        title: "At home grooming",
        items: [
          { name: "House call dog grooming", description: "Professional grooming at your home in Oakville." },
          { name: "Teddy bear cuts", description: "Fluffy, rounded, adorable.", href: "https://www.instagram.com/p/Ddke5ets5tB/" },
          { name: "Bath, brush and de shed", description: "Clean, fresh, and comfortable." },
          { name: "Nail trims" },
          { name: "Senior dog spa days", description: "Bath, brush, de shed, nail trim, and lots of TLC.", href: "https://www.instagram.com/p/DZYlXTXMiIR/" },
        ],
      },
    ],
  },

  gallery: {
    title: "Fresh grooms",
    items: [
      { src: "/images/post-1.jpg", width: 1080, height: 1080, alt: "Senior dog Teddy after a gentle groom", caption: "Teddy, 18 years young", href: "https://www.instagram.com/p/DeP_GzEBXp7/" },
      { src: "/images/post-2.jpg", width: 1080, height: 1080, alt: "Small pup after a teddy bear cut", caption: "Fresh teddy bear groom", href: "https://www.instagram.com/p/DdxDs5XPuLX/" },
      { src: "/images/post-3.jpg", width: 1080, height: 1080, alt: "Fluffy dog with teddy bear cut and bandana", caption: "Teddy bear cut with bandana", href: "https://www.instagram.com/p/Ddke5ets5tB/" },
      { src: "/images/post-4.jpg", width: 1080, height: 1080, alt: "Freshly groomed dog with fluffy ears", caption: "Fluffy ears, sweet face", href: "https://www.instagram.com/p/Ddcl0J4RK7k/" },
      { src: "/images/post-5.jpg", width: 1080, height: 1080, alt: "Groomed pup wearing a bow tie", caption: "Bow tie ready", href: "https://www.instagram.com/p/DdKj7w_hB_O/" },
      { src: "/images/post-6.jpg", width: 1080, height: 1080, alt: "Dog with trimmed paws and colourful bandana", caption: "Clean, fresh, cute", href: "https://www.instagram.com/p/DdFh8v2Bxsk/" },
      { src: "/images/post-7.jpg", width: 1080, height: 1080, alt: "Happy dog after grooming", caption: "Fresh look, happy pup", href: "https://www.instagram.com/p/DdFYUALuZp4/" },
      { src: "/images/post-8.jpg", width: 1080, height: 1080, alt: "Freshly groomed dog ready for summer", caption: "Summer ready", href: "https://www.instagram.com/p/DZi74zMN8s5/" },
      { src: "/images/post-9.jpg", width: 1080, height: 1080, alt: "Smiling senior dog after a spa day", caption: "Senior spa day", href: "https://www.instagram.com/p/DZYlXTXMiIR/" },
      { src: "/images/post-12.jpg", width: 1080, height: 1080, alt: "Handsome pup after his spa day", caption: "Extra handsome", href: "https://www.instagram.com/p/DYX-mbKtXJI/" },
    ],
  },

  instagram: {
    handle: "aliceandpawz",
    embeds: ["https://www.instagram.com/p/DeP_GzEBXp7/"],
    embedsTitle: "Recent grooms",
  },

  order: {
    label: "How to book",
    title: "Book in a quick DM",
    intro: "Appointments are scheduled by Instagram DM. Tap the button to copy a starter message, then paste it into the chat.",
    dmMessage: "Hi Alice & Pawz! I would like to book a house call groom.\nPreferred date:\nDog's breed and size:\nService (bath, haircut, nail trim, senior spa day):\nStyle idea or notes:",
    links: [],
  },

  reviews: { items: [] },

  faq: [
    { q: "Do you come to my home?", a: "Yes. Alice & Pawz is a house call pet salon, so grooming comes to you in Oakville." },
    { q: "How do I book?", a: "Send a DM on Instagram with your preferred date and a little about your dog to schedule your appointment." },
    { q: "Do you groom senior dogs?", a: "Yes. Senior spa days include a bath, brush, de shed, nail trim, and plenty of gentle care." },
  ],

  contact: {
    title: "Contact and booking",
    area: "Oakville, Ontario",
    socials: [],
  },

  seo: {
    title: "Alice & Pawz Grooming | Mobile dog grooming in Oakville",
    description: "Gentle, stress free house call dog grooming in Oakville, ON, from a groomer with a veterinary background. Teddy bear cuts, baths, nail trims. Book by DM.",
    keywords: ["mobile dog grooming Oakville", "house call dog groomer Oakville", "teddy bear cut Oakville", "senior dog grooming Oakville"],
    ogPhoto: "/images/og-photo.jpg",
  },
};
