

/**
 * Rubenius Knowledge Base
 *
 * This file contains the hierarchical JSON tree index for Rubenius.
 * It is designed for vectorless RAG systems to help AI assistants
 * explain Rubenius services, experiential design systems,
 * workspace strategy, technology integration, and company operations.
 */

export const RUBENIUS_KNOWLEDGE = {
  id: "root",
  title: "Rubenius Knowledge Base",
  summary:
    "Complete Q&A knowledge tree for Rubenius — an experiential design, workplace strategy, and immersive environment company focused on branded workspaces, experience centers, and technology-driven spatial systems.",

  source: [
    "https://www.rubenius.in/",
    "https://www.rubenius.in/about",
    "https://www.rubenius.in/services/all-services",
    "https://www.rubenius.in/careers"
  ],

  version: "1.0",
  total_questions: 48,

  children: [
    {
      id: "general",
      title: "General — About Rubenius",
      summary:
        "Overview of Rubenius, its mission, philosophy, and company background.",
      children: [
        {
          id: "general-q1",
          question: "What is Rubenius?",
          answer:
            "Rubenius is an experiential design and workspace strategy company specializing in immersive environments, experience centers, branded workplaces, and technology-integrated spatial systems."
        },
        {
          id: "general-q2",
          question: "When was Rubenius founded?",
          answer: "Rubenius was founded in 2005."
        },
        {
          id: "general-q3",
          question: "Where is Rubenius headquartered?",
          answer:
            "Rubenius is headquartered in Bengaluru, Karnataka, India."
        },
        {
          id: "general-q4",
          question: "What does Rubenius specialize in?",
          answer:
            "Rubenius specializes in experiential design, immersive spaces, workplace interiors, experience centers, spatial storytelling, and technology-enabled environments."
        },
        {
          id: "general-q5",
          question: "What is Rubenius' philosophy?",
          answer:
            "Rubenius follows an Interior Wellbeing philosophy that combines wellbeing, sustainability, design, and technology to create future-ready environments."
        },
        {
          id: "general-q6",
          question: "What industries does Rubenius work with?",
          answer:
            "Rubenius works across commercial workplaces, retail environments, hospitality spaces, innovation labs, experience centers, and enterprise environments."
        }
      ]
    },

    {
      id: "reds-system",
      title: "REDS™ — Rubenius Experiential Design System",
      summary:
        "Rubenius methodology for experiential and immersive spatial design.",
      children: [
        {
          id: "reds-q7",
          question: "What is REDS™?",
          answer:
            "REDS™ stands for Rubenius Experiential Design System, a structured methodology for designing immersive and performance-driven environments."
        },
        {
          id: "reds-q8",
          question: "What does REDS™ focus on?",
          answer:
            "REDS™ focuses on shaping how people move through, experience, interact with, and remember physical environments."
        },
        {
          id: "reds-q9",
          question: "How does REDS™ combine design disciplines?",
          answer:
            "REDS™ integrates spatial strategy, technology systems, storytelling, psychology, content, and design craft into a unified experiential framework."
        },
        {
          id: "reds-q10",
          question: "Why is strategy important in REDS™?",
          answer:
            "In REDS™, strategy ensures every spatial decision aligns with business goals, user behaviour, engagement outcomes, and brand positioning."
        },
        {
          id: "reds-q11",
          question: "What role does storytelling play in REDS™?",
          answer:
            "Storytelling helps shape emotional journeys and memorable experiences within physical spaces."
        },
        {
          id: "reds-q12",
          question: "Does REDS™ integrate technology?",
          answer:
            "Yes, REDS™ integrates intelligent systems, immersive technologies, sensors, lighting, automation, and interactive experiences into environments."
        }
      ]
    },

    {
      id: "services",
      title: "Services — What Rubenius Offers",
      summary:
        "Core services and experiential environment solutions provided by Rubenius.",
      children: [
        {
          id: "services-q13",
          question: "What services does Rubenius provide?",
          answer:
            "Rubenius provides experiential design, workplace consultancy, design & build, detail & build, refurbishment, furniture procurement, and aftercare services."
        },
        {
          id: "services-q14",
          question: "What is Design & Build at Rubenius?",
          answer:
            "Design & Build combines strategy, spatial design, procurement, execution, and project delivery into a complete end-to-end service."
        },
        {
          id: "services-q15",
          question: "What is Workplace Consultancy?",
          answer:
            "Workplace Consultancy helps organizations analyze workspace usage, employee behavior, collaboration patterns, and future spatial requirements."
        },
        {
          id: "services-q16",
          question: "What is Detail & Build?",
          answer:
            "Detail & Build is a collaborative service where Rubenius executes and enhances partially designed projects while maintaining the original design intent."
        },
        {
          id: "services-q17",
          question: "Does Rubenius provide refurbishment services?",
          answer:
            "Yes, Rubenius refurbishes and repurposes existing spaces to support modern, sustainable, and high-performance workplace needs."
        },
        {
          id: "services-q18",
          question: "What is Rubenius Aftercare?",
          answer:
            "Aftercare is a long-term support service that helps clients maintain, adapt, and evolve their spaces after project delivery."
        }
      ]
    },

    {
      id: "experience-centers",
      title: "Experience Centers & Immersive Spaces",
      summary:
        "Immersive environments, innovation labs, and branded experiences designed by Rubenius.",
      children: [
        {
          id: "experience-q19",
          question: "What are experience centers?",
          answer:
            "Experience centers are immersive environments designed to communicate brand identity, engage users, and create memorable interactions."
        },
        {
          id: "experience-q20",
          question: "How does Rubenius design immersive environments?",
          answer:
            "Rubenius combines spatial design, technology integration, storytelling, lighting, content, and behavioural psychology to create immersive experiences."
        },
        {
          id: "experience-q21",
          question: "What are innovation labs in Rubenius projects?",
          answer:
            "Innovation labs are collaborative environments designed to encourage experimentation, engagement, creativity, and future-focused experiences."
        },
        {
          id: "experience-q22",
          question: "How does Rubenius improve brand engagement?",
          answer:
            "Rubenius creates branded environments that strengthen emotional connection, customer interaction, and brand recall."
        },
        {
          id: "experience-q23",
          question: "Does Rubenius create digital experiences within physical spaces?",
          answer:
            "Yes, Rubenius integrates digital systems, immersive technologies, interactive content, and responsive infrastructure into physical environments."
        }
      ]
    },

    {
      id: "process",
      title: "Process & Methodology",
      summary:
        "Rubenius project workflow and execution approach.",
      children: [
        {
          id: "process-q24",
          question: "What process does Rubenius follow?",
          answer:
            "Rubenius follows a four-stage process: Decode, Design, Develop, and Deploy."
        },
        {
          id: "process-q25",
          question: "What happens during the Decode stage?",
          answer:
            "The Decode stage defines project intent, user behaviour, engagement goals, and measurable business outcomes before design begins."
        },
        {
          id: "process-q26",
          question: "What happens during the Design stage?",
          answer:
            "The Design stage transforms strategy into immersive spatial narratives and interactive experiences."
        },
        {
          id: "process-q27",
          question: "What happens during the Develop stage?",
          answer:
            "The Develop stage resolves materials, technology systems, engineering coordination, and execution planning."
        },
        {
          id: "process-q28",
          question: "What happens during the Deploy stage?",
          answer:
            "The Deploy stage focuses on controlled execution, quality assurance, installation, and performance delivery."
        }
      ]
    },

    {
      id: "technology",
      title: "Technology & Innovation",
      summary:
        "Technology systems and digital innovation used by Rubenius.",
      children: [
        {
          id: "technology-q29",
          question: "Does Rubenius integrate technology into spaces?",
          answer:
            "Yes, Rubenius integrates digital infrastructure, automation, sensors, immersive systems, and interactive technologies into spatial environments."
        },
        {
          id: "technology-q30",
          question: "What role does technology play in experiential design?",
          answer:
            "Technology enables responsive environments, immersive storytelling, interactive experiences, and measurable engagement."
        },
        {
          id: "technology-q31",
          question: "Does Rubenius create smart workplaces?",
          answer:
            "Yes, Rubenius designs intelligent workplaces that improve collaboration, engagement, operational efficiency, and user experience."
        },
        {
          id: "technology-q32",
          question: "How does Rubenius use content in environments?",
          answer:
            "Rubenius uses content systems, visual storytelling, motion graphics, and interactive media to communicate brand narratives within spaces."
        }
      ]
    },

    {
      id: "furniture",
      title: "Furniture & Spatial Solutions",
      summary:
        "Furniture strategy, procurement, and workplace product solutions.",
      children: [
        {
          id: "furniture-q33",
          question: "Does Rubenius provide furniture solutions?",
          answer:
            "Yes, Rubenius provides furniture design, procurement, delivery, and installation services for workplaces and commercial environments."
        },
        {
          id: "furniture-q34",
          question: "How does Rubenius select furniture products?",
          answer:
            "Rubenius selects furniture based on workplace culture, functionality, sustainability, ergonomics, aesthetics, and long-term value."
        },
        {
          id: "furniture-q35",
          question: "Does Rubenius work independently with furniture suppliers?",
          answer:
            "Yes, Rubenius maintains impartiality in supplier selection to ensure the best products and solutions for clients."
        },
        {
          id: "furniture-q36",
          question: "Does Rubenius support sustainable furniture selection?",
          answer:
            "Yes, sustainability and environmental impact are important factors in Rubenius furniture procurement decisions."
        }
      ]
    },

    {
      id: "sustainability",
      title: "Sustainability & Wellbeing",
      summary:
        "Environmental responsibility, wellbeing, and future-ready design initiatives.",
      children: [
        {
          id: "sustainability-q37",
          question: "Does Rubenius focus on sustainability?",
          answer:
            "Yes, Rubenius emphasizes sustainability, responsible design, adaptive reuse, and environmentally conscious spatial development."
        },
        {
          id: "sustainability-q38",
          question: "What is Interior Wellbeing at Rubenius?",
          answer:
            "Interior Wellbeing is Rubenius' design philosophy focused on creating healthier, smarter, and human-centered environments."
        },
        {
          id: "sustainability-q39",
          question: "How does Rubenius support wellbeing in workplaces?",
          answer:
            "Rubenius supports wellbeing through biophilic design, user-centric planning, sustainable materials, lighting systems, and collaborative spatial experiences."
        }
      ]
    },

    {
      id: "careers",
      title: "Careers & Workplace Culture",
      summary:
        "Career opportunities, culture, and organizational growth at Rubenius.",
      children: [
        {
          id: "careers-q40",
          question: "Does Rubenius hire across multiple disciplines?",
          answer:
            "Yes, Rubenius hires designers, developers, strategists, engineers, marketers, architects, and project managers."
        },
        {
          id: "careers-q41",
          question: "What workplace culture does Rubenius promote?",
          answer:
            "Rubenius promotes a collaborative, innovation-driven, design-focused, and future-oriented workplace culture."
        },
        {
          id: "careers-q42",
          question: "Does Rubenius offer career growth opportunities?",
          answer:
            "Yes, Rubenius supports professional growth through collaborative projects, multidisciplinary exposure, and technology-driven innovation."
        },
        {
          id: "careers-q43",
          question: "What kind of professionals work at Rubenius?",
          answer:
            "Rubenius teams include strategists, spatial designers, engineers, developers, architects, content specialists, and immersive experience experts."
        }
      ]
    },

    {
      id: "company-impact",
      title: "Company Impact & Recognition",
      summary:
        "Achievements, awards, scale, and company growth.",
      children: [
        {
          id: "impact-q44",
          question: "How many years has Rubenius been in business?",
          answer:
            "Rubenius has over 20 years of experience in experiential and spatial design."
        },
        {
          id: "impact-q45",
          question: "How many projects has Rubenius completed?",
          answer:
            "Rubenius has completed more than 330 projects across multiple sectors."
        },
        {
          id: "impact-q46",
          question: "Has Rubenius received industry recognition?",
          answer:
            "Yes, Rubenius has received awards and recognition for experiential design, workplace innovation, retail interiors, and technology integration."
        }
      ]
    },

    {
      id: "contact",
      title: "Contact & Corporate Information",
      summary:
        "Corporate details and public company information.",
      children: [
        {
          id: "contact-q47",
          question: "Where can users learn more about Rubenius?",
          answer:
            "Users can visit the official Rubenius website to explore projects, services, insights, and company information."
        },
        {
          id: "contact-q48",
          question: "Does Rubenius primarily operate in India?",
          answer:
            "Yes, Rubenius primarily operates in India with projects across Bengaluru, pan-India regions, and selected global partnerships including Dubai."
        }
      ]
    }
  ]
};


// ## Reference Sources

// * [Rubenius Official Website](https://www.rubenius.in/?utm_source=chatgpt.com)
// * [Rubenius About Page](https://www.rubenius.in/about?utm_source=chatgpt.com)
// * [Rubenius Services](https://www.rubenius.in/services/all-services?utm_source=chatgpt.com)
// * [Rubenius Careers](https://www.rubenius.in/careers?utm_source=chatgpt.com)

// ### Key Information Included

// * Company Overview
// * REDS™ Experiential Design System
// * Workspace & Spatial Strategy
// * Experience Centers
// * Technology Integration
// * Furniture & Procurement
// * Sustainability & Wellbeing
// * Careers & Culture
// * Awards & Recognition
// * Corporate Information
