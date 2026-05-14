/**
 * Flipkart Knowledge Base
 * 
 * This file contains the hierarchical JSON tree index for Flipkart.
 * It is designed for vectorless RAG systems to help AI assistants
 * explain Flipkart services, ecosystem, ventures, and business operations.
 */

export const FLIPKART_KNOWLEDGE = {
  "id": "root",
  "title": "Flipkart Knowledge Base",
  "summary": "Complete Q&A knowledge tree for Flipkart — India's leading e-commerce and technology ecosystem including marketplace, logistics, fintech, travel, and startup investments.",
  "source": [
    "https://corporate.flipkart.net/corporate-home",
    "https://corporate.flipkart.net/group",
    "https://ventures.flipkart.com/home"
  ],
  "version": "1.0",
  "total_questions": 42,

  "children": [
    {
      "id": "general",
      "title": "General — About Flipkart",
      "summary": "What Flipkart is, its mission, history, and company overview.",
      "children": [
        {
          "id": "general-q1",
          "question": "What is Flipkart?",
          "answer": "Flipkart is one of India's largest e-commerce platforms offering products across electronics, fashion, grocery, appliances, lifestyle, and more."
        },
        {
          "id": "general-q2",
          "question": "When was Flipkart founded?",
          "answer": "Flipkart was founded in 2007."
        },
        {
          "id": "general-q3",
          "question": "Who founded Flipkart?",
          "answer": "Flipkart was founded by Sachin Bansal and Binny Bansal."
        },
        {
          "id": "general-q4",
          "question": "Where is Flipkart headquartered?",
          "answer": "Flipkart is headquartered in Bengaluru, Karnataka, India."
        },
        {
          "id": "general-q5",
          "question": "What is Flipkart's mission?",
          "answer": "Flipkart aims to empower every Indian's dream by making commerce accessible, affordable, and technology-driven."
        }
      ]
    },

    {
      "id": "ecosystem",
      "title": "Flipkart Ecosystem — Group Companies",
      "summary": "Overview of Flipkart Group businesses and ecosystem.",
      "children": [
        {
          "id": "ecosystem-q6",
          "question": "What companies are part of the Flipkart Group?",
          "answer": "Flipkart Group includes Myntra, Cleartrip, Shopsy, Ekart, Flipkart Wholesale, and super.money."
        },
        {
          "id": "ecosystem-q7",
          "question": "What is Myntra?",
          "answer": "Myntra is Flipkart Group's fashion and lifestyle e-commerce platform."
        },
        {
          "id": "ecosystem-q8",
          "question": "What is Cleartrip?",
          "answer": "Cleartrip is the travel booking platform within the Flipkart ecosystem."
        },
        {
          "id": "ecosystem-q9",
          "question": "What is Ekart?",
          "answer": "Ekart is Flipkart's logistics and supply chain arm responsible for deliveries and fulfillment."
        },
        {
          "id": "ecosystem-q10",
          "question": "What is Shopsy?",
          "answer": "Shopsy is Flipkart's social commerce platform focused on reseller-driven shopping experiences."
        }
      ]
    },

    {
      "id": "services",
      "title": "Services — What Flipkart Offers",
      "summary": "Products, commerce solutions, and services provided by Flipkart.",
      "children": [
        {
          "id": "services-q11",
          "question": "What products can users buy on Flipkart?",
          "answer": "Users can buy electronics, mobiles, fashion, home appliances, groceries, furniture, beauty products, and more."
        },
        {
          "id": "services-q12",
          "question": "Does Flipkart offer grocery services?",
          "answer": "Yes, Flipkart offers grocery and daily essentials through its online marketplace."
        },
        {
          "id": "services-q13",
          "question": "Does Flipkart provide fintech services?",
          "answer": "Yes, Flipkart provides fintech and payment services through super.money and integrated payment solutions."
        },
        {
          "id": "services-q14",
          "question": "What is Flipkart Wholesale?",
          "answer": "Flipkart Wholesale is the B2B commerce platform serving retailers, kirana stores, and small businesses."
        },
        {
          "id": "services-q15",
          "question": "Does Flipkart support sellers?",
          "answer": "Yes, Flipkart provides marketplace infrastructure, logistics, and tools for sellers across India."
        }
      ]
    },

    {
      "id": "innovation",
      "title": "Innovation & Technology",
      "summary": "Technology innovations and digital experiences by Flipkart.",
      "children": [
        {
          "id": "innovation-q16",
          "question": "What innovations is Flipkart known for?",
          "answer": "Flipkart is known for innovations like Cash on Delivery, No Cost EMI, Open Box Delivery, and regional language shopping."
        },
        {
          "id": "innovation-q17",
          "question": "Does Flipkart support regional languages?",
          "answer": "Yes, Flipkart supports shopping experiences in multiple Indian languages."
        },
        {
          "id": "innovation-q18",
          "question": "Does Flipkart use AI and technology extensively?",
          "answer": "Yes, Flipkart uses AI, machine learning, automation, and data analytics to improve customer experience and logistics."
        },
        {
          "id": "innovation-q19",
          "question": "What is Open Box Delivery?",
          "answer": "Open Box Delivery allows customers to verify products at the time of delivery before accepting them."
        },
        {
          "id": "innovation-q20",
          "question": "What is No Cost EMI?",
          "answer": "No Cost EMI allows customers to purchase products through installments without additional interest charges."
        }
      ]
    },

    {
      "id": "ventures",
      "title": "Flipkart Ventures",
      "summary": "Startup investments and innovation initiatives by Flipkart Ventures.",
      "children": [
        {
          "id": "ventures-q21",
          "question": "What is Flipkart Ventures?",
          "answer": "Flipkart Ventures is the startup investment and innovation arm of Flipkart."
        },
        {
          "id": "ventures-q22",
          "question": "What does Flipkart Ventures invest in?",
          "answer": "Flipkart Ventures invests in early-stage startups across consumer tech, AI, fintech, SaaS, and digital commerce."
        },
        {
          "id": "ventures-q23",
          "question": "Why does Flipkart invest in startups?",
          "answer": "Flipkart invests in startups to support innovation and strengthen India's technology ecosystem."
        },
        {
          "id": "ventures-q24",
          "question": "Does Flipkart Ventures support founders?",
          "answer": "Yes, Flipkart Ventures supports founders with mentorship, strategic guidance, and ecosystem access."
        }
      ]
    },

    {
      "id": "logistics",
      "title": "Logistics & Supply Chain",
      "summary": "Delivery systems and fulfillment operations.",
      "children": [
        {
          "id": "logistics-q25",
          "question": "How does Flipkart manage deliveries?",
          "answer": "Flipkart manages deliveries primarily through Ekart and partner logistics networks."
        },
        {
          "id": "logistics-q26",
          "question": "What is Ekart's role in Flipkart?",
          "answer": "Ekart handles warehousing, fulfillment, transportation, and last-mile delivery operations."
        },
        {
          "id": "logistics-q27",
          "question": "Does Flipkart deliver across India?",
          "answer": "Yes, Flipkart delivers products across metro cities, tier-2, tier-3, and rural regions in India."
        }
      ]
    },

    {
      "id": "business-model",
      "title": "Business Model & Marketplace",
      "summary": "How Flipkart operates as a marketplace and commerce platform.",
      "children": [
        {
          "id": "business-q28",
          "question": "What business model does Flipkart use?",
          "answer": "Flipkart primarily operates as a marketplace platform connecting sellers and buyers."
        },
        {
          "id": "business-q29",
          "question": "How does Flipkart generate revenue?",
          "answer": "Flipkart generates revenue through marketplace commissions, advertising, logistics services, fintech products, and subscriptions."
        },
        {
          "id": "business-q30",
          "question": "Can small businesses sell on Flipkart?",
          "answer": "Yes, Flipkart enables SMEs and local sellers to sell products online through its marketplace."
        }
      ]
    },

    {
      "id": "customers",
      "title": "Customer Experience",
      "summary": "Shopping experience and customer-focused initiatives.",
      "children": [
        {
          "id": "customers-q31",
          "question": "Why do customers use Flipkart?",
          "answer": "Customers use Flipkart for convenience, competitive pricing, product variety, and fast delivery."
        },
        {
          "id": "customers-q32",
          "question": "Does Flipkart offer return policies?",
          "answer": "Yes, Flipkart offers return and replacement policies on eligible products."
        },
        {
          "id": "customers-q33",
          "question": "Does Flipkart provide EMI payment options?",
          "answer": "Yes, Flipkart provides EMI and No Cost EMI options on eligible products."
        }
      ]
    },

    {
      "id": "sustainability",
      "title": "Sustainability & Social Impact",
      "summary": "Environmental and social initiatives by Flipkart.",
      "children": [
        {
          "id": "sustainability-q34",
          "question": "Does Flipkart focus on sustainability?",
          "answer": "Yes, Flipkart focuses on renewable energy, electric mobility, and sustainable packaging initiatives."
        },
        {
          "id": "sustainability-q35",
          "question": "What is Flipkart Samarth?",
          "answer": "Flipkart Samarth is an initiative supporting artisans, women entrepreneurs, and underserved communities."
        },
        {
          "id": "sustainability-q36",
          "question": "Does Flipkart support local businesses?",
          "answer": "Yes, Flipkart supports local sellers and MSMEs through marketplace access and digital commerce enablement."
        }
      ]
    },

    {
      "id": "careers",
      "title": "Careers & Workplace",
      "summary": "Employment, workplace culture, and opportunities.",
      "children": [
        {
          "id": "careers-q37",
          "question": "Does Flipkart hire across different domains?",
          "answer": "Yes, Flipkart hires in technology, operations, product, design, marketing, finance, and logistics."
        },
        {
          "id": "careers-q38",
          "question": "What kind of workplace culture does Flipkart promote?",
          "answer": "Flipkart promotes an innovation-driven, customer-focused, and collaborative workplace culture."
        }
      ]
    },

    {
      "id": "contact",
      "title": "Contact & Corporate Information",
      "summary": "Corporate and company-related information.",
      "children": [
        {
          "id": "contact-q39",
          "question": "Who owns Flipkart?",
          "answer": "Flipkart is majority-owned by Walmart."
        },
        {
          "id": "contact-q40",
          "question": "Where can users learn about Flipkart corporate information?",
          "answer": "Users can visit the Flipkart Corporate website for company updates, leadership, and initiatives."
        },
        {
          "id": "contact-q41",
          "question": "Where can startups learn about Flipkart Ventures?",
          "answer": "Startups can visit the Flipkart Ventures website to explore investment and innovation programs."
        },
        {
          "id": "contact-q42",
          "question": "Does Flipkart operate only in India?",
          "answer": "Flipkart primarily operates in India and focuses on serving the Indian market."
        }
      ]
    }
  ]
};