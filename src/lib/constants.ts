export const RESUME_URL = '/Rishi_Guptha_Mankala-Resume.pdf';

export const NAV_LINKS = [
  { name: 'About', href: '#about' },
  { name: 'Resume', href: '#resume' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export const SKILLS = [
  'Python',
  'Java',
  'SQL',
  'TypeScript',
  'JavaScript',
  'R',
  'PyTorch',
  'TensorFlow',
  'Scikit-Learn',
  'Pandas',
  'NumPy',
  'OpenAI API',
  'RAG',
  'NLP',
  'FAISS',
  'AWS',
  'GCP',
  'Snowflake',
  'Apache Airflow',
  'Apache Spark',
  'DBT',
  'Docker',
  'FastAPI',
  'Next.js',
  'Node.js',
  'PostgreSQL',
  'BigQuery',
  'Tableau',
  'Power BI',
];

export const EXPERIENCE = [
  {
    title: 'Software Engineer Intern (Artificial Intelligence)',
    company: 'Nevara AI',
    location: 'New York, NY',
    date: 'Jun 2025 – Aug 2025',
    logo: '/company-logos/nevara-ai.jpeg',
    description: 'Engineered a near real-time sales auditing platform (Next.js, Supabase) for 100+ active users. Architected an asynchronous AWS Lambda pipeline integrating OpenAI/Deepgram APIs, reducing manual review time by 80% via automated AI coaching reports. Optimized system throughput by fine-tuning AWS Lambda provisioned concurrency and memory, achieving a 40% reduction in latency.',
    highlights: [
      'Built real-time platform for 100+ users',
      '80% reduction in manual review time',
      '40% latency reduction via Lambda optimization'
    ]
  },

  {
    title: 'Data Engineer Intern',
    company: 'Kimberly-Clark',
    location: 'Bengaluru, India',
    date: 'Jan 2023 – Jul 2023',
    logo: '/company-logos/kimberly-clark.png',
    description: 'Led the migration of 10,000+ data assets into Collibra with 100% data integrity. Engineered automated metadata extraction pipelines using Python and Java for Data Lakes and SAP HANA. Deployed custom Python workflows for real-time lineage validation, accelerating reporting approval cycles by 35%.',
    highlights: [
      '10,000+ assets migrated with 100% integrity',
      'Automated metadata extraction pipelines',
      '35% faster reporting cycles'
    ]
  },
  {
    title: 'Software Engineer',
    company: 'Matchday AI',
    location: 'Hyderabad, India',
    date: 'Jan 2022 – Dec 2022',
    logo: '/company-logos/matchday-ai.png',
    description: 'Built computer-vision pipelines using OpenCV for player trajectory and ball position detection. Implemented homography transformations to convert broadcast feeds into 2D tactical projections. Created a full-stack data annotation platform (Flask, JavaScript) for ISL team analytics.',
    highlights: [
      'Computer vision for sports analytics',
      '2D tactical projection system',
      'Full-stack annotation platform'
    ]
  },
];

export const EDUCATION = [
  {
    degree: 'Master of Science, Data Science',
    institution: 'Stony Brook University',
    location: 'Stony Brook, NY',
    date: 'Jan 2024 – Dec 2025',
    logo: '/company-logos/stony-brook.png',
    description: 'Focused on machine learning, deep learning, distributed systems, and statistical modeling with applications in finance and big data analytics.'
  },
  {
    degree: 'Bachelor of Technology, Computer Science',
    institution: 'Vellore Institute of Technology',
    location: 'India',
    date: 'Jun 2019 – May 2023',
    logo: '/company-logos/vit-ap.png',
    description: 'Specialized in computer science fundamentals, data structures, algorithms, and software engineering principles.'
  },
];


export const PROJECTS = [
  {
    title: 'Distributed Spatial-Temporal Clustering Engine',
    description: 'Built a high-performance distributed clustering system using DBSCAN and mpi4py to analyze NYC building permit data consisting of 3.9 million rows. Implemented parallel processing to handle large-scale spatial-temporal analysis.',
    technologies: ['Python', 'DBSCAN', 'mpi4py', 'Distributed Computing', 'Spatial Analysis'],
    imageUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
    categories: ['Data Engineering', 'Machine Learning', 'Distributed Systems'],
    readme: 'High-performance distributed clustering for spatial-temporal data.',
    githubLink: 'https://github.com/rishiguptha',
    metrics: ['3.9M rows processed', 'Distributed DBSCAN', 'Parallel mpi4py']
  },
  {
    title: 'NutriSmart: Semantic Search Engine',
    description: 'Built a production-ready RAG service on AWS EC2 using Sentence Transformers and FAISS for semantic search over 1M+ tokens of nutrition and health research. Containerized with Docker and served via FastAPI for low-latency queries.',
    technologies: ['Python', 'RAG', 'Sentence Transformers', 'FAISS', 'Docker', 'AWS EC2', 'FastAPI'],
    imageUrl: 'https://images.unsplash.com/photo-1543362906-acfc16c67564?auto=format&fit=crop&w=800&q=80',
    categories: ['Machine Learning', 'NLP', 'Cloud Computing'],
    readme: 'Production RAG pipeline for semantic health research search.',
    githubLink: 'https://github.com/rishiguptha/nutismart_rag_project',
    metrics: ['1M+ tokens indexed', 'Low-latency semantic search', 'Dockerized deployment']
  },
  {
    title: 'Stock Market Prediction Engine',
    description: 'Attained R-Squared of 0.82 (18\% error reduction vs. ARIMA) by crafting end-to-end ML pipelines processing 20+ years of S\&P 500 data with programmatic feature normalization, deployed via Streamlit dashboard.',
    technologies: ['Python', 'PyTorch', 'SQL', 'LSTM', 'Streamlit'],
    imageUrl: 'https://images.unsplash.com/photo-1543362906-acfc16c67564?auto=format&fit=crop&w=800&q=80',
    categories: ['Machine Learning','Data Engineering', 'Deep Learning'],
    readme: 'Production RAG pipeline for semantic health research search.',
    githubLink: 'https://github.com/rishiguptha/sp500-forecast',
    metrics: [ '20+years of S&P 500 data processed','R-Squared of 0.82']
  },
  {
    title: 'Snowflake Data Warehouse Modernization',
    description: 'Designed and implemented a modern S3-to-Snowflake ELT pipeline processing 20M+ Movielens records. Built with dbt for transformations, implemented SCD Type 2 logic for slowly changing dimensions, and optimized for cost-efficiency.',
    technologies: ['Snowflake', 'dbt', 'S3', 'SQL', 'ELT', 'SCD2', 'Data Modeling'],
    imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
    categories: ['Data Engineering', 'Cloud Computing'],
    readme: 'Modern data warehouse with dbt and SCD2 patterns.',
    metrics: ['20M+ records processed', 'SCD2 implementation', 'Cost-optimized ELT']
  },
  {
    title: 'NYC Taxi Insights Platform',
    description: 'Built an Airflow-orchestrated GCP workflow to process 10M+ taxi ride records with BigQuery. Integrated BERT embeddings for feature engineering and LightGBM for fare prediction, achieving 35% improvement in query performance.',
    technologies: ['Apache Airflow', 'GCP', 'BigQuery', 'BERT', 'LightGBM', 'Python'],
    imageUrl: '/projects/nyc-taxi.jpg',
    categories: ['Data Engineering', 'Machine Learning', 'Cloud Computing'],
    readme: 'End-to-end taxi analytics with ML predictions.',
    githubLink: 'https://github.com/rishiguptha/Nycab-insights-project.git',
    metrics: ['10M+ records', '35% query performance boost', 'BERT embeddings']
  },
  {
    title: 'Spotify Audio Analytics',
    description: 'Architected a serverless analytics pipeline using AWS Glue and Spark to process playlist data. Implemented optimized partitioning strategies that reduced compute costs by 40% while maintaining query performance.',
    technologies: ['AWS Glue', 'Apache Spark', 'S3', 'Athena', 'Serverless', 'Python'],
    imageUrl: 'https://images.unsplash.com/photo-1611339555312-e607c8352fd7?auto=format&fit=crop&w=800&q=80',
    categories: ['Data Engineering', 'Cloud Computing'],
    readme: 'Cost-optimized serverless music analytics.',
    metrics: ['40% cost reduction', 'Optimized partitioning', 'Serverless architecture']
  },
  {
    title: 'Statistical Ensemble Learning R Package',
    description: 'Developed an R package implementing advanced statistical ensemble methods including model stacking, cross-validation frameworks, and hyperparameter optimization for improved prediction accuracy.',
    technologies: ['R', 'Statistical Modeling', 'Ensemble Learning', 'Cross-Validation'],
    imageUrl: '/projects/R.jpg',
    categories: ['Machine Learning', 'Data Science', 'Statistics'],
    readme: 'Advanced statistical ensemble methods in R.',
    metrics: ['Multiple ensemble algorithms', 'Cross-validation framework', 'Hyperparameter tuning']
  },
  {
    title: 'Book Recommendation System',
    description: 'Built a recommendation engine using collaborative filtering and KNN with matrix factorization techniques. Implemented efficient similarity computations for real-time book recommendations.',
    technologies: ['Python', 'KNN', 'Collaborative Filtering', 'Matrix Factorization', 'Scikit-Learn'],
    imageUrl: 'https://images.unsplash.com/photo-1550399105-c4db5fb85c18?auto=format&fit=crop&w=800&q=80',
    categories: ['Data Science', 'Machine Learning', 'Recommendation Systems'],
    readme: 'Collaborative filtering recommendation system.',
    githubLink: 'https://github.com/rishiguptha/BooksRecommendation_using_CF',
    metrics: ['Real-time recommendations', 'Matrix factorization', 'Scalable architecture']
  },
  {
    title: 'Handwritten Character Recognition',
    description: 'Developed a deep learning system using CNN architecture with data augmentation and transfer learning for handwritten character recognition with high accuracy rates.',
    technologies: ['Python', 'TensorFlow', 'Keras', 'CNN', 'Computer Vision', 'Transfer Learning'],
    imageUrl: '/projects/hand-written.jpg',
    categories: ['Machine Learning', 'Computer Vision', 'Deep Learning'],
    readme: 'CNN-based character recognition system.',
    githubLink: 'https://github.com/rishiguptha/Hand-Written-Character-Recognition',
    metrics: ['High accuracy CNN', 'Data augmentation', 'Transfer learning']
  },
];

export const CONTACT_INFO = {
  email: 'rishiguptha.mankala@gmail.com',
  phone: '+1 (934) 263-3087',
  location: 'New York, NY (Open to relocate)',
  linkedin: 'https://www.linkedin.com/in/rishi-guptha/',
  github: 'https://github.com/rishiguptha',
  calcom: 'https://cal.com/rishi-guptha-mankala-3qg4sz/15min'
};


export const TECHNICAL_SKILLS = {
  'Languages': ['Python', 'Java', 'SQL', 'TypeScript/JavaScript', 'R'],
  'Data & Analytics': ['ETL', 'Spark', 'Airflow', 'dbt', 'Snowflake', 'PostgreSQL', 'BigQuery', 'Tableau'],
  'ML & AI': ['PyTorch', 'TensorFlow', 'NLP', 'RAG', 'OpenAI API', 'FAISS', 'Scikit-Learn'],
  'Cloud & DevOps': ['AWS (Lambda, Glue, S3, EC2)', 'GCP', 'Docker', 'CI/CD', 'FastAPI', 'Next.js', 'Node.js']
};
