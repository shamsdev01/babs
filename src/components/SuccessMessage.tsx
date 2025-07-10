import React from 'react';

interface FormData {
  fullName: string;
  email: string;
  phoneNumber: string;
  preferredCourse: string;
  timingOption: string;
  cohortMonth: string;
}

interface SuccessMessageProps {
  isVisible: boolean;
  onClose: () => void;
  formData?: FormData;
}

const SuccessMessage: React.FC<SuccessMessageProps> = ({ isVisible, onClose, formData }) => {
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Escape') {
      onClose();
    }
  };

  const getCourseName = (courseId: string) => {
    const courses = {
      'frontend': 'Frontend Development',
      'product-design': 'Product Design',
      'fullstack': 'Fullstack Development',
      'cybersecurity': 'Cyber Security',
      'data-analysis': 'Data Analysis',
    };
    return courses[courseId as keyof typeof courses] || courseId;
  };

  const getTimingName = (timingId: string) => {
    const timings = {
      'weekday': 'Weekday',
      'weekend': 'Weekend',
      'hybrid': 'Hybrid',
      'flexible': 'Flexible',
    };
    return timings[timingId as keyof typeof timings] || timingId;
  };

  const getCohortName = (cohortId: string) => {
    const cohorts = {
      'august': 'August 2024',
      'september': 'September 2024',
      'october': 'October 2024',
    };
    return cohorts[cohortId as keyof typeof cohorts] || cohortId;
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div 
        className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative animate-fade-in-up"
        onKeyDown={handleKeyDown}
        tabIndex={0}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors duration-200"
          aria-label="Close success message"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Success Icon */}
        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Registration Successful!
          </h2>
          <p className="text-gray-600">
            Welcome to Babtech! We're excited to have you join our community.
          </p>
        </div>

        {/* Registration Details */}
        {formData && (
          <div className="bg-gray-50 rounded-xl p-6 mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Registration Details</h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Name:</span>
                <span className="font-medium text-gray-900">{formData.fullName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Email:</span>
                <span className="font-medium text-gray-900">{formData.email}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Phone:</span>
                <span className="font-medium text-gray-900">{formData.phoneNumber}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Course:</span>
                <span className="font-medium text-gray-900">{getCourseName(formData.preferredCourse)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Timing:</span>
                <span className="font-medium text-gray-900">{getTimingName(formData.timingOption)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Cohort:</span>
                <span className="font-medium text-gray-900">{getCohortName(formData.cohortMonth)}</span>
              </div>
            </div>
          </div>
        )}

        {/* Next Steps */}
        <div className="bg-blue-50 rounded-xl p-6 mb-6">
          <h3 className="text-lg font-semibold text-blue-900 mb-3">What's Next?</h3>
          <div className="space-y-2 text-sm text-blue-800">
            <div className="flex items-start">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <span>You'll receive a confirmation email within 24 hours</span>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <span>Our team will contact you to discuss your learning plan</span>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <span>Get ready to start your tech journey with Babtech!</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={onClose}
            className="flex-1 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-4 focus:ring-blue-500/50"
          >
            Continue
          </button>
          <button
            onClick={() => {
              onClose();
              // Scroll to top
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex-1 px-6 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-blue-600 hover:text-blue-600 transition-colors duration-200 focus:outline-none focus:ring-4 focus:ring-blue-500/30"
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessMessage; 