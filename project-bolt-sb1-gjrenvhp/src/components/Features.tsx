import React from 'react';
import { Calendar, CreditCard, MessageSquare, RectangleVertical as CleaningServices, FileText } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Calendar,
      title: 'Booking Management',
      description: 'Streamline reservations with automated booking workflows and real-time availability.',
    },
    {
      icon: CreditCard,
      title: 'Payment Tracking',
      description: 'Secure payment processing with automated invoicing and financial reporting.',
    },
    {
      icon: MessageSquare,
      title: 'Guest Communication',
      description: 'Centralized messaging system for seamless host-guest interactions.',
    },
    {
      icon: CleaningServices,
      title: 'Housekeeping Requests',
      description: 'Coordinate cleaning schedules and maintenance with integrated task management.',
    },
    {
      icon: FileText,
      title: 'Digital Records',
      description: 'Comprehensive digital documentation for compliance and operational insights.',
    },
  ];

  return (
    <section className="py-20 px-4" style={{ backgroundColor: 'var(--brand-50)' }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-medium mb-4 animate-text-glow" style={{ color: 'var(--brand-900)' }}>
            Everything you need for modern hospitality
          </h2>
          <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto animate-text-fade-in">
            Powerful features designed to simplify property management and enhance guest experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`glassmorphic-card p-6 lg:p-8 animate-slide-up animate-card-float ${
                index === 0 ? '' :
                index === 1 ? 'animate-delay-200' :
                index === 2 ? 'animate-delay-400' :
                index === 3 ? 'animate-delay-600' :
                'animate-delay-800'
              } hover:animate-card-glow`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div 
                className="inline-flex p-3 rounded-full mb-6 glassmorphic-icon animate-icon-bounce"
                style={{ 
                  background: 'linear-gradient(135deg, var(--brand-100) 0%, var(--brand-200) 100%)',
                  backdropFilter: 'blur(10px)'
                }}
              >
                <feature.icon 
                  className="w-6 h-6 animate-icon-pulse" 
                  style={{ color: 'var(--brand-700)' }} 
                />
              </div>
              
              <h3 className="text-xl font-medium mb-3 animate-text-slide-in" style={{ color: 'var(--brand-900)' }}>
                {feature.title}
              </h3>
              
              <p className="text-gray-600 font-light leading-relaxed animate-text-fade-in">
                {feature.description}
              </p>
              
              <div 
                className="w-full h-0.5 mt-6 rounded-full animate-line-expand"
                style={{ 
                  background: 'linear-gradient(90deg, var(--brand-200) 0%, var(--brand-500) 50%, var(--brand-200) 100%)'
                }}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;