export interface User {
  id: string;
  name: string;
  email: string;
  type: 'candidate' | 'employer';
}

export interface CV {
  id: string;
  userId: string;
  personalInfo: {
    fullName: string;
    email: string;
    phone: string;
    location: string;
    summary: string;
  };
  experience: {
    company: string;
    position: string;
    startDate: string;
    endDate: string;
    description: string;
  }[];
  education: {
    institution: string;
    degree: string;
    field: string;
    graduationYear: string;
  }[];
  skills: string[];
}

export interface Job {
  id: string;
  employerId: string;
  title: string;
  company: string;
  location: string;
  type: 'Full-time' | 'Part-time' | 'Contract' | 'Remote';
  description: string;
  requirements: string[];
  postedDate: string;
  salary: string;
}