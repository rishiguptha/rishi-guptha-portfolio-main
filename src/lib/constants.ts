export const RESUME_URL = '/Rishi_Guptha_Resume.pdf';

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
  'Machine Learning',
  'Deep Learning',
  'Data Visualization',
  'Statistical Analysis',
  'Data Wrangling',
  'Data Cleaning',
  'Data Mining',
  'Data Modeling',
  'Predictive Modeling',
  'Natural Language Processing',
  'Big Data',
  'Cloud Computing',
  'ETL Pipelines',
  'Database Management',
  'API Integration',
];

export const EXPERIENCE = [
  {
    title: 'Graduate Student Researcher',
    company: 'Stony Brook University',
    date: 'Jan 2025 - Present',
  description: 'Data Science & Model Optimization: Engineered a full data pipeline with feature engineering to boost predictive accuracy by 20% for S&P asset performance, developed deep learning models and optimized classifiers to enhance risk metrics and reduce errors, and delivered interactive visualizations that improved stakeholder decision-making by 30%.'
  },
  {
    title: 'Data & Analytics Intern',
    company: 'Kimberly-Clark Corporation',
    date: 'January 2023 – January 2024',
    description:
      'Data Governance & Automation: Leveraged 7 Collibra certifications to automate metadata tagging and design efficient Python/PostgreSQL workflows, leading large-scale data migrations with 100% integrity, optimizing data quality, and creating interactive Power BI dashboards for real-time governance insights.',
  },
];

export const EDUCATION = [
  {
    degree: 'Master in Data Science',
    institution: 'Stony Brook University - SUNY',
    date: 'Jan 2024 - Present',
    description:
      'Data Governance & Automation: Leveraged 7 Collibra certifications to automate metadata tagging and design efficient Python/PostgreSQL workflows, leading large-scale data migrations with 100% integrity, optimizing data quality, and creating interactive Power BI dashboards for real-time governance insights.',
  },
  {
    degree: 'Bachelor of Technology in Computer Science (Data Analytics)',
    institution: 'VIT-AP University',
    date: 'June 2019 - May 2023',
  },
];

export const PROJECTS = [
  {
    title: 'Political Sentiment Analysis',
    description: 'Analyze political sentiment from data using Python, Pandas, Matplotlib, and TextBlob.',
    technologies: ['Python', 'Pandas', 'Matplotlib', 'TextBlob'],
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    categories: ['Data Science']
  },
  {
    title: 'Hand Written Character Recognition',
    description: 'Develop a system for recognizing hand-written characters using deep learning.',
    technologies: ['Python', 'Keras', 'Tensorflow', 'Pandas', 'CNN'],
    imageUrl: 'https://images.unsplash.com/photo-1581091870624-0cf5a90aa136?auto=format&fit=crop&w=800&q=80',
    categories: ['Machine Learning', 'Data Science']
  },
  {
    title: 'Book Recommendation System',
    description: 'A recommendation engine based on collaborative filtering and KNN.',
    technologies: ['Python', 'KNN', 'Collaborative Filtering'],
    imageUrl: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&w=800&q=80',
    categories: ['Data Science', 'Machine Learning']
  },
  {
    title: 'NYC Taxi Insights',
    description: 'Visualizing taxi data in NYC using cloud tools and interactive dashboards.',
    technologies: ['Google Cloud', 'Airflow', 'BigQuery', 'Looker'],
    imageUrl: 'https://images.unsplash.com/photo-1561154464-0b231e9efdd1?auto=format&fit=crop&w=800&q=80',
    categories: ['Data Engineering', 'Data Analysis']
  },
  {
    title: 'Sales Insights Dashboard',
    description: 'An interactive dashboard for sales data built with Power BI and SQL.',
    technologies: ['Power BI', 'SQL', 'DAX'],
    imageUrl: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=800&q=80',
    categories: ['Data Analysis']
  },
  {
    title: 'Spotify ETL Pipeline',
    description: 'An end-to-end ETL pipeline for Spotify data using AWS services.',
    technologies: ['AWS', 'Lambda', 'Glue', 'Athena'],
    imageUrl: 'https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&w=800&q=80',
    categories: ['Data Engineering']
  },
  {
    title: "Statistical Ensemble Learning R Package",
    description: "An R package for statistical ensemble methods in machine learning.",
    technologies: ["R", "ML Models", "Ensemble Learning"],
    imageUrl: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80",
    categories: ["Machine Learning", "Data Science"],

    // NEW FIELDS:
    readme: `
    ### Overview
    This R package fuses the power of multiple machine learning algorithms—like Random Forests, Gradient Boosting, and Neural Networks—to produce a single, mighty “ensemble” model. The result? More reliable predictions, reduced variance, and fewer catastrophic failures compared to relying on a single algorithm alone.

    ### Key Features
    1. **Adaptive Weighting**: Dynamically adjusts how each model contributes to the final prediction.
    2. **Built-In Metrics**: Evaluates performance using multiple scoring metrics, including accuracy, precision, recall, and AUC.
    3. **Easy Customization**: Plug-and-play architecture for swapping out underlying ML algorithms with minimal configuration.
    4. **Parallel Execution**: Harnesses multi-core processing in R to speed up model training on large datasets.

    ### Installation
    \`\`\`r
    # Install devtools if you haven't already
    install.packages("devtools")

    # Then install the package directly from GitHub
    devtools::install_github("YourUsername/YourRepoName")
    \`\`\`

    ### Getting Started
    \`\`\`r
    # Load the library
    library(ensembleR)

    # Example usage
    data(iris)
    model <- ensemble_fit(iris[,1:4], iris$Species)
    predictions <- ensemble_predict(model, iris[,1:4])
    \`\`\`

    ### License
    Distributed under the MIT License. See \`LICENSE\` file for more details.
        `,
    githubLink: "https://github.com/YourUsername/YourRepoName"
  },
];


export const CONTACT_INFO = {
  email: 'rishiguptha.mankala@stonybrook.edu',
  phone: '+1 (934) 263-3087',
  location: 'Stony Brook, NY, USA',
};
