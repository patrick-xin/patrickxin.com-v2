import type { Bookmarks } from "@/types";

export const BOOKMARKS_WEB = [
  {
    category: "web",
    name: "All",
    href: "/bookmark/web",
    slug: "all",
  },
  {
    category: "web",
    name: "Articles",
    href: "/bookmark/web/articles",
    slug: "articles",
  },
  {
    category: "web",
    name: "Inspirations",
    href: "/bookmark/web/inspirations",
    slug: "inspirations",
  },
  {
    category: "web",
    name: "Resources",
    href: "/bookmark/web/resources",
    slug: "resources",
  },
  {
    category: "web",
    name: "Tools",
    href: "/bookmark/web/tools",
    slug: "tools",
  },
  {
    category: "web",
    name: "Videos",
    href: "/bookmark/web/videos",
    slug: "videos",
  },
  {
    category: "web",
    name: "Podcast",
    href: "/bookmark/web/podcasts",
    slug: "podcasts",
  },
];
export const BOOKMARKS_AI = [
  {
    category: "ai",
    name: "All",
    href: "/bookmark/ai",
    slug: "all",
  },
  {
    category: "ai",
    name: "Prompting",
    href: "/bookmark/ai/prompting",
    slug: "prompting",
  },
  {
    category: "ai",
    name: "Text To Image",
    href: "/bookmark/ai/text-to-image",
    slug: "text-to-image",
  },
  {
    category: "ai",
    name: "Tools",
    href: "/bookmark/ai/tools",
    slug: "tools",
  },
];

export const BOOKMARKS: Bookmarks = {
  web: {
    articles: {
      intro:
        "Dive into my handpicked collection of articles that shed light on the intricate world of web development and design. I've scoured the web to bring you pieces that resonate, inform, and inspire. Whether you're a seasoned developer or just starting out, there's something here for everyone.",
      data: [
        {
          title: "Smashing Magazine — For Web Designers And Developers",
          path: "smashingmagazine",
          href: "https://www.smashingmagazine.com/",
          description:
            "Smashing Magazine delivers reliable, useful, but most importantly practical articles to web designers and developers.",
          image: "/assets/images/bookmarks/smashingmagazine.svg",
        },
        {
          title: "CSS Zen Garden: The Beauty of CSS Design",
          path: "csszengarden",
          href: "https://www.csszengarden.com/",
          description:
            "A demonstration of what can be accomplished through CSS-based design. Select any style sheet from the list to load it into this page.",
          image: "/assets/images/bookmarks/zen.svg",
        },
        {
          title: "Free Frontend",
          path: "freefrontend",
          href: "https://freefrontend.com/",
          description:
            "Free hand-picked HTML, CSS and JavaScript (jQuery, React, Vue) code examples, tutorials and articles.",
          image: "/assets/images/bookmarks/freefrontend.ico",
        },
      ],
    },
    inspirations: {
      intro:
        "Need a creative boost? Look no further. Here, I've curated some of the most captivating web designs, UI marvels, and digital masterpieces that have caught my eye. Let these works spark your imagination and drive your next project.",
      data: [
        {
          title:
            "Collect UI - Daily inspiration collected from daily ui archive and beyond",
          path: "collectui",
          href: "https://collectui.com",
          description:
            "Collect UI offers daily design inspiration sourced from the daily UI archive and beyond. The website showcases hand-picked Dribbble shots and updates its collection daily.",
          image: "/assets/images/bookmarks/collectui.ico",
        },
        {
          title: "Awwwards - Website Awards - Best Web Design Trends",
          path: "awwwards",
          href: "http://www.awwwards.com/",
          description:
            "Awwwards are the Website Awards that recognize and promote the talent and effort of the best developers, designers and web agencies in the world.",
          image: "/assets/images/bookmarks/awwwards.png",
        },
        {
          title: "siteInspire - Web Design Inspiration",
          path: "siteinspire",
          href: "https://www.siteinspire.com/",
          description:
            "A CSS gallery and showcase of the best web design inspiration, featuring over 2,500 websites searchable by type, subject, and style.",
          image: "/assets/images/bookmarks/siteinspire.png",
        },
        {
          title:
            "Codrops | Useful resources and inspiration for creative minds",
          path: "codrops",
          href: "https://tympanus.net/codrops/",
          description:
            "Codrops is a web design and development blog that publishes articles and tutorials about the latest web trends, techniques, and new possibilities.",
          image: "/assets/images/bookmarks/codrops.png",
        },
        {
          title: "Dash",
          path: "thisisdash",
          href: "https://thisisdash.com/",
          description:
            "Dash is a design tool and platform aimed at helping businesses grow.",
          image: "/assets/images/bookmarks/dash.svg",
        },
      ],
    },
    resources: {
      intro:
        "Over time, I've stumbled upon tools and treasures that have been game-changers for my projects. I'm sharing this goldmine of resources with you, hoping they'll empower your creative journey just as they have mine.",
      data: [
        {
          title: "CSS-Tricks",
          path: "css-tricks",
          href: "https://css-tricks.com/",
          description:
            "CSS-Tricks features videos on various web design and development topics, with a focus on CSS techniques and best practices.",
          image: "/assets/images/bookmarks/csstricks.svg",
        },
        {
          title:
            "Hero Patterns - Free repeatable SVG background patterns for your web projects",
          path: "heropatterns",
          href: "https://heropatterns.com/",
          description:
            "A collection of free, repeatable SVG background patterns for you to use on your digital projects.",
          image: "/assets/images/bookmarks/hero-patterns.svg",
        },
        {
          title:
            "SVG Backgrounds - Customizable SVG Patterns & Background Designs",
          path: "svgbackgrounds",
          href: "https://www.svgbackgrounds.com/",
          description:
            "Customizable SVG patterns and background designs for websites and blogs. Adjust color and size for a custom background pattern.",
          image: "/assets/images/bookmarks/svgbackground.png",
        },

        {
          title: "Blobmaker - Make organic SVG shapes for your next design",
          path: "blobmaker",
          href: "https://www.blobmaker.app/",
          description:
            "Blobmaker is a free generative design tool to help you quickly create random, unique, and organic-looking SVG shapes.",
          image: "/assets/images/bookmarks/blobmaker.svg",
        },
        {
          title: "Web Vitals",
          path: "pagespeed",
          href: "https://pagespeed.web.dev/",
          description:
            "Essential metrics for a healthy site. Web Vitals is an initiative by Google to provide unified guidance for quality signals that are essential to delivering a great user experience on the web.",
          image: "/assets/images/bookmarks/pagespeed.png",
        },
        {
          title:
            "Free Design Resources and Plugins - Icons, UI Kits, Wireframes, and More | Freebiesupply",
          path: "freebiesupply",
          href: "https://freebiesupply.com/",
          description:
            "Download the best free design resources from Dribbble. Discover the best UI Kits, Icons, Templates, Mockups, Style Guides, Illustrations, and more freebies.",
          image: "/assets/images/bookmarks/freebiesupply.png",
        },
        {
          title: "Subtle Patterns | Free textures for your next web project",
          path: "subtlepatterns",
          href: "https://www.toptal.com/designers/subtlepatterns/",
          description:
            "Subtle Patterns offers free textures for your next web project. The patterns are subtle and are meant to be used as a background or on specific elements to complement the overall design.",
          image: "/assets/images/bookmarks/subtlepatterns.webp",
        },

        {
          title: "Icons & Icon Packs - Download Free PNG Icons | Noun Project",
          path: "thenounproject",
          href: "https://thenounproject.com/",
          description:
            "Noun Project features the most diverse collection of icons and stock photos ever. Download SVG and PNG.",
          image: "/assets/images/bookmarks/thenounproject.ico",
        },
        {
          title: "Easings - Easing Functions Cheat Sheet",
          path: "easings",
          href: "https://easings.net/en#",
          description:
            "A cheat sheet that showcases different types of easing functions, providing a visual guide and snippets for usage in animations.",
          image: "/assets/images/bookmarks/easing.png",
        },
      ],
    },
    tools: {
      intro:
        "Every craftsman has their favorite tools, and web developers are no different. In this section, I've compiled a list of utilities and software that have streamlined my workflow. Explore, experiment, and find your next favorite tool here.",
      data: [
        {
          title: "Excalidraw | Hand-drawn look & feel",
          path: "excalidraw",
          href: "https://excalidraw.com/",
          description:
            "Excalidraw is a virtual whiteboard tool that lets you easily sketch diagrams with a hand-drawn feel.",
          image: "/assets/images/bookmarks/excalidraw.png",
        },
        {
          title: "Transform Tools",
          path: "transform",
          href: "https://transform.tools/",
          description:
            "A collection of free online tools to perform transformations, conversions, and operations on different types of data.",
          image: "/assets/images/bookmarks/transform-tools.png",
        },
        {
          title: "Get Waves - Create SVG waves for your next design",
          path: "getwaves",
          href: "https://getwaves.io/",
          description:
            "A free SVG wave generator to make unique SVG waves for your next web design.",
          image: "/assets/images/bookmarks/getwaves.svg",
        },
        {
          title: "TinyPNG - Compress PNG images while preserving transparency",
          path: "tinypng",
          href: "https://tinypng.com/",
          description:
            "Make your website faster and save bandwidth. TinyPNG optimizes your PNG images by 50-80% while preserving full transparency!",
          image: "/assets/images/bookmarks/tinypng.png",
        },
        {
          title: "Clippy — CSS clip-path maker",
          path: "clippy",
          href: "https://bennettfeely.com/clippy/",
          description:
            "A tool for creating `clip-path` shapes with CSS, making it easier to understand and visualize how the property works.",
          image: "/assets/images/bookmarks/clippy.png",
        },
        {
          title: "CSS triangle generator",
          path: "css-triangle-generator",
          href: "http://apps.eky.hk/css-triangle-generator/",
          description:
            "CSS triangle generator - A generator for pure CSS triangle.",
          image: "/assets/images/bookmarks/css-triangle.gif",
        },
      ],
    },
    videos: {
      intro:
        "Sometimes, seeing is believing. I've gathered a selection of tutorials, talks, and visual guides that have expanded my horizons. Dive into these videos and discover new perspectives and skills in the realm of web development and design.",
      data: [
        {
          title: "Envato Tuts+ Web Design Tutorials",
          path: "tutsplus",
          href: "https://tutsplus.com/",
          description:
            "Envato Tuts+ offers a wide range of video tutorials covering various aspects of web design. From the basics to more advanced topics, these tutorials are designed to help both beginners and experienced designers.",
          image: "/assets/images/bookmarks/tutsplus.png",
        },
        {
          title: "Webflow University",
          path: "webflow-university",
          href: "https://university.webflow.com/",
          description:
            "Webflow University offers comprehensive video tutorials on using the Webflow platform, as well as general web design principles.",
          image: "/assets/images/bookmarks/webflow.ico",
        },
        {
          title: "Udemy Web Design Courses",
          path: "udemy",
          href: "https://www.udemy.com/",
          description:
            "Udemy hosts a variety of web design courses, ranging from beginner to advanced levels. These courses often include video lectures and practical exercises.",
          image: "/assets/images/bookmarks/udemy.png",
        },
        {
          title: "LinkedIn Learning",
          path: "linkedin-learning",
          href: "https://www.linkedin.com/learning",
          description:
            "Lynda, now known as LinkedIn Learning, offers a plethora of video courses on web design, taught by industry professionals.",
          image: "/assets/images/bookmarks/linkedin-learning.png",
        },
        {
          title: "Codecourse",
          path: "codecourse",
          href: "https://codecourse.com/",
          description:
            "Codecourse provides video tutorials on web design and development, focusing on practical coding exercises and real-world projects.",
          image: "/assets/images/bookmarks/codecourse.png",
        },
      ],
    },
    podcast: {
      intro:
        "Tune into conversations, stories, and insights from industry leaders and trailblazers. These podcasts have been my companions during long commutes and late-night coding sessions. Listen in and join the journey of discovery.",
      data: [
        {
          title: "ShopTalk Show",
          path: "shoptalkshow",
          href: "https://shoptalkshow.com/",
          description:
            "A podcast about front-end web design, development, and UX. Hosted by Dave Rupert and Chris Coyier.",
          image: "/assets/images/bookmarks/shoptalkshow.svg",
        },
        {
          title: "Responsive Web Design Podcast",
          path: "responsivewebdesign",
          href: "https://responsivewebdesign.com/podcast/",
          description:
            "A podcast where Karen McGrane and Ethan Marcotte interview the people who make responsive redesigns happen.",
          image: "/assets/images/bookmarks/responsivewebdesign.ico",
        },
        {
          title: "Front End Happy Hour",
          path: "frontendhappyhour",
          href: "http://frontendhappyhour.com/",
          description:
            "A podcast featuring a panel of Software Engineers from Netflix, Twitch, & Atlassian talking over drinks about all things Front End development.",
          image: "/assets/images/bookmarks/frontendhappyhour.svg",
        },
        {
          title: "Design Details",
          path: "designdetails",
          href: "https://designdetails.fm/",
          description:
            "A podcast about the details of design, hosted by Marshall Bock and Brian Lovin.",
          image: "/assets/images/bookmarks/designdetails.png",
        },
        {
          title: "UI Breakfast",
          path: "uibreakfast",
          href: "https://uibreakfast.com/",
          description:
            "Join host Jane Portman, a UI/UX consultant, as she discusses UI/UX, products, marketing, and so much more with industry experts.",
          image: "/assets/images/bookmarks/uibreakfast.png",
        },
      ],
    },
  },
  ai: {
    prompting: {
      intro:
        "Step into the fascinating world of AI prompting with my curated list of resources. Here, I've gathered insightful platforms and tools that showcase the power of AI in generating content. Whether you're looking to understand the basics or dive deep into advanced techniques, this section is your gateway.",
      data: [
        {
          title: "Learn Prompting - Your Guide to Communicating with AI",
          path: "learnprompting",
          href: "https://learnprompting.org/",
          description:
            "Learn Prompting is the largest and most comprehensive course in prompt engineering available on the internet, with over 60 content modules, translated into 9 languages, and a thriving community.",
          image: "/assets/images/bookmarks/learnprompting.ico",
        },
        {
          title: "Awesome ChatGPT Prompts - Prompts to use ChatGPT better.",
          path: "promptschat",
          href: "https://prompts.chat/",
          description:
            "This repo includes ChatGPT prompt curation to use ChatGPT better. It is a collection of prompt examples to be used with the ChatGPT model, which is capable of generating human-like text. The repository encourages users to add their own prompts to the list and to use ChatGPT to generate new prompts as well. ",
          image: "/assets/images/bookmarks/promptschat.png",
        },
        {
          title: "Guild of the Rose - Prompt Engineering Workshop",
          path: "guildoftherose",
          href: "https://guildoftherose.org/workshops/prompt-engineering",
          description:
            "The Guild of the Rose offers a workshop on prompt engineering. The workshop aims to provide participants with a deeper understanding of how to effectively communicate with AI models using prompts.",
          image: "/assets/images/bookmarks/guildoftherose.png",
        },
        {
          title:
            "GPT-3 Demo - ChatGPT, Generative AI and GPT-3 Apps and use cases.",
          path: "gpt3demo",
          href: "https://gpt3demo.com/",
          description:
            "Get inspired and discover how companies are implementing AI to power new use cases.",
          image: "/assets/images/bookmarks/gpt3demo.png",
        },
      ],
    },
    "text-to-image": {
      intro:
        "The magic of AI doesn't stop at text. Discover platforms that transform simple text into vivid images. I've been amazed at how AI can visualize our thoughts, and I'm excited to share these tools with you. Explore and witness the blend of creativity and technology.",
      data: [
        {
          title: "Civit AI - Empower Your Business with AI",
          path: "civitai",
          href: "https://civitai.com/",
          description:
            "Civit AI provides AI-driven solutions to empower businesses. The platform offers a suite of tools and features that leverage AI to optimize business operations, enhance customer engagement, and drive growth. It is designed for businesses of all sizes looking to integrate AI into their operations for better results.",
          image: "/assets/images/bookmarks/civitai.png",
        },
        {
          title: "Kaiber - AI for Content Creation",
          path: "kaiber",
          href: "https://kaiber.ai/",
          description:
            "Kaiber is an AI-powered platform for content creation. It assists users in generating high-quality content for various purposes, including blogs, articles, and social media posts.",
          image: "/assets/images/bookmarks/kaiber.png",
        },
        {
          title: "Pixian - Create Stunning Visuals with AI",
          path: "pixian",
          href: "https://pixian.ai/",
          description:
            "Pixian offers a platform to create stunning visuals using AI. It provides tools and resources for designers and creators to enhance their visuals and graphics using advanced AI algorithms. The platform is user-friendly and offers a range of features to customize and improve visuals.",
          image: "/assets/images/bookmarks/pixian.png",
        },
        {
          title: "Invoke AI - Advanced AI Solutions for Modern Challenges",
          path: "invokeai",
          href: "https://invoke.ai/",
          description:
            "Invoke AI offers advanced AI solutions to address modern challenges. The platform provides a range of tools and features that harness the power of AI to solve complex problems, generate insights, and improve decision-making. It is designed for individuals and businesses looking to leverage AI for innovative solutions.",
          image: "/assets/images/bookmarks/invokeai.webp",
        },
      ],
    },
    tools: {
      intro:
        "AI is a vast domain, and having the right tools can make all the difference. Here, I've compiled a list of AI-powered platforms and utilities that have enhanced my projects and understanding. Dive in and discover tools that can elevate your AI journey.",
      data: [
        {
          title: "There is AI for That",
          path: "theresanaiforthat",
          href: "https://theresanaiforthat.com/",
          description: "Find AI tools for any use.",
          image: "/assets/images/bookmarks/theresanaiforthat.png",
        },
        {
          title: "Decktopus - Create Presentations Without Effort",
          path: "aidungeon",
          href: "https://www.decktopus.com/",
          description:
            "Decktopus is an AI presentation maker that creates amazing presentations in seconds. Users only need to type the presentation title, and the presentation is ready.",
          image: "/assets/images/bookmarks/decktopus.png",
        },
        {
          title: "Claude - Alternative to GPT",
          path: "claude",
          href: "https://claude.ai/",
          description:
            "A next-generation AI assistant for your tasks, no matter the scale",
          image: "/assets/images/bookmarks/claude.png",
        },
        {
          title: "Cleanup - Enhance your photos using AI",
          path: "cleanuppictures",
          href: "https://cleanup.pictures/",
          description:
            "Platform that uses AI to enhance photos. Users can simply upload their photos, and the AI will automatically enhance them by removing noise, sharpening, and improving the overall quality.",
          image: "/assets/images/bookmarks/cleanuppictures.ico",
        },

        {
          title: "Easy Peasy - Simplify Your Tasks with AI",
          path: "easypeasy",
          href: "https://easy-peasy.ai/",
          description:
            "Easy Peasy offers AI solutions to simplify tasks and improve productivity.",
          image: "/assets/images/bookmarks/easypeasy.png",
        },
        {
          title: "Flair AI - Enhance Your Content with AI",
          path: "flair",
          href: "https://flair.ai/",
          description:
            "Flair AI provides tools and resources to enhance content using AI.",
          image: "/assets/images/bookmarks/flair.avif",
        },
        {
          title: "Tome - AI-Powered Writing Assistant",
          path: "tome",
          href: "https://tome.app/",
          description:
            "Tome is an AI-powered writing assistant that helps users improve their writing skills.",
          image: "/assets/images/bookmarks/tome.ico",
        },
        {
          title: "Cohesive - AI for Team Collaboration",
          path: "cohesive",
          href: "https://cohesive.so/",
          description:
            "Cohesive offers AI solutions for team collaboration and project management.",
          image: "/assets/images/bookmarks/cohesive.png",
        },
        {
          title: "Stack AI - Advanced AI Solutions for Businesses",
          path: "stackai",
          href: "https://www.stack-ai.com/",
          description:
            "Stack AI provides advanced AI solutions for businesses.",
          image: "/assets/images/bookmarks/stackai.ico",
        },
        {
          title: "DreamStudio - Create with AI",
          path: "dreamstudio",
          href: "https://dreamstudio.ai/",
          description:
            "DreamStudio offers a platform for creative content creation using AI.",
          image: "/assets/images/bookmarks/dreamstudio.webp",
        },
      ],
    },
  },
};
