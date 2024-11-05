import React, { useState } from 'react';
import { CV } from '../types';
import { PlusIcon, TrashIcon } from 'lucide-react';

interface CVBuilderProps {
  initialCV?: CV;
  onSave: (cv: Omit<CV, 'id' | 'userId'>) => void;
}

export function CVBuilder({ initialCV, onSave }: CVBuilderProps) {
  const [cv, setCV] = useState({
    personalInfo: initialCV?.personalInfo || {
      fullName: '',
      email: '',
      phone: '',
      location: '',
      summary: '',
    },
    experience: initialCV?.experience || [],
    education: initialCV?.education || [],
    skills: initialCV?.skills || [],
  });

  const addExperience = () => {
    setCV(prev => ({
      ...prev,
      experience: [
        ...prev.experience,
        { company: '', position: '', startDate: '', endDate: '', description: '' },
      ],
    }));
  };

  const addEducation = () => {
    setCV(prev => ({
      ...prev,
      education: [
        ...prev.education,
        { institution: '', degree: '', field: '', graduationYear: '' },
      ],
    }));
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-800">Personal Information</h2>
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Full Name"
            value={cv.personalInfo.fullName}
            onChange={e => setCV(prev => ({
              ...prev,
              personalInfo: { ...prev.personalInfo, fullName: e.target.value },
            }))}
            className="p-2 border rounded"
          />
          <input
            type="email"
            placeholder="Email"
            value={cv.personalInfo.email}
            onChange={e => setCV(prev => ({
              ...prev,
              personalInfo: { ...prev.personalInfo, email: e.target.value },
            }))}
            className="p-2 border rounded"
          />
          <input
            type="tel"
            placeholder="Phone"
            value={cv.personalInfo.phone}
            onChange={e => setCV(prev => ({
              ...prev,
              personalInfo: { ...prev.personalInfo, phone: e.target.value },
            }))}
            className="p-2 border rounded"
          />
          <input
            type="text"
            placeholder="Location"
            value={cv.personalInfo.location}
            onChange={e => setCV(prev => ({
              ...prev,
              personalInfo: { ...prev.personalInfo, location: e.target.value },
            }))}
            className="p-2 border rounded"
          />
        </div>
        <textarea
          placeholder="Professional Summary"
          value={cv.personalInfo.summary}
          onChange={e => setCV(prev => ({
            ...prev,
            personalInfo: { ...prev.personalInfo, summary: e.target.value },
          }))}
          className="w-full p-2 border rounded h-32"
        />
      </section>

      <section className="space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-800">Experience</h2>
          <button
            onClick={addExperience}
            className="flex items-center space-x-2 text-blue-600 hover:text-blue-700"
          >
            <PlusIcon className="h-5 w-5" />
            <span>Add Experience</span>
          </button>
        </div>
        {cv.experience.map((exp, index) => (
          <div key={index} className="space-y-4 p-4 border rounded">
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Company"
                value={exp.company}
                onChange={e => {
                  const newExp = [...cv.experience];
                  newExp[index].company = e.target.value;
                  setCV(prev => ({ ...prev, experience: newExp }));
                }}
                className="p-2 border rounded"
              />
              <input
                type="text"
                placeholder="Position"
                value={exp.position}
                onChange={e => {
                  const newExp = [...cv.experience];
                  newExp[index].position = e.target.value;
                  setCV(prev => ({ ...prev, experience: newExp }));
                }}
                className="p-2 border rounded"
              />
              <input
                type="date"
                placeholder="Start Date"
                value={exp.startDate}
                onChange={e => {
                  const newExp = [...cv.experience];
                  newExp[index].startDate = e.target.value;
                  setCV(prev => ({ ...prev, experience: newExp }));
                }}
                className="p-2 border rounded"
              />
              <input
                type="date"
                placeholder="End Date"
                value={exp.endDate}
                onChange={e => {
                  const newExp = [...cv.experience];
                  newExp[index].endDate = e.target.value;
                  setCV(prev => ({ ...prev, experience: newExp }));
                }}
                className="p-2 border rounded"
              />
            </div>
            <textarea
              placeholder="Description"
              value={exp.description}
              onChange={e => {
                const newExp = [...cv.experience];
                newExp[index].description = e.target.value;
                setCV(prev => ({ ...prev, experience: newExp }));
              }}
              className="w-full p-2 border rounded h-24"
            />
            <button
              onClick={() => {
                const newExp = cv.experience.filter((_, i) => i !== index);
                setCV(prev => ({ ...prev, experience: newExp }));
              }}
              className="text-red-600 hover:text-red-700 flex items-center space-x-1"
            >
              <TrashIcon className="h-4 w-4" />
              <span>Remove</span>
            </button>
          </div>
        ))}
      </section>

      <button
        onClick={() => onSave(cv)}
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
      >
        Save CV
      </button>
    </div>
  );
}