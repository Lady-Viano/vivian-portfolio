// Case study content for the UI/UX Works modals.
// In text blocks, "\n" is a line break and "\n\n" starts a new paragraph.

export type CaseStudyStep = {
  heading?: string;
  body: string;
  image: { src: string; width: number; height: number; alt: string };
};

export type CaseStudy = {
  slug: string;
  shortName: string;
  eyebrow: string;
  title: string;
  tags: string[];
  meta: { label: string; value: string }[];
  overview: string;
  problem: string;
  processIntro: string;
  steps: CaseStudyStep[];
  solution: string;
  outcome: string;
  hero: { src: string; alt: string };
};

const img = (slug: string, n: number, alt: string, width = 1000) => ({
  src: `/images/case-studies/${slug}/process-${n}.jpg`,
  width,
  height: 576,
  alt,
});

export const caseStudies: CaseStudy[] = [
  {
    slug: "sentinel",
    shortName: "Sentinel",
    eyebrow: "Mobile and Desktop Design . 2026",
    title: "Sentinel GRC Advisory",
    tags: ["UX Research", "UI Design", "Prototyping", "Product Strategy"],
    meta: [
      { label: "Role", value: "Product designer" },
      { label: "Project Type", value: "Responsive Web Design" },
      { label: "Duration", value: "3 months" },
      { label: "Tools", value: "Figma, Miro, ChatGPT" },
    ],
    hero: {
      src: "/images/case-studies/sentinel/hero.jpg",
      alt: "Sentinel GRC Advisory website on a laptop and phone",
    },
    overview:
      "Sentinel GRC Advisory helps organisations navigate governance, risk, and compliance. I worked on its website to give the business a clear online presence and help visitors understand its services, explore opportunities, and get in touch.\nThe goal was to bring the business's expertise and purpose into a digital experience that felt clear, trustworthy, and easy to navigate.",
    problem:
      "The challenge was to bring different services and opportunities together without making the website feel confusing or overwhelming.\nVisitors needed to find relevant information quickly, understand what Sentinel could offer them, and know what to do next. At the same time, the website needed a visual identity that reflected the trust and attention to detail expected from a GRC advisory firm.",
    processIntro:
      "I started by thinking about what different visitors would come to the website looking for and how the content could guide them.",
    steps: [
      {
        heading: "Making the information easier to follow",
        body: "I organised the experience around key pages, including Home, About, Services, Contact, Careers, Internship, and Volunteering. This gave the different audiences clearer paths to the information they needed.",
        image: img("sentinel", 1, "Sentinel home page on a desktop monitor and phone"),
      },
      {
        heading: "Building trust through visual design",
        body: "I used a clean, professional visual direction to help the business communicate credibility without making the experience feel cold or difficult to approach.",
        image: img("sentinel", 2, "Core values section on a laptop"),
      },
      {
        heading: "Thinking beyond the desktop",
        body: "I designed for both desktop and mobile, considering how visitors would read the content, move between pages, and interact with forms on different screen sizes.",
        image: img("sentinel", 3, "Services pages across phone, tablet, laptop and desktop"),
      },
      {
        body: "I also included dedicated contact and application forms to give visitors a practical way to move from exploring the website to taking action.",
        image: img("sentinel", 4, "Contact form on a laptop and phone"),
      },
    ],
    solution:
      "The result was a responsive website that brings Sentinel's services, company information, and career opportunities into one place.\nThe design gives visitors different ways to explore the business, whether they want to learn about its advisory services, make an enquiry, or find an opportunity to gain practical experience.\nRather than treating the website as just a collection of pages, I approached it as a way to help people understand Sentinel and connect with the business.",
    outcome:
      "The project gave Sentinel GRC Advisory a dedicated online presence that presents its services and opportunities in a more organised, accessible way.\nFor me, it was an opportunity to think beyond individual screens and consider how the full website works together. It reinforced an important lesson in product design: good design is not only about how something looks, but also about how easily people can understand it and know what to do next.",
  },
  {
    slug: "talent-flow",
    shortName: "Talent Flow",
    eyebrow: "Mobile and Desktop Design . 2026",
    title: "Talent Flow Educational Platform",
    tags: ["UX Research", "UI Design", "Prototyping", "Information Architecture"],
    meta: [
      { label: "Role", value: "UI/UX designer" },
      { label: "Project Type", value: "Learning Management System (LMS)" },
      { label: "Duration", value: "2 months" },
      { label: "Tools", value: "Figma, Slack, ChatGPT" },
    ],
    hero: {
      src: "/images/case-studies/talent-flow/hero.jpg",
      alt: "Talent Flow learning platform shown on a laptop",
    },
    overview:
      "Talent Flow is a learning platform designed to bring learning activities into one place. The idea was to make it easier for people to access courses, manage assignments, follow discussions, and keep track of their learning. The experience had to work for different users, each with their own responsibilities, while still feeling like one connected product.\nAs part of the project, I worked on the instructor experience, thinking through how instructors could move between the different parts of the platform without making everyday tasks feel complicated.",
    problem:
      "The challenge was to make the platform feel organised and easy to navigate, especially when users needed to move between several learning activities.\nFor instructors, the experience needed to make key areas such as courses, assignments, and discussions easy to find. The goal was to help users focus on what they needed to do, rather than spend time figuring out where to go next.",
    processIntro:
      "I approached the design by thinking about how instructors would move through the platform and what they would need access to along the way.",
    steps: [
      {
        heading: "Understanding the instructor’s journey",
        body: "I worked through the main journey, from logging in and reaching the home dashboard to accessing courses, assignments, discussions, and the profile section. This helped shape the structure of the experience and the relationship between its different screens.",
        image: img("talent-flow", 1, "Instructor dashboard on laptop and mobile"),
      },
      {
        heading: "Arranging the information and features",
        body: "I wanted instructors to be able to find what they needed without having to guess where a feature was located. Mapping the flow first also helped me think through how each screen would lead into the next.",
        image: img("talent-flow", 2, "Student management screen on a desktop monitor"),
      },
      {
        heading: "Thinking beyond the desktop",
        body: "I designed for both desktop and mobile, considering how visitors would read the content, move between pages, and interact with forms on different screen sizes.",
        image: img("talent-flow", 3, "Sign-in screens across phone, tablet, laptop and desktop"),
      },
      {
        body: "I used Figma to develop the interface designs and bring the planned flow to life. I made sure the layout feel organised rather than crowding each screen with too much information.",
        image: img("talent-flow", 4, "Courses screen on a laptop"),
      },
    ],
    solution:
      "The resulting designs brought the key parts of the instructor experience into a connected interface, with dedicated areas for courses, assignments, discussions, and profile management.\nRather than treating each screen as an isolated design, I considered how the screens worked together to support the user's journey through the platform.",
    outcome:
      "Talent Flow gave me the opportunity to think beyond individual screens and consider how different parts of a digital product connect. One of my biggest takeaways was that a useful interface is where people can understand how things fit together and move through their tasks with less confusion.\n\nThis project helped me strengthen my approach to user flows, interface consistency, and designing with the wider product experience in mind.",
  },
  {
    slug: "chuks-kitchen",
    shortName: "Chuks Kitchen",
    eyebrow: "Mobile App Design . 2026",
    title: "Chuks Kitchen",
    tags: ["UX Research", "UI Design", "Prototyping", "User Flow"],
    meta: [
      { label: "Role", value: "Product designer" },
      { label: "Project type", value: "Food Ordering App" },
      { label: "Duration", value: "2 months" },
      { label: "Tools", value: "Figma, Figmake, ChatGPT" },
    ],
    hero: {
      src: "/images/case-studies/chuks-kitchen/hero.jpg",
      alt: "Chuks Kitchen app screens on three phones",
    },
    overview:
      "Chuks Kitchen is a food ordering app concept focused on helping people browse meals and place orders through a simple digital experience.\nFor this project, I worked on how users would move through the ordering journey, from exploring food options to deciding what to order. I wanted the experience to feel straightforward, so users could focus more on choosing their meals and less on figuring out how the app works.",
    problem:
      "The challenge was to design an ordering experience that felt easy to follow from beginning to end. When an app makes it difficult to find meals or understand what to do next, even a simple task can become frustrating. I wanted to avoid that by giving the ordering journey a clear structure and making the important actions easy to recognise.",
    processIntro:
      "I started by thinking through the steps a user would take when ordering food. A person needs to explore the available meals, decide what they want, and move towards completing the order. Thinking through this journey helped me understand how the screens needed to connect.",
    steps: [
      {
        heading: "Planning the user flow",
        body: "I considered how users would move from browsing meals to selecting what they wanted and continuing with their order. I wanted each step to feel like a natural continuation of the previous one, rather than making users figure out where to go next.",
        image: img("chuks-kitchen", 1, "Onboarding screen on a phone held in hand", 800),
      },
      {
        heading: "Organising the interface",
        body: "I focused on making the food options easy to explore and the information easy to follow. The layout needed to support quick decisions without overwhelming users with too much information at once.",
        image: img("chuks-kitchen", 2, "Home screen with popular meals and categories"),
      },
      {
        heading: "Designing checkout and delivery tracking",
        body: "I designed the checkout section to help users review their orders and move through the payment process with clarity. I also included a delivery tracking experience so users could follow their order's progress and know what to expect after placing it.",
        image: img("chuks-kitchen", 3, "Checkout, menu and order tracking screens"),
      },
      {
        body: "As I worked through the screens, I considered how the overall journey would feel to someone using the app. Each screen had a purpose, and the experience needed to remain consistent as users moved through the ordering process.",
        image: img("chuks-kitchen", 4, "Cart, profile and menu screens"),
      },
    ],
    solution:
      "The result was a food ordering app concept designed around a clear and connected ordering journey. The interface brings food discovery and order progression into one experience, helping users move towards choosing their meals, placing an order and checking out seamlessly.\nThe focus was not simply on making the app visually appealing, but on making the experience easier to understand and follow.",
    outcome:
      "Chuks Kitchen gave me an opportunity to think about how design can make an everyday task feel more straightforward. It helped me pay closer attention to the small decisions that shape an experience, from how information is presented to how users move between screens.\nIt also reinforced something I value in product design: “a good experience doesn't need to make a simple task feel complicated”.",
  },
];
