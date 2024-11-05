import React from 'react';
import { Job } from '../types';
import { MapPinIcon, ClockIcon, BriefcaseIcon } from 'lucide-react';

interface JobCardProps {
  job: Job;
  onClick: () => void;
}

export function JobCard({ job, onClick }: JobCardProps) {
  return (
    <div
      onClick={onClick}
      className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer"
    >
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-xl font-semibold text-gray-800">{job.title}</h3>
          <p className="text-gray-600 mt-1">{job.company}</p>
        </div>
        <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded">
          {job.type}
        </span>
      </div>

      <div className="mt-4 space-y-2">
        <div className="flex items-center text-gray-600">
          <MapPinIcon className="h-5 w-5 mr-2" />
          <span>{job.location}</span>
        </div>
        <div className="flex items-center text-gray-600">
          <BriefcaseIcon className="h-5 w-5 mr-2" />
          <span>{job.salary}</span>
        </div>
        <div className="flex items-center text-gray-600">
          <ClockIcon className="h-5 w-5 mr-2" />
          <span>Posted {job.postedDate}</span>
        </div>
      </div>

      <div className="mt-4">
        <div className="flex flex-wrap gap-2">
          {job.requirements.slice(0, 3).map((req, index) => (
            <span
              key={index}
              className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded"
            >
              {req}
            </span>
          ))}
          {job.requirements.length > 3 && (
            <span className="text-gray-600 text-sm">
              +{job.requirements.length - 3} more
            </span>
          )}
        </div>
      </div>
    </div>
  );
}