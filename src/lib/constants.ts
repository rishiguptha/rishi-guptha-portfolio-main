export const RESUME_URL = '/Rishi_Guptha_Mankala-Resume.pdf';

export const NAV_LINKS = [
  { name: 'About', href: '#about' },
  { name: 'Resume', href: '#resume' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export const SKILLS = [
  'Python',
  'R',
  'SQL',
  'Java',
  'TensorFlow',
  'PyTorch',
  'Scikit-Learn',
  'Pandas',
  'NumPy',
  'Statistical Analysis',
  'Statistical Modeling',
  'Deep Learning',
  'Large Language Models',
  'AWS',
  'Google Cloud',
  'Snowflake',
  'Apache Airflow',
  'Apache Spark',
  'DBT',
  'Power BI',
  'Tableau',
  'Looker Studio',
  'Docker',
  'Git',
  'Linux',
  'Data Modeling',
  'ETL Pipelines',
  'Computer Vision',
  'NLP',
  'Time Series Forecasting',
];

export const EXPERIENCE = [
  {
    title: 'AI Machine Learning Engineer Intern',
    company: 'Blue AI',
    date: 'June 2025 - Present',
    logo: '/company-logos/blue-ai.png',
    description: 'Developing a state-of-the-art AI-powered sales optimization platform that enhances coaching effectiveness through intelligent analytics and automation. Designed and implemented an innovative workflow for automated sales call auditing, enabling coaches to identify performance patterns, track key metrics, and provide data-driven feedback to sales teams. The solution leverages advanced artificial intelligence models to analyze conversation dynamics, objection handling, and closing techniques, resulting in measurable improvements in sales performance and coaching productivity.'
  },
  {
    title: 'Data Science Researcher',
    company: 'Stony Brook University',
    date: 'Jan 2025 - May 2025',
    logo: '/company-logos/stony-brook.png',
    description: 'Built Python-SQL pipelines for S&P 500 time-series data and trained LSTM, CNN, and SVM models using TensorFlow/PyTorch, improving model accuracy by 20% and risk scoring by 15% through Bayesian inference and backtesting. Delivered dashboards (Tableau, Python) integrating predictive outputs and risk metrics, enabling 30% faster portfolio decisions and surfacing volatility trends via SVM optimization and feature extraction.'
  },
  {
    title: 'Data Engineering Intern',
    company: 'Kimberly Clark',
    date: 'Jan 2023 - July 2023',
    logo: '/company-logos/kimberly-clark.png',
    description: 'Automated metadata tagging and validation in Collibra using Python/PostgreSQL workflows, earning 7 certifications and boosting governance team productivity by 25% while reducing manual effort by 30%. Migrated 10K+ assets into Collibra via Excel-based ETL with 100% data integrity, resolved 15% pipeline inconsistencies, and built Power BI/Tableau dashboards to visualize KPIs and reduce reporting errors by 18%. Designed and deployed 5+ advanced Collibra workflows to support real-time data quality checks and lineage validation.'
  },
  {
    title: 'Data Scientist Intern',
    company: 'Matchday AI',
    date: 'Jan 2022 - Dec 2022',
    logo: '/company-logos/matchday-ai.png',
    description: 'Built computer vision pipelines with OpenCV and deep learning to detect field lines, ball position, and player movement from broadcast footage, achieving 90%+ event tracking accuracy. Applied Homography Transformation to convert dynamic camera feeds into 2D field projections, powering spatial analytics for tactical coaching insights. Developed a full-stack annotation platform (Flask, JS, SQLite), reducing manual labeling time by 40% and enabling deployment of data-driven dashboards for 6+ ISL teams via Star Sports.'
  },
];

export const EDUCATION = [
  {
    degree: 'Master of Science in Data Science',
    institution: 'Stony Brook University - SUNY',
    date: 'Jan 2024 - Present',
    logo: '/company-logos/stony-brook.png',
    description: 'Focused on advanced machine learning, deep learning, and statistical modeling with applications in finance and healthcare analytics.'
  },
  {
    degree: 'Bachelor of Technology in Computer Science (Data Analytics)',
    institution: 'VIT-AP University',
    date: 'June 2019 - May 2023',
    logo: '/company-logos/vit-ap.png',
    description: 'Specialized in data analytics, machine learning, and software development with a strong foundation in computer science fundamentals.'
  },
];


export const PROJECTS = [
  {
    title: 'NutriSmart: RAG-Driven Insights for Fitness and Nutrition',
    description: 'Built a Retrieval-Augmented Generation (RAG) pipeline using Sentence Transformers and FAISS to semantically index over 1,200 academic articles on health and nutrition. Containerized the app using Docker and deployed it on AWS EC2 via FastAPI, reducing latency by 40% and improving response time for fitness insights by 30%.',
    technologies: ['Python', 'RAG', 'Sentence Transformers', 'FAISS', 'Docker', 'AWS EC2', 'FastAPI', 'NLP'],
    imageUrl: 'https://images.unsplash.com/photo-1543362906-acfc16c67564?auto=format&fit=crop&w=800&q=80',
    categories: ['Machine Learning', 'Data Science', 'Artificial Intelligence', 'Cloud Computing'],
    readme: 'Advanced RAG pipeline for nutrition insights using state-of-the-art NLP techniques.',
    githubLink: 'https://github.com/rishiguptha/nutismart_rag_project',
    metrics: ['40% latency reduction', '30% faster response time', '1,200+ articles indexed']
  },
  {
    title: 'NYC Taxi Insights',
    description: 'Engineered a scalable ETL pipeline on GCP to process 10M+ NYC taxi ride records, applying BigQuery star schema modeling to optimize query performance by 35%. Trained LightGBM models with BERT-extracted NLP features to predict fare and duration, improving pricing accuracy and boosting model efficiency by 30% in A/B testing.',
    technologies: ['Google Cloud', 'BigQuery', 'LightGBM', 'BERT', 'ETL', 'Star Schema', 'A/B Testing'],
    imageUrl: '/projects/nyc-taxi.jpg',
    categories: ['Data Engineering', 'Machine Learning', 'Cloud Computing'],
    readme: 'Scalable taxi analytics platform with advanced ML predictions.',
    githubLink: 'https://github.com/rishiguptha/Nycab-insights-project.git',
    metrics: ['10M+ records processed', '35% query performance improvement', '30% pricing accuracy boost']
  },
  {
    title: 'Sales Insights Dashboard',
    description: 'Built a centralized reporting solution in Power BI using advanced SQL joins and DAX calculations to integrate multi-source CRM and ERP data. Applied time-series forecasting and geospatial analytics, increasing sales forecast accuracy by 30% and reducing prediction turnaround time by 15%.',
    technologies: ['Power BI', 'SQL', 'DAX', 'Time Series Forecasting', 'Geospatial Analytics'],
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    categories: ['Data Analysis', 'Business Intelligence'],
    readme: 'Comprehensive sales analytics dashboard with predictive capabilities.',
    metrics: ['30% forecast accuracy improvement', '15% faster predictions', 'Multi-source integration']
  },
  {
    title: 'Spotify Playlist Analytics',
    description: 'Developed a serverless ETL architecture on AWS using Lambda, Glue, and S3 to process 18K+ playlist logs, enabling scalable ingestion and transformation. Optimized SQL queries in Athena to cut down average processing time by 40%, enabling daily dashboards to track genre trends and user engagement KPIs.',
    technologies: ['AWS Lambda', 'AWS Glue', 'S3', 'Athena', 'SQL', 'Serverless Architecture'],
    imageUrl: 'https://images.unsplash.com/photo-1611339555312-e607c8352fd7?auto=format&fit=crop&w=800&q=80',
    categories: ['Data Engineering', 'Cloud Computing'],
    readme: 'Serverless music analytics platform for playlist insights.',
    metrics: ['18K+ playlist logs processed', '40% processing time reduction', 'Daily dashboard automation']
  },
  {
    title: "Statistical Ensemble Learning R Package",
    description: "An R package for statistical ensemble methods in machine learning with advanced model stacking and validation techniques.",
    technologies: ["R", "Statistical Modeling", "Ensemble Learning", "Cross-Validation"],
    imageUrl: '/projects/R.jpg',
    categories: ["Machine Learning", "Data Science", "Statistics"],
    readme: 'Advanced statistical ensemble methods implementation.',
    metrics: ['Multiple algorithms integrated', 'Cross-validation framework', 'Performance optimization']
  },
  {
    title: 'Book Recommendation System',
    description: 'A recommendation engine based on collaborative filtering and KNN with matrix factorization techniques for improved accuracy.',
    technologies: ['Python', 'KNN', 'Collaborative Filtering', 'Matrix Factorization', 'Scikit-Learn'],
    imageUrl: 'https://images.unsplash.com/photo-1550399105-c4db5fb85c18?auto=format&fit=crop&w=800&q=80',
    categories: ['Data Science', 'Machine Learning', 'Recommendation Systems'],
    readme: 'Advanced recommendation system with collaborative filtering.',
    githubLink: 'https://github.com/rishiguptha/BooksRecommendation_using_CF',
    metrics: ['High recommendation accuracy', 'Scalable architecture', 'Real-time predictions']
  },
  {
    title: 'Hand Written Character Recognition',
    description: 'Developed a deep learning system for recognizing hand-written characters using CNN architecture with data augmentation and transfer learning.',
    technologies: ['Python', 'Keras', 'TensorFlow', 'CNN', 'Computer Vision', 'Data Augmentation'],
    imageUrl: '/projects/hand-written.jpg',
    categories: ['Machine Learning', 'Computer Vision', 'Deep Learning'],
    readme: 'Advanced character recognition using deep learning.',
    githubLink: 'https://github.com/rishiguptha/Hand-Written-Character-Recognition',
    metrics: ['High accuracy rates', 'Real-time processing', 'Multiple language support']
  },
  {
    title: 'Political Sentiment Analysis',
    description: 'Comprehensive sentiment analysis of political data using advanced NLP techniques, feature engineering, and ensemble models for opinion mining.',
    technologies: ['Python', 'NLP', 'TextBlob', 'Sentiment Analysis', 'Feature Engineering'],
    imageUrl: 'https://images.unsplash.com/photo-1512758017271-d7b84c2113f1?auto=format&fit=crop&w=800&q=80',
    categories: ['Data Science', 'Natural Language Processing'],
    readme: 'Political sentiment analysis with advanced NLP.',
    githubLink: 'https://github.com/rishiguptha/PoliticalSentimentAnalysis',
    metrics: ['Large dataset processing', 'Real-time analysis', 'Multiple sentiment dimensions']
  },
];

export const CONTACT_INFO = {
  email: 'rishiguptha.mankala@gmail.com',
  phone: '+1 (934) 263-3087',
  location: 'Stony Brook, NY, USA (Willing to relocate)',
  linkedin: 'https://linkedin.com/in/rishiguptha',
  github: 'https://github.com/rishiguptha',
  // calendly: 'https://calendly.com/rishigupthamankala',
  // Optional: set your Cal.com booking link to enable the embedded popup scheduler
  // Example: 'https://cal.com/your-username/30min'
  calcom: 'https://cal.com/rishi-guptha-mankala-3qg4sz/15min'
};


export const TECHNICAL_SKILLS = {
  'Programming Languages': ['Python', 'R', 'SQL', 'Java'],
  'Data Science & ML': ['TensorFlow', 'PyTorch', 'Scikit-Learn', 'Pandas', 'NumPy', 'Statistical Analysis', 'Statistical Modeling', 'Deep Learning', 'Large Language Models'],
  'Cloud Platforms': ['AWS (S3, EC2, Glue, Redshift, Lambda)', 'Google Cloud (BigQuery, Cloud Storage, VertexAI)'],
  'Big Data Technologies': ['Snowflake', 'Apache Airflow', 'Apache Spark', 'DBT', 'Data Modeling'],
  'Data Visualization': ['Power BI', 'Tableau', 'Looker Studio', 'AWS QuickSight', 'Matplotlib'],
  'Tools & Platforms': ['Linux', 'Docker', 'Astronomer', 'Git', 'GitHub', 'Microsoft Excel', 'Google Sheets', 'Collibra']
};
   

