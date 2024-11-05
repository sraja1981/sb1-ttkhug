import React from 'react';
import { useAuth } from '../context/AuthContext';
import { CVBuilder } from '../components/CVBuilder';

export function CandidateProfile() {
  const { user } = useAuth();

  if (!user) {
    return <div>Please login to view your profile.</div>;
  }

  const handleSaveCV = (cvData: any) => {
    // In a real app, this would make an API call to save the CV
    console.log('Saving CV:', cvData);
  };

  return (
    <div className="space-y-8">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">
          Welcome, {user.name}!
        </h1>
        <p className="text-gray-600">
          Build your professional profile and let employers find you.
        </p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Build Your CV</h2>
        <CVBuilder onSave={handleSaveCV} />
      </div>
    </div>
  );
}