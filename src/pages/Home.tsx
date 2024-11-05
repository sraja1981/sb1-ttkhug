import React, { useState } from 'react';
import { Job } from '../types';
import { JobCard } from '../components/JobCard';
import { SearchIcon, BriefcaseIcon, MapPinIcon } from 'lucide-react';

const MOCK_JOBS: Job[] = [
  {
    id: '1',
    employerId: 'emp1',
    title: 'Senior React Developer',
    company: 'Tech Corp',
    location: 'San Francisco, CA',
    type: 'Full-time',
    description: 'We are looking for an experienced React developer...',
    requirements: ['React', 'TypeScript', 'Node.js', '5+ years experience'],
    postedDate: '2024-03-10',
    salary: '$120k - $150k',
  },
  {
    id: '2',
    employerId: 'emp2',
    title: 'UX Designer',
    company: 'Design Studio',
    location: 'Remote',
    type: 'Remote',
    description: 'Join our creative team as a UX Designer...',
    requirements: ['Figma', 'User Research', 'Prototyping', '3+ years experience'],
    postedDate: '2024-03-09',
    salary: '$90k - $120k',
  },
];

export function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [locationFilter, setLocationFilter] = useState('');
  const [typeFilter, setTypeFilter] = useState('');

  const filteredJobs = MOCK_JOBS.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLocation = !locationFilter || job.location.includes(locationFilter);
    const matchesType = !typeFilter || job.type === typeFilter;
    return matchesSearch && matchesLocation && matchesType;
  });

  return (
    <div className="space-y-8">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-gray-900">
          Find Your Dream Job Today
        </h1>
        <p className="text-xl text-gray-600">
          Browse through thousands of job opportunities
        </p>
      </section>

      <section className="bg-white p-6 rounded-lg shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="relative">
            <SearchIcon className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search jobs or companies"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 w-full p-2 border rounded"
            />
          </div>
          <div className="relative">
            <MapPinIcon className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Location"
              value={locationFilter}
              onChange={(e) => setLocationFilter(e.target.value)}
              className="pl-10 w-full p-2 border rounded"
            />
          </div>
          <div className="relative">
            <BriefcaseIcon className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <select
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value)}
              className="pl-10 w-full p-2 border rounded appearance-none"
            >
              <option value="">All Job Types</option>
              <option value="Full-time">Full-time</option>
              <option value="Part-time">Part-time</option>
              <option value="Contract">Contract</option>
              <option value="Remote">Remote</option>
            </select>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800">Latest Jobs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredJobs.map((job) => (
            <JobCard
              key={job.id}
              job={job}
              onClick={() => console.log('Job clicked:', job.id)}
            />
          ))}
        </div>
      </section>
    </div>
  );
}