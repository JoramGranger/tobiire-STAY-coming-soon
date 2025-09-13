import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Set launch date to 30 days from now
    const launchDate = new Date();
    launchDate.setDate(launchDate.getDate() + 30);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = launchDate.getTime() - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance > 0) {
        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=1200')`,
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-white mb-4">
            <span style={{ color: 'var(--brand-700)' }} className="font-medium">STAY</span>
            <span className="block text-2xl md:text-3xl lg:text-4xl mt-2 font-light">
              by Tobiira IO
            </span>
          </h1>
        </div>

        <div className="animate-slide-up animate-delay-200">
          <p className="text-xl md:text-2xl text-white/90 mb-8 font-light">
            Modern short-stay hospitality management
          </p>
        </div>

        <div className="animate-slide-up animate-delay-400">
          <h2 className="text-2xl md:text-3xl font-medium text-white mb-8">
            <span style={{ color: 'var(--brand-500)' }}>Launching Soon</span>
          </h2>
        </div>

        {/* Countdown Timer */}
        <div className="animate-slide-up animate-delay-600">
          <div className="flex justify-center space-x-4 md:space-x-8 mb-12">
            {Object.entries(timeLeft).map(([unit, value]) => (
              <div key={unit} className="text-center">
                <div 
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-4 md:p-6 mb-2"
                  style={{ borderTop: `3px solid var(--brand-700)` }}
                >
                  <div className="text-2xl md:text-4xl font-medium text-white">
                    {value.toString().padStart(2, '0')}
                  </div>
                </div>
                <div className="text-sm md:text-base text-white/80 font-light capitalize">
                  {unit}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="animate-slide-up animate-delay-800">
          <button 
            className="ripple-effect px-8 py-4 rounded-full text-white font-medium text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
            style={{ backgroundColor: 'var(--brand-700)' }}
            onClick={() => document.getElementById('early-access')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get Early Access
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-gentle">
        <ChevronDown className="w-6 h-6 text-white/60" />
      </div>
    </section>
  );
};

export default Hero;