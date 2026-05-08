export const data = {
  name: 'Jaydeep Patidar',
  nameShort: 'Jaydeep',
  initials: 'J.D',
  tagline: 'SharePoint Developer & Microsoft Cloud Specialist',
  location: 'Bangalore, India',
  email: 'jaydeeppatidar008@gmail.com',
  phone: '+91 82230 13352',
  linkedin: 'https://linkedin.com/in/jaydeeppatidar', // update with real URL
  github: 'https://github.com/jaydeeppatidar',         // update with real URL

  summary:
    'SharePoint Developer with 2+ years of experience building scalable intranet solutions, workflow automation, document generation systems, and AI-powered productivity tools.',

  roles: ['SPFx & React', 'Microsoft Graph', 'Power Automate', 'Copilot Studio', 'SharePoint Online'],

  stats: [
    { num: '2+', label: 'Years Experience' },
    { num: '15+', label: 'Intranet Apps Built' },
    { num: '90%', label: 'Effort Reduction' },
    { num: '70%', label: 'Faster Lookups' },
  ],

  experience: [
    {
      num: '01',
      company: 'Genpact',
      role: 'SharePoint Developer',
      period: 'Sept 2023 — Present',
      location: 'Bangalore, India',
      bullets: [
        'Developed <em>15+ intranet applications</em> using SPFx & React with custom UI components, improving team productivity and user engagement.',
        'Migrated <em>10+ REST-based SharePoint apps</em> to Microsoft Graph, reducing integration effort by 35% and eliminating deprecation risks.',
        'Created reusable React + Fluent UI component framework, reducing web part development time by <em>40%</em> across the team.',
        'Implemented Power Automate workflows for document generation, reminders, and approval tracking — reducing manual effort by <em>60–90%</em>.',
        'Developed Copilot AI agents connected to SharePoint via Entra ID, reducing information lookup time by <em>70%</em>.',
        'Mentored 3 juniors on SPFx best practices & Graph adoption; code reviews reduced defects by <em>30–35%</em>.',
        'Agile SDLC participation contributed to <em>25–30% faster</em> feature delivery and 20% less UAT rework.',
      ],
    },
  ],

  projects: [
    {
      num: '01',
      title: 'Meeting Minutes',
      titleItalic: 'Tracker',
      subtitle: 'Automated MOM Workflow',
      tags: ['SPFx', 'React', 'Graph API', 'Power Automate', 'Outlook'],
      description:
        'Automated MOM creation & approval using SPFx (React) + Power Automate + Outlook integration. Pre-filled project metadata into SPFx forms based on Outlook event details. Automated reminders, review comments, escalations, and MOM sharing.',
      impact: 'Reduced meeting documentation time by 60%. Eliminated manual reminders completely.',
    },
    {
      num: '02',
      title: 'Contract Document',
      titleItalic: 'Generator',
      subtitle: '60-Page Word Automation',
      tags: ['SPFx', 'React', 'Graph API', 'Power Automate', 'MS Word'],
      description:
        'Built a multi-step SPFx form with conditional fields and metadata capture using React + Fluent UI. Integrated with Power Automate to generate 60-page formatted Word contracts. Configured flows using Word templates in SharePoint for version control, approval routing, and secure document storage.',
      impact: 'Reduced contract creation from 0.5–1 day to under 1 hour — a 90% reduction.',
    },
    {
      num: '03',
      title: 'AI-Powered Copilot',
      titleItalic: 'Agent',
      subtitle: 'Research Queries AI',
      tags: ['Copilot Studio', 'Entra ID', 'Bot Framework', 'SPFx', 'React'],
      description:
        'Built a custom Copilot agent retrieving department-specific content from secured SharePoint repositories using Entra ID–based access control. Supported multilingual queries and switched knowledge sources based on selected department, providing verified responses with citation links.',
      impact: 'Reduced research lookup time by 70%. Improved decision turnaround across departments.',
    },
  ],

  skills: [
    {
      category: 'SharePoint',
      items: ['SPFx', 'SharePoint Online', 'Site Provisioning', 'Site Scripts', 'Lists / Libraries', 'Permissions'],
    },
    {
      category: 'Frontend',
      items: ['ReactJS', 'TypeScript', 'JavaScript', 'HTML5 / CSS3', 'Fluent UI'],
    },
    {
      category: 'Microsoft Cloud',
      items: ['Microsoft Graph API', 'Power Automate', 'Copilot Studio', 'Power Apps', 'Microsoft Entra ID'],
    },
    {
      category: 'Tools & Practices',
      items: ['Git', 'Agile / SDLC', 'API Integration', 'Code Reviews', 'Team Mentoring'],
    },
  ],

  education: [
    {
      degree: 'MCA',
      full: 'Master of Computer Application',
      institution: 'National Institute of Technology, Warangal',
      year: '2020 — 2023',
    },
    {
      degree: 'BCA',
      full: 'Bachelor of Computer Application',
      institution: 'Devi Ahilya Vishwavidyalaya, Indore',
      year: '2017 — 2020',
    },
  ],

  certifications: ['Microsoft Azure Fundamentals — AZ-900'],

  marqueeItems: [
    'SPFx', 'React', 'Microsoft Graph', 'Power Automate', 'Copilot Studio',
    'SharePoint Online', 'TypeScript', 'Fluent UI', 'Power Apps', 'Azure AD',
    'AZ-900', 'Agile', 'Bot Framework', 'Entra ID', 'Graph API',
  ],
};
