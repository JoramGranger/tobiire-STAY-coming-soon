import React from 'react';
import { Sparkles, Users, Zap } from 'lucide-react';

const Vision = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-6">
              The future of
              <span 
                className="block font-medium mt-2"
                style={{ color: 'var(--brand-700)' }}
              >
                hospitality is here
              </span>
            </h2>
            
            <p className="text-lg text-gray-600 font-light mb-8 leading-relaxed">
              STAY transforms how property managers and hosts handle short-stay accommodations. 
              Built with modern technology and designed for the hospitality industry's evolving needs.
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4 animate-slide-up animate-delay-200">
                <div 
                  className="flex-shrink-0 p-2 rounded-full"
                  style={{ backgroundColor: 'var(--brand-100)' }}
                >
                  <Sparkles 
                    className="w-5 h-5" 
                    style={{ color: 'var(--brand-700)' }} 
                  />
                </div>
                <div>
                  <h4 className="font-medium mb-1" style={{ color: 'var(--brand-900)' }}>
                    Intelligent Automation
                  </h4>
                  <p className="text-gray-600 font-light">
                    Smart workflows that adapt to your property management style
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 animate-slide-up animate-delay-400">
                <div 
                  className="flex-shrink-0 p-2 rounded-full"
                  style={{ backgroundColor: 'var(--brand-100)' }}
                >
                  <Users 
                    className="w-5 h-5" 
                    style={{ color: 'var(--brand-700)' }} 
                  />
                </div>
                <div>
                  <h4 className="font-medium mb-1" style={{ color: 'var(--brand-900)' }}>
                    Guest-Centric Design
                  </h4>
                  <p className="text-gray-600 font-light">
                    Every feature designed to enhance the guest experience
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 animate-slide-up animate-delay-600">
                <div 
                  className="flex-shrink-0 p-2 rounded-full"
                  style={{ backgroundColor: 'var(--brand-100)' }}
                >
                  <Zap 
                    className="w-5 h-5" 
                    style={{ color: 'var(--brand-700)' }} 
                  />
                </div>
                <div>
                  <h4 className="font-medium mb-1" style={{ color: 'var(--brand-900)' }}>
                    Real-time Insights
                  </h4>
                  <p className="text-gray-600 font-light">
                    Data-driven decisions with comprehensive analytics
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Elements */}
          <div className="relative animate-slide-up animate-delay-200">
            <div 
              className="rounded-2xl p-8 lg:p-12"
              style={{ backgroundColor: 'var(--brand-100)' }}
            >
              <div className="space-y-4">
                <div 
                  className="h-4 rounded-full"
                  style={{ backgroundColor: 'var(--brand-300)', width: '80%' }}
                ></div>
                <div 
                  className="h-4 rounded-full"
                  style={{ backgroundColor: 'var(--brand-200)', width: '60%' }}
                ></div>
                <div 
                  className="h-4 rounded-full"
                  style={{ backgroundColor: 'var(--brand-300)', width: '90%' }}
                ></div>
                <div 
                  className="h-4 rounded-full"
                  style={{ backgroundColor: 'var(--brand-200)', width: '70%' }}
                ></div>
              </div>
              
              <div className="mt-8 flex justify-center">
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: 'var(--brand-700)' }}
                >
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div 
              className="absolute -top-4 -left-4 w-8 h-8 rounded-full animate-bounce-gentle"
              style={{ backgroundColor: 'var(--brand-500)' }}
            ></div>
            <div 
              className="absolute -bottom-4 -right-4 w-6 h-6 rounded-full animate-bounce-gentle"
              style={{ 
                backgroundColor: 'var(--brand-400)',
                animationDelay: '0.5s'
              }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;