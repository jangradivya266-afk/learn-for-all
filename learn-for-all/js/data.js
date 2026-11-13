// ==========================================================================
// LEARN FOR ALL - Educational Content Database
// Community Service Project for NCU CDOE B.Com
// Contains verified public educational resources, quizzes, and study guides
// ==========================================================================

const INITIAL_DATA = {
  categories: [
    {
      id: "commerce",
      name: "Commerce & Business",
      icon: "briefcase",
      color: "from-blue-600 to-indigo-600",
      description: "Financial accounting, management, economics, business math & statistics, and Indian taxation.",
      subcategories: [
        "Financial Accounting",
        "Business Studies",
        "Principles of Management",
        "Business Mathematics",
        "Business Statistics",
        "Economics",
        "GST Basics"
      ]
    },
    {
      id: "english",
      name: "English Learning",
      icon: "book-open",
      color: "from-purple-600 to-indigo-600",
      description: "Grammar, vocabulary, spoken English, corporate communication, and writing mastery.",
      subcategories: [
        "English Grammar",
        "Vocabulary",
        "Spoken English",
        "Communication Skills",
        "Reading and Writing"
      ]
    },
    {
      id: "computer",
      name: "Computer Education",
      icon: "monitor",
      color: "from-blue-500 to-cyan-500",
      description: "Computer fundamentals, MS Office suite (Word, Excel, PPT), Internet essentials, and basic programming.",
      subcategories: [
        "Computer Fundamentals",
        "MS Word",
        "MS Excel",
        "PowerPoint",
        "Internet Basics",
        "Basic Coding"
      ]
    },
    {
      id: "school",
      name: "School Education",
      icon: "graduation-cap",
      color: "from-indigo-500 to-purple-500",
      description: "Free school curriculum support for Mathematics, Science, Social Studies, and General Knowledge (Classes 6-12).",
      subcategories: [
        "Mathematics",
        "Science",
        "Social Science",
        "English",
        "General Knowledge"
      ]
    },
    {
      id: "digital",
      name: "Digital Skills",
      icon: "sparkles",
      color: "from-violet-600 to-pink-500",
      description: "Practical career skills: Graphic design, digital marketing, coding, online safety, and self-directed learning.",
      subcategories: [
        "Graphic Designing",
        "Digital Marketing",
        "Basic Programming",
        "Internet Safety",
        "Online Learning Skills"
      ]
    }
  ],

  platforms: [
    {
      name: "SWAYAM",
      tagline: "Free Online Education by Ministry of Education, Govt. of India",
      url: "https://swayam.gov.in",
      badge: "Govt. of India Initiative",
      description: "Offers university and college courses taught by top Indian professors from IITs, IIMs, and Central Universities. Completely free to audit and learn.",
      color: "#f59e0b"
    },
    {
      name: "NPTEL",
      tagline: "National Programme on Technology Enhanced Learning",
      url: "https://nptel.ac.in",
      badge: "IITs & IISc",
      description: "Comprehensive video lectures, course notes, and assignments across engineering, commerce, management, and basic sciences.",
      color: "#2563eb"
    },
    {
      name: "Khan Academy",
      tagline: "A free, world-class education for anyone, anywhere",
      url: "https://www.khanacademy.org",
      badge: "Non-Profit Global Platform",
      description: "Personalized mastery learning with video lessons, practice exercises, and quizzes in Math, Science, Computing, and Economics.",
      color: "#10b981"
    },
    {
      name: "NCERT Official",
      tagline: "National Council of Educational Research and Training",
      url: "https://ncert.nic.in",
      badge: "Official School Curriculum",
      description: "Free access to complete textbooks for all subjects and classes in PDF format, exemplar problems, and audio/video resources.",
      color: "#ef4444"
    },
    {
      name: "DIKSHA",
      tagline: "Digital Infrastructure for Knowledge Sharing",
      url: "https://diksha.gov.in",
      badge: "National Teacher & Student Portal",
      description: "Interactive worksheets, multimedia lessons, and curriculum-aligned digital textbooks in multiple Indian languages.",
      color: "#8b5cf6"
    },
    {
      name: "ePathshala",
      tagline: "Joint Initiative of MoE and NCERT",
      url: "https://epathshala.nic.in",
      badge: "Digital Books & Audio",
      description: "Access e-textbooks, audio-video educational materials, and graded reading materials for students, teachers, and parents.",
      color: "#06b6d4"
    },
    {
      name: "Microsoft Learn",
      tagline: "Free training and technical skill development",
      url: "https://learn.microsoft.com",
      badge: "Global Tech Training",
      description: "Hands-on interactive learning modules covering computer literacy, cloud computing, office productivity, and software coding.",
      color: "#0078d4"
    },
    {
      name: "YouTube Education",
      tagline: "High-quality open visual educational playlists",
      url: "https://www.youtube.com",
      badge: "Video Learning",
      description: "Free video lectures and tutorials from accredited educators, non-profits, and educational channels worldwide.",
      color: "#ff0000"
    }
  ],

  resources: [
    // COMMERCE & BUSINESS
    {
      id: "res-com-1",
      title: "Financial Accounting by IIT Bombay (Prof. Varadraj Bapat)",
      category: "commerce",
      subcategory: "Financial Accounting",
      platform: "NPTEL / SWAYAM",
      url: "https://nptel.ac.in/courses/110101004",
      description: "Complete foundational course on bookkeeping, trial balance, profit & loss statement, balance sheet, and accounting conventions.",
      isFree: true,
      pricingTag: "100% Free to Access",
      badge: "University Level",
      featured: true,
      videoUrl: "https://www.youtube.com/embed/videoseries?list=PLbRMhDVUMngcf2k63GgC_Gg_3fB6jG6dJ"
    },
    {
      id: "res-com-2",
      title: "NCERT Class 11 & 12 Accountancy Official Digital Textbooks",
      category: "commerce",
      subcategory: "Financial Accounting",
      platform: "NCERT",
      url: "https://ncert.nic.in/textbook.php",
      description: "Official textbook chapters in PDF for Financial Accounting Part I & II, Partnership Accounts, and Company Accounts.",
      isFree: true,
      pricingTag: "100% Free Official PDF",
      badge: "Curriculum Standard",
      featured: false
    },
    {
      id: "res-com-3",
      title: "Principles of Management by IIT Kharagpur (Prof. Susmita Mukhopadhyay)",
      category: "commerce",
      subcategory: "Principles of Management",
      platform: "NPTEL",
      url: "https://nptel.ac.in/courses/110105146",
      description: "Explores managerial functions: planning, organizing, staffing, directing, and controlling, along with modern leadership theories.",
      isFree: true,
      pricingTag: "100% Free Video Lectures",
      badge: "Comprehensive",
      featured: true
    },
    {
      id: "res-com-4",
      title: "NCERT Class 12 Business Studies (ePathshala)",
      category: "commerce",
      subcategory: "Business Studies",
      platform: "ePathshala",
      url: "https://epathshala.nic.in/process.php?id=students&type=e-Textbooks",
      description: "Chapters on Nature of Management, Business Environment, Financial Markets, Marketing Management, and Consumer Protection.",
      isFree: true,
      pricingTag: "100% Free PDF & ePub",
      badge: "Essential Reading",
      featured: false
    },
    {
      id: "res-com-5",
      title: "Microeconomics & Macroeconomics Principles",
      category: "commerce",
      subcategory: "Economics",
      platform: "Khan Academy",
      url: "https://www.khanacademy.org/economics-finance-domain",
      description: "Interactive video modules on supply, demand, market equilibrium, GDP, inflation, fiscal policy, and monetary systems.",
      isFree: true,
      pricingTag: "100% Free Forever",
      badge: "Interactive Lessons",
      featured: true
    },
    {
      id: "res-com-6",
      title: "GST in India - Basics and Practical Guide (CBIC Official Portal)",
      category: "commerce",
      subcategory: "GST Basics",
      platform: "SWAYAM / CBIC",
      url: "https://tutorial.gst.gov.in/",
      description: "Official Indian Government educational modules and FAQs on Goods and Services Tax: CGST, SGST, IGST, registration, and filing concepts.",
      isFree: true,
      pricingTag: "100% Free Official Portal",
      badge: "Govt. Resource",
      featured: true
    },
    {
      id: "res-com-7",
      title: "Business Mathematics & Business Statistics (SWAYAM)",
      category: "commerce",
      subcategory: "Business Statistics",
      platform: "SWAYAM",
      url: "https://swayam.gov.in/explorer?category=COMMERCE",
      description: "Covers measures of central tendency, dispersion, correlation, regression analysis, index numbers, and time-series for business analysis.",
      isFree: true,
      pricingTag: "100% Free Course Material",
      badge: "Quantitative Skills",
      featured: false
    },

    // ENGLISH LEARNING
    {
      id: "res-eng-1",
      title: "English Grammar Master Class by Khan Academy",
      category: "english",
      subcategory: "English Grammar",
      platform: "Khan Academy",
      url: "https://www.khanacademy.org/humanities/grammar",
      description: "Structured grammar learning covering parts of speech, syntax, sentence structure, punctuation, and common grammatical mistakes.",
      isFree: true,
      pricingTag: "100% Free Lessons",
      badge: "Structured Track",
      featured: true
    },
    {
      id: "res-eng-2",
      title: "Developing Soft Skills and Personality (Prof. T. Ravichandran, IIT Kanpur)",
      category: "english",
      subcategory: "Communication Skills",
      platform: "NPTEL",
      url: "https://nptel.ac.in/courses/109104107",
      description: "Improve interpersonal communication, professional etiquette, body language, interview skills, and speech clarity.",
      isFree: true,
      pricingTag: "100% Free Video Course",
      badge: "Career Ready",
      featured: true
    },
    {
      id: "res-eng-3",
      title: "Vocabulary Builder & Everyday English",
      category: "english",
      subcategory: "Vocabulary",
      platform: "DIKSHA",
      url: "https://diksha.gov.in/explore",
      description: "Interactive word bank, root words, prefixes, idioms, and phrase cards for improving daily spoken and written expression.",
      isFree: true,
      pricingTag: "100% Free Access",
      badge: "Vocabulary",
      featured: false
    },
    {
      id: "res-eng-4",
      title: "Professional Business Writing and Reading Skills",
      category: "english",
      subcategory: "Reading and Writing",
      platform: "SWAYAM",
      url: "https://swayam.gov.in/explorer?category=HUMANITIES_AND_ARTS",
      description: "Learn how to draft professional emails, business reports, executive summaries, and analyze business case studies.",
      isFree: true,
      pricingTag: "100% Free Content",
      badge: "Professional Writing",
      featured: false
    },
    {
      id: "res-eng-5",
      title: "Spoken English Conversation Practice for Beginners",
      category: "english",
      subcategory: "Spoken English",
      platform: "YouTube",
      url: "https://www.youtube.com/results?search_query=spoken+english+daily+conversations+beginners",
      description: "Curated open conversational dialogues and pronunciation guides to build fluency and confidence in everyday English.",
      isFree: true,
      pricingTag: "100% Free Videos",
      badge: "Fluency Builder",
      featured: false
    },

    // COMPUTER EDUCATION
    {
      id: "res-comp-1",
      title: "Microsoft Digital Literacy: Computer Basics & Windows",
      category: "computer",
      subcategory: "Computer Fundamentals",
      platform: "Microsoft Learn",
      url: "https://learn.microsoft.com/en-us/training/paths/digital-literacy-computer-basics/",
      description: "Understand computer hardware, memory (RAM/ROM), operating systems, navigating files and folders, and safety.",
      isFree: true,
      pricingTag: "100% Free Modules",
      badge: "Microsoft Certified Path",
      featured: true
    },
    {
      id: "res-comp-2",
      title: "Microsoft Excel for Beginners & Productivity",
      category: "computer",
      subcategory: "MS Excel",
      platform: "Microsoft Learn",
      url: "https://learn.microsoft.com/en-us/training/modules/get-started-with-excel/",
      description: "Learn cell formatting, arithmetic formulas (SUM, AVERAGE, IF, VLOOKUP), charts, tables, and data sorting.",
      isFree: true,
      pricingTag: "100% Free Official Guide",
      badge: "Must-Have Skill",
      featured: true
    },
    {
      id: "res-comp-3",
      title: "Microsoft Word: Professional Document Creation",
      category: "computer",
      subcategory: "MS Word",
      platform: "Microsoft Learn",
      url: "https://learn.microsoft.com/en-us/training/modules/word-get-started/",
      description: "Master document styling, headers, footers, tables, table of contents, and resume formatting in MS Word.",
      isFree: true,
      pricingTag: "100% Free Modules",
      badge: "Beginner Friendly",
      featured: false
    },
    {
      id: "res-comp-4",
      title: "PowerPoint Presentation Skills for Students",
      category: "computer",
      subcategory: "PowerPoint",
      platform: "Microsoft Learn",
      url: "https://learn.microsoft.com/en-us/training/modules/powerpoint-get-started/",
      description: "Create engaging slide decks with animations, infographics, smart art, and professional design layouts.",
      isFree: true,
      pricingTag: "100% Free Modules",
      badge: "Presentation Design",
      featured: false
    },
    {
      id: "res-comp-5",
      title: "Intro to Computer Science & Coding Basics",
      category: "computer",
      subcategory: "Basic Coding",
      platform: "Khan Academy",
      url: "https://www.khanacademy.org/computing/computer-programming",
      description: "Interactive programming basics: variables, loops, conditionals, functions, and creating visual interactive programs.",
      isFree: true,
      pricingTag: "100% Free Coding",
      badge: "Hands-on Practice",
      featured: true
    },
    {
      id: "res-comp-6",
      title: "Internet Basics & Web Browsing Safety",
      category: "computer",
      subcategory: "Internet Basics",
      platform: "Microsoft Learn",
      url: "https://learn.microsoft.com/en-us/training/modules/stay-safe-online/",
      description: "How the Internet works, search engines, evaluating reliable information, bookmarks, downloads, and privacy.",
      isFree: true,
      pricingTag: "100% Free Guide",
      badge: "Essential Literacy",
      featured: false
    },

    // SCHOOL EDUCATION
    {
      id: "res-sch-1",
      title: "Khan Academy School Mathematics (Class 6 to 12)",
      category: "school",
      subcategory: "Mathematics",
      platform: "Khan Academy",
      url: "https://www.khanacademy.org/math",
      description: "Step-by-step arithmetic, algebra, geometry, trigonometry, and calculus aligned with CBSE and state boards.",
      isFree: true,
      pricingTag: "100% Free Exercises",
      badge: "Mastery Based",
      featured: true
    },
    {
      id: "res-sch-2",
      title: "NCERT Official E-Textbooks (Class 1 to 12 - All Subjects)",
      category: "school",
      subcategory: "Science",
      platform: "NCERT",
      url: "https://ncert.nic.in/textbook.php",
      description: "Download authorized NCERT textbooks in Hindi and English for Physics, Chemistry, Biology, Mathematics, and Social Science.",
      isFree: true,
      pricingTag: "100% Free Gov PDF",
      badge: "Govt. Approved",
      featured: true
    },
    {
      id: "res-sch-3",
      title: "DIKSHA National Portal for School Students & Teachers",
      category: "school",
      subcategory: "Social Science",
      platform: "DIKSHA",
      url: "https://diksha.gov.in/",
      description: "QR-coded digital textbooks, interactive quizzes, video explainers, and supplementary worksheets created by state education boards.",
      isFree: true,
      pricingTag: "100% Free Digital Portal",
      badge: "Multi-Language",
      featured: true
    },
    {
      id: "res-sch-4",
      title: "ePathshala Portal for Students & Educators",
      category: "school",
      subcategory: "General Knowledge",
      platform: "ePathshala",
      url: "https://epathshala.nic.in/",
      description: "Educational media, audios, videos, periodicals, and teacher resources managed by Central Institute of Educational Technology (CIET).",
      isFree: true,
      pricingTag: "100% Free Portal",
      badge: "CIET-NCERT",
      featured: false
    },

    // DIGITAL SKILLS
    {
      id: "res-dig-1",
      title: "Google Fundamentals of Digital Marketing",
      category: "digital",
      subcategory: "Digital Marketing",
      platform: "Google / YouTube",
      url: "https://www.youtube.com/results?search_query=fundamentals+of+digital+marketing+course",
      description: "Learn SEO (Search Engine Optimization), content marketing, social media marketing strategy, email marketing, and web analytics.",
      isFree: true,
      pricingTag: "100% Free Tutorials",
      badge: "High Demand Skill",
      featured: true
    },
    {
      id: "res-dig-2",
      title: "Python Programming for Beginners (Microsoft Learn)",
      category: "digital",
      subcategory: "Basic Programming",
      platform: "Microsoft Learn",
      url: "https://learn.microsoft.com/en-us/training/paths/beginner-python/",
      description: "Hands-on browser-based Python track: strings, lists, dictionaries, functions, and practical automation scripts.",
      isFree: true,
      pricingTag: "100% Free Interactive",
      badge: "Beginner Friendly",
      featured: true
    },
    {
      id: "res-dig-3",
      title: "Cyber Security & Internet Safety (CERT-In / Stay Safe Online)",
      category: "digital",
      subcategory: "Internet Safety",
      platform: "SWAYAM / CERT-In",
      url: "https://swayam.gov.in/explorer?category=CYBER_SECURITY",
      description: "Official Indian cyber security principles: defending against financial frauds, phishing, identity theft, and secure mobile usage.",
      isFree: true,
      pricingTag: "100% Free Govt Course",
      badge: "Cyber Security",
      featured: true
    },
    {
      id: "res-dig-4",
      title: "Graphic Design Fundamentals & Visual Branding",
      category: "digital",
      subcategory: "Graphic Designing",
      platform: "YouTube",
      url: "https://www.youtube.com/results?search_query=graphic+design+fundamentals+for+beginners",
      description: "Understand color theory, typography, visual hierarchy, layout composition, and creating social media graphics with free tools.",
      isFree: true,
      pricingTag: "100% Free Video Course",
      badge: "Creative Skill",
      featured: false
    },
    {
      id: "res-dig-5",
      title: "Learning How to Learn: Powerful Mental Tools",
      category: "digital",
      subcategory: "Online Learning Skills",
      platform: "YouTube",
      url: "https://www.youtube.com/results?search_query=learning+how+to+learn+barbara+oakley",
      description: "Proven cognitive learning techniques: Pomodoro method, focused vs. diffuse thinking modes, chunking, and memory consolidation.",
      isFree: true,
      pricingTag: "100% Free Video Series",
      badge: "Productivity",
      featured: false
    }
  ],

  studyGuides: [
    {
      id: "guide-1",
      title: "Golden Rules of Accounting & Journal Entry Framework",
      subject: "Financial Accounting",
      category: "commerce",
      readTime: "8 min read",
      summary: "A complete step-by-step revision guide on Traditional vs. Modern classification of accounts, debit/credit rules, and practical illustrations.",
      content: `
### 1. Introduction to Accounting
Accounting is the process of identifying, measuring, recording, and communicating economic information to enable informed decisions by users.

### 2. Traditional Classification of Accounts
Every transaction impacts at least two accounts (Dual Aspect Concept):
* **Personal Accounts:** Relate to individuals, firms, or institutions (e.g., Ram's A/c, SBI A/c).
  * **Rule:** *Debit the Receiver, Credit the Giver.*
* **Real Accounts:** Relate to assets or properties owned by the business (e.g., Cash, Machinery, Land).
  * **Rule:** *Debit what comes in, Credit what goes out.*
* **Nominal Accounts:** Relate to expenses, losses, incomes, or gains (e.g., Salaries, Rent, Commission).
  * **Rule:** *Debit all expenses and losses, Credit all incomes and gains.*

### 3. Modern Accounting Equation Method
* **Assets** (Cash, Inventory, Debtors, Equipment): Increase = Debit (+), Decrease = Credit (-)
* **Liabilities** (Creditors, Bank Loan): Increase = Credit (+), Decrease = Debit (-)
* **Capital / Equity:** Increase = Credit (+), Decrease = Debit (-)
* **Revenues / Income:** Increase = Credit (+), Decrease = Debit (-)
* **Expenses / Losses:** Increase = Debit (+), Decrease = Credit (-)

### 4. Practical Example
* **Transaction:** Started business with cash Rs. 50,000.
  * *Analysis:* Cash (Asset) is coming in (+), Capital is increasing (+).
  * *Journal Entry:* Cash A/c Dr. 50,000 to Capital A/c 50,000.
* **Transaction:** Paid office rent Rs. 5,000 by cheque.
  * *Analysis:* Rent is an expense (Debit), Bank balance is reducing (Credit).
  * *Journal Entry:* Rent Expense A/c Dr. 5,000 to Bank A/c 5,000.
      `
    },
    {
      id: "guide-2",
      title: "Henri Fayol's 14 Principles of Management (Quick Revision)",
      subject: "Principles of Management",
      category: "commerce",
      readTime: "10 min read",
      summary: "Comprehensive breakdown of Fayol's classical administrative principles essential for B.Com and Class 12 exams.",
      content: `
Henri Fayol, known as the 'Father of General Management', formulated 14 fundamental principles:

1. **Division of Work:** Specialization increases efficiency by making workers more accurate and productive.
2. **Authority and Responsibility:** Authority is the right to give orders; responsibility is the obligation to execute them. They must be balanced.
3. **Discipline:** Obedience, respect for authority, and adherence to organizational rules are essential for smooth functioning.
4. **Unity of Command:** An employee should receive instructions from one superior only to prevent confusion.
5. **Unity of Direction:** One head and one plan for a group of activities having the same objective ("One Team, One Plan").
6. **Subordination of Individual Interest:** Organizational goals must take precedence over personal interests.
7. **Remuneration:** Fair wages should be paid to both employees and employers for reasonable satisfaction.
8. **Centralization and Decentralization:** Striking an optimal balance between decision-making authority at the top and distributed operational control.
9. **Scalar Chain:** The formal line of authority from top management to lowest ranks. In emergencies, "Gang Plank" permits direct lateral communication.
10. **Order:** A place for everything (and everyone) and everything in its place (Material and Social Order).
11. **Equity:** Kindliness, justice, and fair treatment towards all employees without discrimination.
12. **Stability of Personnel Tenure:** Minimize employee turnover; provide job security to build loyalty and efficiency.
13. **Initiative:** Encouraging employees to originate and carry out ideas fosters enthusiasm and innovation.
14. **Esprit de Corps:** Promoting team spirit, mutual trust, and harmony ("Union is Strength").
      `
    },
    {
      id: "guide-3",
      title: "Computer Architecture, Memory Hierarchy & Input/Output",
      subject: "Computer Fundamentals",
      category: "computer",
      readTime: "7 min read",
      summary: "Understand the core components of computing: CPU (ALU, CU, Registers), Primary vs. Secondary storage, and peripheral devices.",
      content: `
### 1. The Von Neumann Architecture
Computers process data into information using four key stages:
* **Input Stage:** Raw data entered via keyboard, mouse, barcode reader, microphone, scanner.
* **Processing Stage (Central Processing Unit - CPU):**
  * **ALU (Arithmetic Logic Unit):** Performs mathematical calculations (+, -, *, /) and logical comparisons (>, <, ==).
  * **CU (Control Unit):** Coordinates the flow of instructions and data between memory, ALU, and I/O devices.
  * **Registers:** High-speed temporary memory locations inside the CPU.
* **Storage / Memory Stage:** Retaining instructions and intermediate data.
* **Output Stage:** Presenting processed results via monitor, printer, speaker.

### 2. Memory Classification
* **Primary Memory (Internal):**
  * **RAM (Random Access Memory):** Volatile (data lost when powered off), read/write, high speed. Holds active running apps.
  * **ROM (Read Only Memory):** Non-volatile (permanent), stores BIOS and bootloader firmware.
  * **Cache Memory:** Extremely fast buffer memory situated between RAM and CPU to speed up instruction retrieval.
* **Secondary Memory (External / Persistent):**
  * **Solid State Drives (SSD):** Flash memory, no moving parts, extremely fast read/write speeds.
  * **Hard Disk Drives (HDD):** Magnetic platters, cost-effective for large capacity backups.
  * **Optical Media & USB Flash Drives:** Portable storage devices.

### 3. Software Categories
* **System Software:** Operating systems (Windows, Linux, macOS), device drivers, system utilities.
* **Application Software:** Word processors, spreadsheets, web browsers, media players.
      `
    },
    {
      id: "guide-4",
      title: "Active and Passive Voice Transformation Guide",
      subject: "English Grammar",
      category: "english",
      readTime: "6 min read",
      summary: "Rules, formula charts, and tense-by-tense transformation tables for converting Active sentences to Passive sentences.",
      content: `
### 1. Basic Concept
* **Active Voice:** The subject performs the action.
  * *Pattern:* Subject + Verb + Object
  * *Example:* "Rohan wrote the report."
* **Passive Voice:** The subject receives the action.
  * *Pattern:* Object + Helping Verb + Past Participle (V3) + by + Subject
  * *Example:* "The report was written by Rohan."

### 2. Tense Transformation Rules
| Tense | Active Voice | Passive Voice |
|---|---|---|
| **Simple Present** | He writes a letter. | A letter is written by him. |
| **Present Continuous** | He is writing a letter. | A letter is being written by him. |
| **Present Perfect** | He has written a letter. | A letter has been written by him. |
| **Simple Past** | He wrote a letter. | A letter was written by him. |
| **Past Continuous** | He was writing a letter. | A letter was being written by him. |
| **Past Perfect** | He had written a letter. | A letter had been written by him. |
| **Simple Future** | He will write a letter. | A letter will be written by him. |
| **Modal Verbs** | He can solve this puzzle. | This puzzle can be solved by him. |

> **Note:** Perfect Continuous tenses and Future Continuous generally do not have standard passive transformations.
      `
    },
    {
      id: "guide-5",
      title: "GST Basics in India: SGST, CGST, IGST and Input Tax Credit",
      subject: "GST Basics",
      category: "commerce",
      readTime: "9 min read",
      summary: "Understand the 'One Nation, One Tax' reform, dual GST architecture, rate slabs, and how Input Tax Credit (ITC) avoids cascading effects.",
      content: `
### 1. What is GST?
Introduced on 1st July 2017, the Goods and Services Tax (GST) is a comprehensive, multi-stage, destination-based indirect tax levied on every value addition in India.

### 2. Dual GST Framework
Because India has a federal structure, both Centre and States administer taxes simultaneously:
* **Intra-State Supply (Within the same state, e.g., Delhi to Delhi):**
  * **CGST (Central GST):** Collected by the Central Government.
  * **SGST (State GST):** Collected by the State Government.
  * *Example:* On an 18% item, 9% is CGST and 9% is SGST.
* **Inter-State Supply (Between different states, e.g., Haryana to Maharashtra):**
  * **IGST (Integrated GST):** Collected by the Central Government and apportioned between Centre and consuming State.

### 3. Key GST Tax Slabs
* **0% (Exempt):** Essential items like fresh milk, unbranded grains, fresh vegetables, education, and healthcare.
* **5%:** Essential medicines, sugar, tea, transport services.
* **12%:** Processed foods, computers, state lottery.
* **18%:** Standard rate for most manufactured goods, banking, telecommunications, IT services.
* **28%:** Luxury goods, automobiles, tobacco products (attracts additional compensation cess).

### 4. Input Tax Credit (ITC)
ITC is the backbone of GST. A registered business can deduct the tax paid on purchases (Inputs) from the tax collected on sales (Outputs), completely eliminating the "tax on tax" (cascading effect).
      `
    }
  ],

  videos: [
    {
      id: "vid-1",
      title: "Introduction to Accounting & Double Entry Bookkeeping",
      subject: "Financial Accounting",
      category: "commerce",
      duration: "18 mins",
      videoId: "m9LpBf4-x7Y",
      embedUrl: "https://www.youtube.com/embed/m9LpBf4-x7Y",
      watchUrl: "https://www.youtube.com/watch?v=m9LpBf4-x7Y",
      description: "Learn the core fundamentals of accounting, why businesses need financial records, and how the double-entry bookkeeping system balances assets and liabilities."
    },
    {
      id: "vid-2",
      title: "Microsoft Excel Tutorial for Beginners - Complete Crash Course",
      subject: "MS Excel",
      category: "computer",
      duration: "30 mins",
      videoId: "Vl0H-qTclOg",
      embedUrl: "https://www.youtube.com/embed/Vl0H-qTclOg",
      watchUrl: "https://www.youtube.com/watch?v=Vl0H-qTclOg",
      description: "Step-by-step beginner guide to Microsoft Excel: spreadsheet layout, entering data, basic math formulas, SUM, AVERAGE, and auto-fill magic."
    },
    {
      id: "vid-3",
      title: "Python for Beginners - Full Course in Plain English",
      subject: "Basic Coding",
      category: "digital",
      duration: "45 mins",
      videoId: "kqtD5dpn9C8",
      embedUrl: "https://www.youtube.com/embed/kqtD5dpn9C8",
      watchUrl: "https://www.youtube.com/watch?v=kqtD5dpn9C8",
      description: "A friendly hands-on introduction to writing code with Python: variables, user input, calculations, conditional statements, and loops."
    },
    {
      id: "vid-4",
      title: "English Grammar: Master Parts of Speech with Examples",
      subject: "English Grammar",
      category: "english",
      duration: "22 mins",
      videoId: "02k_59x7f8U",
      embedUrl: "https://www.youtube.com/embed/02k_59x7f8U",
      watchUrl: "https://www.youtube.com/watch?v=02k_59x7f8U",
      description: "Understand Nouns, Pronouns, Verbs, Adjectives, Adverbs, Prepositions, Conjunctions, and Interjections with clear everyday examples."
    },
    {
      id: "vid-5",
      title: "Cyber Security Awareness: How to Stay Safe from Online Scams",
      subject: "Internet Safety",
      category: "digital",
      duration: "15 mins",
      videoId: "inWWhr5tnEA",
      embedUrl: "https://www.youtube.com/embed/inWWhr5tnEA",
      watchUrl: "https://www.youtube.com/watch?v=inWWhr5tnEA",
      description: "Crucial cyber awareness guide: how fake phishing links work, how UPI OTP scams operate, and practical habits to protect your banking details."
    },
    {
      id: "vid-6",
      title: "Fayol's 14 Principles of Management Explained Visually",
      subject: "Principles of Management",
      category: "commerce",
      duration: "20 mins",
      videoId: "Zq1fL2yQY9E",
      embedUrl: "https://www.youtube.com/embed/Zq1fL2yQY9E",
      watchUrl: "https://www.youtube.com/watch?v=Zq1fL2yQY9E",
      description: "Visual animations clarifying unity of command, scalar chain, division of work, and authority vs responsibility in modern corporate management."
    }
  ],

  quizzes: [
    {
      id: "quiz-commerce",
      title: "Commerce & Business Basics Quiz",
      category: "commerce",
      badge: "Commerce Quiz",
      description: "Test your fundamental knowledge of accounting rules, business principles, and Indian taxation.",
      questions: [
        {
          question: "Under the Golden Rules of Accounting, what is the rule for Real Accounts?",
          options: [
            "Debit all expenses, Credit all incomes",
            "Debit what comes in, Credit what goes out",
            "Debit the receiver, Credit the giver",
            "Debit liabilities, Credit assets"
          ],
          correct: 1,
          explanation: "Real accounts relate to assets and properties. The fundamental rule is: Debit what comes in, Credit what goes out."
        },
        {
          question: "Which of the following is an example of an Intra-State supply in GST?",
          options: [
            "Goods sold from Delhi to Haryana",
            "Goods sold from Mumbai to Pune (Maharashtra to Maharashtra)",
            "Goods imported from Japan to Chennai",
            "Goods sold from Bangalore to Hyderabad"
          ],
          correct: 1,
          explanation: "Supplies occurring within the boundaries of the same state are Intra-State supplies, attracting CGST and SGST."
        },
        {
          question: "Henri Fayol's principle stating that an employee should receive orders from only one superior is called:",
          options: [
            "Unity of Direction",
            "Scalar Chain",
            "Unity of Command",
            "Division of Work"
          ],
          correct: 2,
          explanation: "Unity of Command ensures that an employee reports to and takes instructions from exactly one manager to avoid conflict."
        },
        {
          question: "Which financial statement reports a company's revenues and expenses over a specific period?",
          options: [
            "Balance Sheet",
            "Profit and Loss Account (Income Statement)",
            "Cash Flow Statement only",
            "Trial Balance"
          ],
          correct: 1,
          explanation: "The Profit and Loss Account calculates the net profit or loss generated by subtracting expenses from revenues during a financial period."
        },
        {
          question: "What is the primary formula of the Modern Accounting Equation?",
          options: [
            "Assets = Liabilities + Capital",
            "Assets = Liabilities - Capital",
            "Capital = Assets + Liabilities",
            "Liabilities = Assets + Revenues"
          ],
          correct: 0,
          explanation: "Assets = Liabilities + Capital (Owner's Equity). This reflects that all assets are funded either by outside liabilities or owner capital."
        }
      ]
    },
    {
      id: "quiz-english",
      title: "English Vocabulary & Grammar Quiz",
      category: "english",
      badge: "Language Quiz",
      description: "Check your grasp of essential vocabulary words, grammatical voice, and synonyms.",
      questions: [
        {
          question: "Choose the synonym for the word 'BENEVOLENT':",
          options: [
            "Cruel and unkind",
            "Generous and kind-hearted",
            "Cautious and slow",
            "Arrogant and proud"
          ],
          correct: 1,
          explanation: "'Benevolent' means well-meaning, kindly, and charitable."
        },
        {
          question: "Convert to Passive: 'The chef prepared a delicious dinner.'",
          options: [
            "A delicious dinner had prepared by the chef.",
            "A delicious dinner was prepared by the chef.",
            "A delicious dinner is prepared by the chef.",
            "The dinner has been delicious by the chef."
          ],
          correct: 1,
          explanation: "Simple past tense converts to: was/were + V3 (past participle) -> 'was prepared by the chef'."
        },
        {
          question: "Identify the part of speech of the word 'QUICKLY' in: 'He solved the riddle quickly.'",
          options: [
            "Adjective",
            "Noun",
            "Adverb",
            "Preposition"
          ],
          correct: 2,
          explanation: "'Quickly' modifies the action verb 'solved', so it is an Adverb of Manner."
        },
        {
          question: "Which of the following sentences uses correct subject-verb agreement?",
          options: [
            "Neither the teacher nor the students was present.",
            "Each of the participants were given a certificate.",
            "Neither the teacher nor the students were present.",
            "The list of items are on the desk."
          ],
          correct: 2,
          explanation: "When subjects are joined by 'neither... nor', the verb agrees with the closer subject ('students' is plural, so 'were' is correct)."
        },
        {
          question: "What is the antonym (opposite) of the word 'TRANSPARENT'?",
          options: [
            "Clear",
            "Luminous",
            "Opaque",
            "Fragile"
          ],
          correct: 2,
          explanation: "'Transparent' means allowing light to pass through clearly; its opposite is 'Opaque' (not able to be seen through)."
        }
      ]
    },
    {
      id: "quiz-computer",
      title: "Basic Computer Knowledge Quiz",
      category: "computer",
      badge: "Tech Literacy Quiz",
      description: "Assess your understanding of hardware, memory, keyboard shortcuts, and file systems.",
      questions: [
        {
          question: "Which keyboard shortcut is used to 'Paste' copied content in Windows?",
          options: [
            "Ctrl + C",
            "Ctrl + P",
            "Ctrl + V",
            "Ctrl + X"
          ],
          correct: 2,
          explanation: "Ctrl + V is the universal shortcut to paste clipboard content. (Ctrl + C copies, Ctrl + P prints)."
        },
        {
          question: "What does 'RAM' stand for in computer hardware?",
          options: [
            "Read Access Memory",
            "Random Access Memory",
            "Run Active Mechanism",
            "Rapid Application Module"
          ],
          correct: 1,
          explanation: "RAM stands for Random Access Memory, which is volatile main memory used for currently running programs."
        },
        {
          question: "Which part of the CPU is responsible for carrying out mathematical calculations and logical comparisons?",
          options: [
            "Control Unit (CU)",
            "Arithmetic Logic Unit (ALU)",
            "Cache Memory",
            "BIOS Chip"
          ],
          correct: 1,
          explanation: "The Arithmetic Logic Unit (ALU) performs all arithmetic operations (+, -, *, /) and logical decisions."
        },
        {
          question: "In Microsoft Excel, what symbol must every formula begin with?",
          options: [
            "#",
            "@",
            "=",
            "&"
          ],
          correct: 2,
          explanation: "In MS Excel, all formulas and functions (e.g., =SUM(A1:A10)) must start with an equals sign (=)."
        },
        {
          question: "Which of the following is classified as non-volatile primary storage?",
          options: [
            "RAM",
            "Cache Memory",
            "ROM",
            "Virtual Memory"
          ],
          correct: 2,
          explanation: "ROM (Read Only Memory) retains its firmware and startup instructions even when the power is switched off."
        }
      ]
    },
    {
      id: "quiz-gk",
      title: "General Knowledge Quiz",
      category: "school",
      badge: "GK Quiz",
      description: "Sharpen your knowledge of Indian geography, constitutional facts, and science discoveries.",
      questions: [
        {
          question: "Who is known as the Chief Architect of the Constitution of India?",
          options: [
            "Mahatma Gandhi",
            "Dr. B. R. Ambedkar",
            "Jawaharlal Nehru",
            "Dr. Rajendra Prasad"
          ],
          correct: 1,
          explanation: "Dr. Bhimrao Ramji Ambedkar chaired the Drafting Committee and is recognized as the Father of the Indian Constitution."
        },
        {
          question: "What is the primary gas that makes up approximately 78% of Earth's atmosphere?",
          options: [
            "Oxygen",
            "Carbon Dioxide",
            "Nitrogen",
            "Hydrogen"
          ],
          correct: 2,
          explanation: "Nitrogen constitutes about 78% of Earth's atmosphere, followed by Oxygen at roughly 21%."
        },
        {
          question: "Which planet in our solar system is commonly called the 'Red Planet'?",
          options: [
            "Jupiter",
            "Venus",
            "Mars",
            "Saturn"
          ],
          correct: 2,
          explanation: "Mars appears reddish in the night sky due to the large amount of iron oxide (rust) on its surface."
        },
        {
          question: "What is the currency of Japan?",
          options: [
            "Yuan",
            "Won",
            "Yen",
            "Baht"
          ],
          correct: 2,
          explanation: "The official currency of Japan is the Japanese Yen (JPY)."
        },
        {
          question: "In which year did the Reserve Bank of India (RBI) commence its operations?",
          options: [
            "1947",
            "1935",
            "1950",
            "1921"
          ],
          correct: 1,
          explanation: "The Reserve Bank of India commenced operations on April 1, 1935, in accordance with the RBI Act, 1934."
        }
      ]
    }
  ],

  digitalAwareness: [
    {
      id: "sec-1",
      icon: "shield-check",
      title: "Internet Safety & Safe Browsing Habits",
      tagline: "Building your basic cyber defense shield",
      summary: "Simple everyday rules to keep your computer, phone, and internet connections secure.",
      points: [
        "**Look for HTTPS:** Always check that the website address starts with 'https://' and displays a padlock icon before entering any personal data.",
        "**Avoid Public Wi-Fi for Banking:** Open Wi-Fi networks in cafes or railway stations can be intercepted. Never conduct bank transactions or enter debit card details on unsecured Wi-Fi.",
        "**Keep Devices Updated:** Regularly install official system updates and security patches for Windows, Android, iOS, and your web browser.",
        "**Use Reliable Antivirus / Windows Security:** Ensure Windows Defender or an authentic antivirus solution is turned on with real-time protection enabled."
      ]
    },
    {
      id: "sec-2",
      icon: "alert-triangle",
      title: "Online Scams & UPI Fraud Awareness",
      tagline: "Never lose money to fake calls and payment requests",
      summary: "Understand the trickery scammers use to manipulate online payments and banking customers.",
      points: [
        "**Remember the Golden Rule of UPI:** You only enter your UPI PIN to SEND money, never to RECEIVE money. If someone asks you to enter your PIN to claim a prize or refund, it is 100% a fraud.",
        "**Fake Customer Care Numbers:** Never search for customer service phone numbers on random websites or search engine ads. Always find official helpline numbers inside the verified app.",
        "**Lottery & Job Offer Scams:** Legitimate companies never demand an upfront registration fee or security deposit via WhatsApp or Telegram for a remote part-time job."
      ]
    },
    {
      id: "sec-3",
      icon: "key",
      title: "Creating Strong Passwords & 2FA",
      tagline: "Locking your accounts with impenetrable keys",
      summary: "Why simple passwords get hacked within seconds and how Two-Factor Authentication saves your accounts.",
      points: [
        "**Passphrase Strategy:** Instead of weak words like 'Password123' or your birth year, use a four-word memorable passphrase, e.g., 'BlueBicycleClimbsMountains#2026'.",
        "**Never Reuse Passwords:** If one website gets breached, hackers will try that same email and password combination on Google, Facebook, and banking portals.",
        "**Turn on Two-Factor Authentication (2FA):** Enable 2FA on Gmail, WhatsApp, and social accounts. Even if someone steals your password, they cannot login without the second verification code."
      ]
    },
    {
      id: "sec-4",
      icon: "mail-warning",
      title: "Phishing Awareness: Spotting Fake Emails & Links",
      tagline: "Don't take the cyber bait",
      summary: "Phishing is when fraudsters disguise themselves as trustworthy entities to trick you into revealing confidential data.",
      points: [
        "**Inspect Sender Email Addresses:** An email claiming to be from 'State Bank of India' sent from a random Gmail or strange domain (e.g., support@sbi-verify-portal.xyz) is fake.",
        "**Artificial Urgency & Fear:** Scammers create panic with messages like 'Your electricity will be cut off tonight' or 'Your bank account is blocked - click here immediately'.",
        "**Hover Before Clicking:** On a desktop computer, hover your mouse over links to see the real destination URL before clicking."
      ]
    },
    {
      id: "sec-5",
      icon: "users",
      title: "Safe Use of Social Media & Privacy Settings",
      tagline: "Control who sees your life and memories",
      summary: "Protect your personal boundaries and maintain social privacy.",
      points: [
        "**Lock Your Profile:** Set your social accounts (Instagram, Facebook) to private so only friends and family you approve can view your photographs and life updates.",
        "**Do Not Overshare Real-Time Locations:** Avoid posting boarding passes, hotel locations, or daily travel routes until you have safely returned home.",
        "**Beware of Impersonators:** If a 'friend' messages you asking for urgent money via UPI, call them on phone first to verify if their account was compromised."
      ]
    },
    {
      id: "sec-6",
      icon: "lock",
      title: "Protecting Personal Information & Digital Footprint",
      tagline: "Your identity is your most valuable asset",
      summary: "Safe handling of Aadhaar, PAN card, phone numbers, and sensitive documents.",
      points: [
        "**Masked Aadhaar:** When submitting Aadhaar copies for hotel stays or SIM verification, use 'Masked Aadhaar' which hides the first 8 digits.",
        "**Never Share OTPs:** No legitimate bank employee, telecom executive, or government officer will ever ask you to read out a One-Time Password (OTP).",
        "**App Permissions Audit:** Check your smartphone settings. A simple calculator or torch app has no valid reason to access your contacts, microphone, or camera."
      ]
    }
  ]
};
