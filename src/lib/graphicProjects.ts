// Graphic design projects shown on /graphic-design and in their modals.
// In descriptions, "\n\n" starts a new paragraph.

export type GraphicProject = {
  slug: string;
  title: string;
  subtitle: string;
  shortName: string;
  tags: string[];
  description: string;
  bg: string;
  images: { src: string; alt: string }[];
};

const pieces = (slug: string, alts: string[]) =>
  alts.map((alt, i) => ({ src: `/images/graphics/${slug}/${i + 1}.jpg`, alt }));

const swipe = "Swipe through and enjoy a closer look at some of the designs I've worked on.";

export const graphicProjects: GraphicProject[] = [
  {
    slug: "farmsabi",
    title: "FarmSabi",
    shortName: "FarmSabi",
    subtitle: "Brand Identity & Communication Design . 2026",
    tags: ["Brand Design", "Social Media Graphics", "Educational Carousels", "Marketing materials", "Awareness Campaigns"],
    description: `I got to work on different designs for FarmSabi, from educational and awareness flyers to their brand vision and mission flyers. I enjoyed finding creative ways to share useful information, tell people more about the brand, and make each design easy and interesting to engage with.\n\n${swipe}`,
    bg: "#e2ebe3",
    images: pieces("farmsabi", ["FarmSabi coming soon flyer", "5 ways technology is transforming agriculture carousel", "FarmSabi mission flyer"]),
  },
  {
    slug: "eoti",
    title: "EOTI",
    shortName: "EOTI",
    subtitle: "Volunteer Graphic Design . 2026",
    tags: ["Event Flyers", "Social Media Graphics", "Brouchures", "Marketing materials"],
    description: `I had the opportunity to create different designs for EOTI, helping to share information about its activities, events, and programmes. From event flyers to promotional graphics, I enjoyed turning ideas and messages into visuals that catch people's attention and make them want to know more.\n\n${swipe}`,
    bg: "#eeeae2",
    images: pieces("eoti", ["EOTI first anniversary celebration flyer", "EOTI happy new year 2026 flyer", "EOTI children's day flyer"]),
  },
  {
    slug: "hergrc",
    title: "HerGRC Circle - ICDFA",
    shortName: "HerGRC Circle",
    subtitle: "Graphic Designer & Brand Designer . 2025",
    tags: ["Brand Identity", "Event Flyers", "Educational Carousels", "Promotional materials"],
    description: `I had the opportunity to give HerGRC Circle a visual identity through its logo and branding, while also creating designs for its activities and community. From event flyers for social media to educational materials, I enjoyed finding creative ways to bring the brand to life and share information with its audience.\n\n${swipe}`,
    bg: "#eeeded",
    images: pieces("hergrc", ["Empowering women in cybersecurity flyer", "ICDFA women's governance, risk and compliance club executives flyer", "HerGRC Circle ice breaker event flyer"]),
  },
  {
    slug: "flyers",
    title: "Flyer Designs",
    shortName: "Flyer Designs",
    subtitle: "Graphic Designer . 2023 - Till Date",
    tags: ["Freelance Design", "Social Media Graphics", "Visual Design", "Promotional Graphics"],
    description:
      "Over time, I've had the chance to work on different flyer designs for individuals and businesses, each with its own idea and purpose. From promoting products and services to announcing events and sharing information, I enjoy exploring different styles and finding the right way to bring each idea to life.\n\nSwipe through and enjoy a closer look at some of the designs I've created for different clients.",
    bg: "#f9eeea",
    images: pieces("flyers", ["KC Fresh Laundry subscription plans flyer", "By Oma personal brand flyer", "Dafsah Legal Advisory services flyer"]),
  },
  {
    slug: "social-media",
    title: "Social Media Designs",
    shortName: "Social Media Designs",
    subtitle: "Visual Designer . 2023 - Till Date",
    tags: ["Social Media Graphics", "Digital Graphics", "Content Design", "Visual Communication"],
    description:
      "I've created different social media designs to help brands and businesses share their ideas, connect with their audience, and keep their pages visually engaging. I enjoy playing around with layouts, colours, and typography to give each design its own look while making sure the message stands out.\n\nSwipe through and enjoy a closer look at some of the social media designs I've worked on.",
    bg: "#ebebe6",
    images: pieces("social-media", ["Cometstar Eid al-Adha greeting", "50 days of consistency post", "OneStopSub data and airtime promo"]),
  },
  {
    slug: "logos",
    title: "Logo Design",
    shortName: "Logo Design",
    subtitle: "Brand Designer . 2026",
    tags: ["Logo Design", "Brand Identity", "Visual Identity", "Creative Design"],
    description:
      "Over time, I've worked on different logo concepts for various projects, exploring shapes, colours, and typography to bring each idea to life. Every project comes with a different story, and I enjoy finding a visual direction that feels right for it.\n\nSwipe through and enjoy a closer look at some of the logos I've designed.",
    bg: "#f0e1e4",
    images: pieces("logos", ["Chuks Kitchen logo", "Vee's Cuisine logo", "Viano logo"]),
  },
  {
    slug: "business-cards",
    title: "Business Card Design",
    shortName: "Cards",
    subtitle: "Graphic Designer . 2026",
    tags: ["Business Card Design", "Print Design", "Branding"],
    description:
      "I've had the opportunity to work on business card designs for different individuals and brands. I enjoy finding simple but thoughtful ways to bring the details together, from typography and colours to the overall layout, so each card feels professional and reflects the person or brand behind it.\n\nSwipe through and take a closer look at some of the business card designs I've created.",
    bg: "#f2f2db",
    images: pieces("business-cards", ["Techbrandex Energy business card front", "Techbrandex Energy business card back", "Sentinel GRC Advisory business card"]),
  },
  {
    slug: "mockups",
    title: "Mockup Designs",
    shortName: "Mockups",
    subtitle: "Creative Designer . 2026",
    tags: ["Design Mockups", "Product Presentation", "Visual Design"],
    description:
      "I enjoy seeing a design come to life beyond the screen, and mockups are a great way to do that. I've created different mockups to showcase my work, explore how designs look in real-life settings, and give each project a more complete presentation.\n\nSwipe through and take a closer look at some of the mockups I've created.",
    bg: "#e8e6e0",
    images: pieces("mockups", ["The Nigerian Small Business Tax Handbook book mockup", "Talent Flow laptop and phone mockup", "Minzo tablet mockup"]),
  },
];
