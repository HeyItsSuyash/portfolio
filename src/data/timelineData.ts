export interface TimelineEntryData {
  id: string;
  year: string;
  collegeTag?: 'Freshman' | 'Sophomore' | 'Junior' | 'Senior';
  title: string;
  highlights: string[];
}

export const TIMELINE_ENTRIES: TimelineEntryData[] = [
  {
    id: 'class6',
    year: 'Class 6 (2016–17)',
    title: 'First Spark',
    highlights: [
      'Introduced to robotics through Roboshala, an IIT Roorkee summer workshop.',
      'Attempted to build a basic quadcopter using hobby motors, handmade controls, and a thermacol frame.',
      'This was my first real exposure to making things with technology and got me curious to try more.'
    ]
  },
  {
    id: 'class7',
    year: 'Class 7 (2017–18)',
    title: 'Discovering Web Development',
    highlights: [
      'Built my first simple HTML and CSS web page and took beginner SoloLearn tutorials.',
      'Enjoyed the instant feedback of seeing code render in a browser.',
      'Joined the school computer club to learn alongside peers.'
    ]
  },
  {
    id: 'class8',
    year: 'Class 8 (2018–19)',
    title: 'Hardware & Arduino Explorations',
    highlights: [
      'Built simple Arduino projects: obstacle avoiding robots, RC cars, and automated dustbins using ultrasonic sensors.',
      'Mentored younger students in early robotics activities at school.',
      'Helped me understand that hardware and software are most rewarding when they work together.'
    ]
  },
  {
    id: 'class9',
    year: 'Class 9 (2019–20)',
    title: 'Science Competitions',
    highlights: [
      'Participated in regional science competitions and academic exhibitions.',
      'Secured 1st place in science aggregation at the regional level and represented the school at nationals.',
      'Helped build confidence in working with science and analytical problems.'
    ]
  },
  {
    id: 'class10',
    year: 'Class 10 (2020–21)',
    title: 'First Practical Web App',
    highlights: [
      'Built a full-stack website sharing COVID-19 safety information and local helpline details.',
      'First experience creating a project aimed at an actual everyday problem rather than just a tutorial.',
      'Solidified my interest in building software that people could genuinely use.'
    ]
  },
  {
    id: 'class11',
    year: 'Class 11 (2021–22)',
    title: 'Programming Fundamentals',
    highlights: [
      'Spent time practicing Python syntax, data types, slicing, loops, and control structures.',
      'Developed a clearer mental model of algorithmic problem solving and writing clean logic.',
      'Set the baseline for later data science and web backend work.'
    ]
  },
  {
    id: 'class12',
    year: 'Class 12 (2022–23)',
    title: 'Data Foundations & Senior Wins',
    highlights: [
      'Started exploring data analysis using Pandas, Matplotlib, and Scikit-learn.',
      'Won 1st place in National Chemistry and Web Development exhibitions; placed in top 3 in a National Python competition.',
      'Balanced competitive academics with hands-on coding side projects.'
    ]
  },
  {
    id: 'early_college',
    year: 'Freshman Year (2023–2024)',
    collegeTag: 'Freshman',
    title: 'Early College & Experimentation',
    highlights: [
      'Built websites for NGOs and small projects while trying out tools like Shopify, Twilio, and prompt engineering.',
      'Experimented with digital content, newsletters, and early tech side projects.',
      'A messy, curious phase of discovering what kinds of software and products I enjoyed making most.'
    ]
  },
  {
    id: 'community_leadership',
    year: 'Freshman Year (2024)',
    collegeTag: 'Freshman',
    title: 'Community & Student Tech',
    highlights: [
      'Helped organize technical events and hackathons with HackWithIndia and the CSIS society at MMMUT.',
      'Mentored junior students and organized coding sessions and orientations.',
      'Learned how technical communities operate and how to collaborate effectively on student-led initiatives.'
    ]
  },
  {
    id: 'products_infrastructure',
    year: 'Sophomore Year (2024–2025)',
    collegeTag: 'Sophomore',
    title: 'Building Products & Systems',
    highlights: [
      'Founded Laterally Inverted Studio as a maker collaborative to build real-world software and experiments.',
      'Built and maintained platforms like Prayukti vLAB for student simulations.',
      'Shifted toward managing real system deployments, database performance, and multi-user reliability.'
    ]
  },
  {
    id: 'startup_experience',
    year: 'Sophomore Year (2025)',
    collegeTag: 'Sophomore',
    title: 'Startup & Product Ownership',
    highlights: [
      'Co-founded EarnBuddy.io, managing the product stack and scaling to 500+ registered users across multiple colleges.',
      'Iterated based on direct user conversations, handling auth, databases, and continuous updates.',
      'Learned the differences between building a project and actually operating an active platform.'
    ]
  },
  {
    id: 'research_and_ai',
    year: 'Junior Year (2025–2026)',
    collegeTag: 'Junior',
    title: 'Research & Applied AI',
    highlights: [
      'Conducted research on bias detection and fairness in LLMs, published with Taylor & Francis.',
      'Pursued B.Sc in Data Science at IIT Madras (CGPA 8.4) alongside B.Tech in CSE at MMMUT.',
      'Built AI workflows and tool-calling agents for real application use cases.'
    ]
  },
  {
    id: 'professional_engineering',
    year: 'Junior Year (2026)',
    collegeTag: 'Junior',
    title: 'Professional Software Engineering',
    highlights: [
      'Worked as Full Stack Engineer at Exaflair Technologies on production web and mobile apps with Next.js, Fastify, and PostgreSQL.',
      'Handled growth engineering at Ganges, automating operations and onboarding early platform users.',
      'Qualified GATE 2026 in Computer Science & Information Technology.'
    ]
  },
  {
    id: 'present',
    year: 'Senior Year (Present)',
    collegeTag: 'Senior',
    title: 'Still Building',
    highlights: [
      'Focusing on full-stack systems, developer tooling, and reliable AI applications.',
      'Enjoy turning rough ideas into working software and exploring problems across different domains.',
      'Still learning, experimenting with new tech, and staying curious.'
    ]
  }
];
