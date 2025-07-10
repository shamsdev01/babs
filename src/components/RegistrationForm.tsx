import React, { useState } from 'react';

interface FormData {
  fullName: string;
  email: string;
  phoneNumber: string;
  preferredCourse: string;
  timingOption: string;
  cohortMonth: string;
}

interface RegistrationFormProps {
  selectedCourse: string;
  selectedCohort: string;
  onSubmit: (formData: FormData) => void;
}

const RegistrationForm: React.FC<RegistrationFormProps> = ({ selectedCourse, selectedCohort, onSubmit }) => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phoneNumber: '',
    preferredCourse: selectedCourse,
    timingOption: '',
    cohortMonth: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const courses = [
    { id: 'frontend', name: 'Frontend Development' },
    { id: 'product-design', name: 'Product Design' },
    { id: 'fullstack', name: 'Fullstack Development' },
    { id: 'cybersecurity', name: 'Cyber Security' },
    { id: 'data-analysis', name: 'Data Analysis' },
  ];

  const timingOptions = [
    { id: 'weekday', name: 'Weekday' },
    { id: 'weekend', name: 'Weekend' },
    { id: 'hybrid', name: 'Hybrid' },
    { id: 'flexible', name: 'Flexible' },
  ];

  const cohortMonths = [
    { id: 'august', name: 'August 2024' },
    { id: 'september', name: 'September 2024' },
    { id: 'october', name: 'October 2024' },
  ];

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Phone number is required';
    }

    if (!formData.preferredCourse) {
      newErrors.preferredCourse = 'Please select a course';
    }

    if (!formData.timingOption) {
      newErrors.timingOption = 'Please select a timing option';
    }

    if (!formData.cohortMonth) {
      newErrors.cohortMonth = 'Please select a cohort month';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    try {
      await onSubmit(formData);
    } catch (error) {
      console.error('Registration error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="registration" className="py-16 sm:py-20 lg:py-24 bg-gray-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-3 py-1 bg-blue-50 border border-blue-200 rounded-full text-blue-700 text-sm font-medium mb-4">
            Join Babtech
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Join a Babtech
            <span className="block text-blue-600">Cohort</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Complete your registration to start your tech journey with us.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="fullName" className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="fullName"
                  value={formData.fullName}
                  onChange={(e) => handleInputChange('fullName', e.target.value)}
                  className={`w-full px-3 py-2 border-2 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-500/30 transition-all duration-300 placeholder-gray-400 ${
                    errors.fullName ? 'border-red-300' : 'border-gray-300 focus:border-blue-600'
                  }`}
                  placeholder="Enter your full name"
                />
                {errors.fullName && (
                  <p className="mt-1 text-sm text-red-600">{errors.fullName}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className={`w-full px-3 py-2 border-2 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-500/30 transition-all duration-300 placeholder-gray-400 ${
                    errors.email ? 'border-red-300' : 'border-gray-300 focus:border-blue-600'
                  }`}
                  placeholder="Enter your email address"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="phoneNumber" className="block text-sm font-semibold text-gray-700 mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                id="phoneNumber"
                value={formData.phoneNumber}
                onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
                className={`w-full px-3 py-2 border-2 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-500/30 transition-all duration-300 placeholder-gray-400 ${
                  errors.phoneNumber ? 'border-red-300' : 'border-gray-300 focus:border-blue-600'
                }`}
                placeholder="Enter your phone number"
              />
              {errors.phoneNumber && (
                <p className="mt-1 text-sm text-red-600">{errors.phoneNumber}</p>
              )}
            </div>

            {/* Course and Schedule Selection */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label htmlFor="preferredCourse" className="block text-sm font-semibold text-gray-700 mb-2">
                  Preferred Course *
                </label>
                <select
                  id="preferredCourse"
                  value={formData.preferredCourse}
                  onChange={(e) => handleInputChange('preferredCourse', e.target.value)}
                  className={`w-full px-3 py-2 border-2 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-500/30 transition-all duration-300 text-gray-900 ${
                    errors.preferredCourse ? 'border-red-300' : 'border-gray-300 focus:border-blue-600'
                  }`}
                >
                  <option value="" className="text-gray-400">Select a course</option>
                  {courses.map((course) => (
                    <option key={course.id} value={course.id} className="text-gray-900">
                      {course.name}
                    </option>
                  ))}
                </select>
                {errors.preferredCourse && (
                  <p className="mt-1 text-sm text-red-600">{errors.preferredCourse}</p>
                )}
              </div>

              <div>
                <label htmlFor="timingOption" className="block text-sm font-semibold text-gray-700 mb-2">
                  Timing Option *
                </label>
                <select
                  id="timingOption"
                  value={formData.timingOption}
                  onChange={(e) => handleInputChange('timingOption', e.target.value)}
                  className={`w-full px-3 py-2 border-2 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-500/30 transition-all duration-300 text-gray-900 ${
                    errors.timingOption ? 'border-red-300' : 'border-gray-300 focus:border-blue-600'
                  }`}
                >
                  <option value="" className="text-gray-400">Select timing</option>
                  {timingOptions.map((option) => (
                    <option key={option.id} value={option.id} className="text-gray-900">
                      {option.name}
                    </option>
                  ))}
                </select>
                {errors.timingOption && (
                  <p className="mt-1 text-sm text-red-600">{errors.timingOption}</p>
                )}
              </div>

              <div>
                <label htmlFor="cohortMonth" className="block text-sm font-semibold text-gray-700 mb-2">
                  Cohort Month *
                </label>
                <select
                  id="cohortMonth"
                  value={formData.cohortMonth}
                  onChange={(e) => handleInputChange('cohortMonth', e.target.value)}
                  className={`w-full px-3 py-2 border-2 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-500/30 transition-all duration-300 text-gray-900 ${
                    errors.cohortMonth ? 'border-red-300' : 'border-gray-300 focus:border-blue-600'
                  }`}
                >
                  <option value="" className="text-gray-400">Select month</option>
                  {cohortMonths.map((month) => (
                    <option key={month.id} value={month.id} className="text-gray-900">
                      {month.name}
                    </option>
                  ))}
                </select>
                {errors.cohortMonth && (
                  <p className="mt-1 text-sm text-red-600">{errors.cohortMonth}</p>
                )}
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="group relative px-6 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-semibold rounded-lg text-base shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-500/50 disabled:transform-none"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </div>
                ) : (
                  'Submit Registration'
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default RegistrationForm; 