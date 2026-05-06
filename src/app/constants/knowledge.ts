/**
 * Rubenius Knowledge Base
 * 
 * This file contains the hierarchical JSON tree index for rubenius.in.
 * It is designed for vectorless RAG systems to help AI assistants (like Ziva)
 * explain services, qualify leads, and guide users effectively.
 */

export const RUBENIUS_KNOWLEDGE = {
  "id": "root",
  "title": "Rubenius Knowledge Base",
  "summary": "Complete Q&A knowledge tree for Rubenius — an experiential design and interior solutions company specializing in workplaces, experience centers, and immersive environments.",
  "source": "https://www.rubenius.in/",
  "version": "1.0",
  "total_questions": 36,
  "children": [
    {
      "id": "general",
      "title": "General — About Rubenius",
      "summary": "What Rubenius is, what it does, and its design philosophy.",
      "children": [
        {
          "id": "general-q1",
          "question": "What is Rubenius?",
          "answer": "Rubenius is a Bangalore-based experiential design company that creates immersive environments combining design, technology, and human experience. It focuses on transforming physical spaces into meaningful and engaging environments for businesses."
        },
        {
          "id": "general-q2",
          "question": "When was Rubenius founded?",
          "answer": "Rubenius was founded in 2005 and has since grown into a leading experiential design and interior solutions company."
        },
        {
          "id": "general-q3",
          "question": "What does Rubenius specialize in?",
          "answer": "Rubenius specializes in workplace interiors, experience centers, innovation labs, and branded environments, focusing on creating spaces that enhance user experience and business outcomes."
        },
        {
          "id": "general-q4",
          "question": "What makes Rubenius different from traditional interior design firms?",
          "answer": "Unlike traditional firms, Rubenius focuses on experiential design — integrating storytelling, technology, and human behavior into physical spaces rather than just aesthetics and layout."
        },
        {
          "id": "general-q5",
          "question": "Where is Rubenius located?",
          "answer": "Rubenius is headquartered in Bangalore, India, and works with clients across various regions."
        }
      ]
    },
    {
      "id": "services",
      "title": "Services — What Rubenius Offers",
      "summary": "Detailed breakdown of Rubenius services and solutions.",
      "children": [
        {
          "id": "services-q6",
          "question": "What services does Rubenius provide?",
          "answer": "Rubenius offers end-to-end design and build services including workplace interiors, experience centers, innovation labs, retail environments, and turnkey project execution."
        },
        {
          "id": "services-q7",
          "question": "What are workplace interior solutions?",
          "answer": "Workplace interior solutions involve designing office environments that improve employee productivity, collaboration, and wellbeing through thoughtful spatial planning and design."
        },
        {
          "id": "services-q8",
          "question": "What is an experience center?",
          "answer": "An experience center is a space designed to showcase a brand’s story, products, or innovations through immersive and interactive environments."
        },
        {
          "id": "services-q9",
          "question": "What are innovation labs?",
          "answer": "Innovation labs are collaborative environments designed to foster creativity, experimentation, and problem-solving within organizations."
        },
        {
          "id": "services-q10",
          "question": "Does Rubenius provide turnkey solutions?",
          "answer": "Yes, Rubenius provides turnkey solutions covering the entire lifecycle from concept design to execution and final delivery."
        }
      ]
    },
    {
      "id": "design-system",
      "title": "Design System — REDS Framework",
      "summary": "Rubenius Experiential Design System and approach.",
      "children": [
        {
          "id": "design-q11",
          "question": "What is REDS?",
          "answer": "REDS stands for Rubenius Experiential Design System, a proprietary framework used to create meaningful and immersive environments."
        },
        {
          "id": "design-q12",
          "question": "What does REDS include?",
          "answer": "REDS integrates strategy, storytelling, spatial design, technology, and human-centered experiences into a cohesive design process."
        },
        {
          "id": "design-q13",
          "question": "Why is REDS important?",
          "answer": "REDS ensures that every space is aligned with business goals, brand identity, and user experience, making it more than just a physical environment."
        }
      ]
    },
    {
      "id": "approach",
      "title": "Approach — How Rubenius Works",
      "summary": "Design methodology and execution process.",
      "children": [
        {
          "id": "approach-q14",
          "question": "How does Rubenius approach projects?",
          "answer": "Rubenius follows a structured approach starting with understanding business objectives, followed by strategy, concept development, design, and execution."
        },
        {
          "id": "approach-q15",
          "question": "Does Rubenius integrate technology into spaces?",
          "answer": "Yes, Rubenius integrates technology such as interactive displays, digital installations, and smart systems into physical environments."
        },
        {
          "id": "approach-q16",
          "question": "Does Rubenius focus on sustainability?",
          "answer": "Yes, sustainability is a key focus, with designs incorporating eco-friendly materials and energy-efficient solutions."
        },
        {
          "id": "approach-q17",
          "question": "How does Rubenius ensure user experience?",
          "answer": "Rubenius designs spaces with a human-centered approach, focusing on how people interact with environments to improve engagement and usability."
        }
      ]
    },
    {
      "id": "benefits",
      "title": "Business Value — Why Choose Rubenius",
      "summary": "Key advantages and outcomes for clients.",
      "children": [
        {
          "id": "benefits-q18",
          "question": "Why should a company choose Rubenius?",
          "answer": "Companies choose Rubenius for its ability to create experience-driven spaces that improve brand perception, employee productivity, and customer engagement."
        },
        {
          "id": "benefits-q19",
          "question": "How does Rubenius impact employee productivity?",
          "answer": "By designing optimized workspaces that enhance comfort, collaboration, and wellbeing, Rubenius helps improve employee productivity."
        },
        {
          "id": "benefits-q20",
          "question": "How does Rubenius help branding?",
          "answer": "Rubenius translates brand identity into physical environments, creating consistent and impactful brand experiences."
        },
        {
          "id": "benefits-q21",
          "question": "Can Rubenius improve customer engagement?",
          "answer": "Yes, through immersive environments and experience centers, Rubenius helps businesses engage customers more effectively."
        }
      ]
    },
    {
      "id": "projects",
      "title": "Projects — Work & Portfolio",
      "summary": "Information about past work and project types.",
      "children": [
        {
          "id": "projects-q22",
          "question": "What types of projects has Rubenius worked on?",
          "answer": "Rubenius has worked on corporate offices, experience centers, innovation labs, and branded environments across industries."
        },
        {
          "id": "projects-q23",
          "question": "Does Rubenius handle large-scale projects?",
          "answer": "Yes, Rubenius is capable of handling projects of various scales, from small offices to large enterprise environments."
        }
      ]
    },
    {
      "id": "clients",
      "title": "Clients — Industries & Use Cases",
      "summary": "Who Rubenius works with.",
      "children": [
        {
          "id": "clients-q24",
          "question": "Who are Rubenius clients?",
          "answer": "Rubenius works with corporates, startups, and enterprises looking to transform their physical spaces into experience-driven environments."
        },
        {
          "id": "clients-q25",
          "question": "Which industries does Rubenius serve?",
          "answer": "Rubenius serves industries such as corporate offices, technology companies, retail brands, and innovation-driven organizations."
        }
      ]
    },
    {
      "id": "process",
      "title": "Process — Engagement Flow",
      "summary": "How clients start and work with Rubenius.",
      "children": [
        {
          "id": "process-q26",
          "question": "How can a client start a project with Rubenius?",
          "answer": "Clients can start by contacting Rubenius through their website or consultation channels to discuss project requirements."
        },
        {
          "id": "process-q27",
          "question": "What information is required to begin?",
          "answer": "Typically, clients provide details such as space type, size, location, business goals, and timeline."
        },
        {
          "id": "process-q28",
          "question": "Does Rubenius provide consultation?",
          "answer": "Yes, Rubenius offers consultation to understand client needs and propose suitable design solutions."
        }
      ]
    },
    {
      "id": "technology",
      "title": "Technology Integration",
      "summary": "How technology is used in Rubenius projects.",
      "children": [
        {
          "id": "tech-q29",
          "question": "What kind of technology does Rubenius use?",
          "answer": "Rubenius uses interactive displays, immersive media, digital installations, and smart workplace technologies."
        },
        {
          "id": "tech-q30",
          "question": "Why is technology important in experiential design?",
          "answer": "Technology enhances user engagement and enables dynamic, interactive experiences within physical spaces."
        }
      ]
    },
    {
      "id": "wellbeing",
      "title": "Wellbeing & Sustainability",
      "summary": "Focus on human-centered and sustainable design.",
      "children": [
        {
          "id": "wellbeing-q31",
          "question": "Does Rubenius focus on employee wellbeing?",
          "answer": "Yes, Rubenius designs spaces that prioritize comfort, mental wellbeing, and productivity."
        },
        {
          "id": "wellbeing-q32",
          "question": "How does Rubenius approach sustainability?",
          "answer": "Rubenius incorporates sustainable materials, efficient layouts, and eco-conscious practices into its designs."
        }
      ]
    },
    {
      "id": "contact",
      "title": "Contact & Location",
      "summary": "Basic contact and location info.",
      "children": [
        {
          "id": "contact-q33",
          "question": "Where is Rubenius located?",
          "answer": "Rubenius is based in Bangalore, India."
        },
        {
          "id": "contact-q34",
          "question": "How can someone contact Rubenius?",
          "answer": "Users can contact Rubenius through the official website or inquiry forms to discuss their project."
        },
        {
          "id": "contact-q35",
          "question": "Does Rubenius work outside Bangalore?",
          "answer": "Yes, Rubenius works with clients across different locations depending on project requirements."
        },
        {
          "id": "contact-q36",
          "question": "What is the next step after contacting Rubenius?",
          "answer": "After initial contact, the team schedules a consultation to understand requirements and propose a design approach."
        }
      ]
    }
  ]
};