// All site content lives here. Edit this file to update the portfolio.

export const profile = {
  name: 'Harsh Wangikar',
  headline: 'Data in. Decisions out.',
  lede: 'Business and data analyst with a Master of Business Analytics from UTS Sydney. I build models, dashboards and plain-English answers.',
  email: 'harshwangikar14@gmail.com',
  linkedin: 'https://www.linkedin.com/in/harshwangikar',
  github: 'https://github.com/harshwangikar',
  availability:
    'Open to business analyst and data analyst roles in Australia and India. Full working rights in Australia.',
};

export type Bar = { label: string; value: number; display: string };

export type Project = {
  title: string;
  summary: string;
  metric?: string;
  metricNote?: string;
  bars?: Bar[];
  tags: string[];
  links?: { label: string; href: string }[];
  variant?: 'wide-dark' | 'standard';
};

export const projects: Project[] = [
  {
    title: 'Flood risk prediction for Mumbai and Pune',
    summary:
      "Joined 14 years of NASA weather data with India's national flood inventory to flag flood-risk days, after throwing out two Kaggle datasets that failed validation.",
    metric: '0.90',
    metricNote: 'ROC-AUC on held-out test data with a Random Forest, ahead of logistic regression and XGBoost',
    tags: ['Python', 'scikit-learn', 'XGBoost', 'Cost-based thresholds'],
    links: [{ label: 'View the code', href: 'https://github.com/harshwangikar/flood-risk-prediction-mumbai-pune' }],
    variant: 'wide-dark',
  },
  {
    title: "Who burns out, and who won't ask for help",
    summary:
      'Workforce analytics on 150,000 employee records. I owned model development: predicting burnout level and flagging high-risk people unlikely to seek support.',
    metric: '150k',
    metricNote: 'employee records across work, wellbeing and lifestyle factors, in a team of six',
    tags: ['Python', 'Classification', 'HR analytics'],
    links: [{ label: 'View the code', href: 'https://github.com/harshwangikar/employee-burnout-prediction' }],
  },
  {
    title: 'Retail scorecard that management can read',
    summary:
      'Twelve KPIs across six Balanced Scorecard perspectives for a four-year retail dataset, with interactive dashboards and written commentary.',
    bars: [
      { label: 'Orders discounted', value: 84.3, display: '84%' },
      { label: 'Gross margin', value: 70.7, display: '71%' },
      { label: 'Repeat customers', value: 99, display: '99%' },
    ],
    tags: ['Tableau', 'Excel', 'KPI design'],
    links: [{ label: 'View the project', href: 'https://github.com/harshwangikar/retail-kpi-balanced-scorecard' }],
  },
  {
    title: 'ASX 100 long-short portfolio',
    summary:
      'Rebuilt an Excel model in Python, validated it to machine precision, then tested 18 weighting set-ups to recommend a 130/30 portfolio. Found two errors in the original dashboard along the way.',
    metric: '18',
    metricNote: 'weighting set-ups tested, in a team of three',
    tags: ['Python', 'Excel', 'Quant finance'],
    links: [{ label: 'View the code', href: 'https://github.com/harshwangikar/asx100-long-short-portfolio' }],
  },
  {
    title: 'Where should AI data centres go?',
    summary:
      'An interactive data story on the electricity and water limits of AI. I built the water-risk dashboard from World Resources Institute Aqueduct data.',
    tags: ['Streamlit', 'Tableau', 'WRI Aqueduct', 'Team of four'],
    links: [{ label: 'View the team project', href: 'https://github.com/Apaar-Agarwal/ai-energy-water-narrative' }],
  },
];

export const skills = [
  {
    group: 'Analysis and modelling',
    items: 'Python (pandas, scikit-learn, XGBoost), SQL, regression, classification, clustering, model evaluation',
  },
  { group: 'Reporting and BI', items: 'Tableau, Power BI, Excel, Streamlit, dashboard design, data storytelling' },
  {
    group: 'Business analysis',
    items: 'Requirements, stakeholder analysis, KPI and scorecard design, financial ratio analysis, valuation',
  },
];

export const timeline = [
  { when: '2025 – 2026', title: 'Master of Business Analytics (Extension)', country: 'Australia', org: 'University of Technology Sydney' },
  {
    when: '2021 – 2024',
    title: 'Bachelor of Technology, Computer Engineering',
    country: 'India',
    org: 'Pimpri Chinchwad College of Engineering, Pune, CGPA 8.54',
    note: 'Final-year License Plate OCR project sponsored by Coriolis.',
  },
  {
    when: '2022',
    title: 'Data Analytics Intern',
    country: 'India',
    org: 'UpSkillz',
    note: 'Exploratory analysis in Python and SQL, Tableau dashboards on customer engagement.',
  },
  {
    when: '2022',
    title: 'Published: A Review on Real-Time Traffic Sign Recognition with Voice Warnings',
    org: 'MAT Journals, Vol. 1, Issue 3, co-author',
    note: 'Cited in Scientific Reports (Nature Portfolio), 2026.',
  },
  {
    when: '2018 – 2021',
    title: 'Diploma in Information Technology',
    country: 'India',
    org: "SVERI's College of Engineering (Polytechnic), Pandharpur, 96.75%",
  },
];
