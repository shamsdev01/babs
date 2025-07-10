'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Courses from '@/components/Courses';
import RegistrationForm from '@/components/RegistrationForm';
import SuccessMessage from '@/components/SuccessMessage';

interface FormData {
  fullName: string;
  email: string;
  phoneNumber: string;
  preferredCourse: string;
  timingOption: string;
  cohortMonth: string;
}

const Home: React.FC = () => {
  const [selectedCourse, setSelectedCourse] = useState<string>('');
  const [showRegistration, setShowRegistration] = useState<boolean>(false);
  const [showSuccess, setShowSuccess] = useState<boolean>(false);
  const [submittedFormData, setSubmittedFormData] = useState<FormData | undefined>();

  const handleGetStartedClick = () => {
    const coursesSection = document.getElementById('courses');
    if (coursesSection) {
      coursesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCourseSelect = (courseId: string) => {
    setSelectedCourse(courseId);
    // Auto-scroll to registration after course selection
    setTimeout(() => {
      const registrationSection = document.getElementById('registration');
      if (registrationSection) {
        registrationSection.scrollIntoView({ behavior: 'smooth' });
      }
      setShowRegistration(true);
    }, 300);
  };

  const handleFormSubmit = async (formData: FormData) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setSubmittedFormData(formData);
    setShowSuccess(true);
    setShowRegistration(false);
  };

  const handleSuccessClose = () => {
    setShowSuccess(false);
    setSubmittedFormData(undefined);
    setSelectedCourse('');
    setShowRegistration(false);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar onGetStartedClick={handleGetStartedClick} />
      
      <Hero onGetStartedClick={handleGetStartedClick} />
      
      <div id="about">
        <About />
      </div>
      
      <div id="courses">
        <Courses 
          selectedCourse={selectedCourse} 
          onCourseSelect={handleCourseSelect} 
        />
      </div>
      
      {showRegistration && (
        <div id="registration">
          <RegistrationForm 
            selectedCourse={selectedCourse}
            selectedCohort=""
            onSubmit={handleFormSubmit}
          />
        </div>
      )}

      <SuccessMessage 
        isVisible={showSuccess}
        onClose={handleSuccessClose}
        formData={submittedFormData}
      />
    </div>
  );
};

export default Home;
