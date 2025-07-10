import React from 'react';

const EventInfo: React.FC = () => {
  const eventDetails = [
    {
      icon: '📅',
      title: 'Date',
      value: 'December 15, 2024',
    },
    {
      icon: '🕒',
      title: 'Time',
      value: '9:00 AM - 6:00 PM',
    },
    {
      icon: '📍',
      title: 'Venue',
      value: 'Lagos State University Main Campus',
    },
    {
      icon: '🎯',
      title: 'Theme',
      value: 'Empowering Future Tech Leaders',
    },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Event Details
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Join us for an exciting day of learning, networking, and innovation at LASU Tech X 4.0
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {eventDetails.map((detail, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-xl bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-100 hover:shadow-lg transition-all duration-300"
            >
              <div className="text-4xl mb-4">{detail.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {detail.title}
              </h3>
              <p className="text-gray-700">{detail.value}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 sm:p-12 text-white">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-center">
              What to Expect
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-white bg-opacity-20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-sm font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Interactive Workshops</h4>
                    <p className="text-blue-100 text-sm">Hands-on sessions with industry experts</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-white bg-opacity-20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-sm font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Networking Opportunities</h4>
                    <p className="text-blue-100 text-sm">Connect with peers and professionals</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-white bg-opacity-20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-sm font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Career Guidance</h4>
                    <p className="text-blue-100 text-sm">Insights into tech career paths</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-white bg-opacity-20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-sm font-bold">4</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Certificate of Participation</h4>
                    <p className="text-blue-100 text-sm">Get recognized for your participation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-2 bg-yellow-50 border border-yellow-200 rounded-full px-6 py-3">
            <span className="text-yellow-600">⚠️</span>
            <span className="text-yellow-800 font-medium">
              Limited seats available! Register early to secure your spot.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventInfo; 