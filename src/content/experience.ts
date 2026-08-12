export interface Role {
  title: string;
  dateRange: string;
}

export interface CompanyExperience {
  company: string;
  companyUrl?: string;
  logo: string;
  location: string;
  roles: Role[];
}

export interface InternshipExperience {
  role: string;
  company: string;
  dateRange: string;
  location: string;
  logo: string;
}

export const fullTimeExperienceData: CompanyExperience[] = [
  {
    company: "Databricks",
    companyUrl: "https://www.databricks.com",
    logo: "logos/databricks.png",
    location: "Remote",
    roles: [
      {
        title: "Delivery Solutions Architect",
        dateRange: "Jan 2026 – Present"
      },
      {
        title: "Senior Delivery Solutions Engineer",
        dateRange: "Apr 2024 – Jan 2026"
      }
    ]
  },
  {
    company: "Credera",
    companyUrl: "https://www.credera.com",
    logo: "logos/credera.png",
    location: "Dallas, TX",
    roles: [
      {
        title: "Senior Technology Consultant",
        dateRange: "Jan 2024 – Apr 2024"
      },
      {
        title: "Technology Consultant",
        dateRange: "Sep 2021 – Jan 2024"
      }
    ]
  }
];

export const internshipsData: InternshipExperience[] = [
  {
    company: "bp",
    role: "Data Science Intern",
    dateRange: "Jul 2020 – Aug 2020",
    location: "Austin, TX",
    logo: "logos/bp.png"
  },
  {
    company: "GE Aviation",
    role: "Data Science & Analytics Intern",
    dateRange: "May 2020 – Jul 2020",
    location: "Austin, TX",
    logo: "logos/ge.png"
  },
  {
    company: "Samsung Semiconductor",
    role: "Software Engineering Intern",
    dateRange: "May 2019 – Aug 2019",
    location: "Austin, TX",
    logo: "logos/samsung.png"
  }
];
