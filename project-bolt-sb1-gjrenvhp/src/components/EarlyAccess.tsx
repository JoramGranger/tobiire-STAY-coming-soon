import React, { useState } from 'react';
import { Mail, Check } from 'lucide-react';

const EarlyAccess = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 1000);
  };

  return (
    <section 
      id="early-access"
      className="py-20 px-4"
      style={{ backgroundColor: 'var(--brand-50)' }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <div className="animate-fade-in animate-text-glow">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-6 animate-text-float">
            Be among the
            <span 
              className="block font-medium mt-2 animate-text-shimmer"
              style={{ color: 'var(--brand-700)' }}
            >
              first to experience STAY
            </span>
          </h2>
          
          <p className="text-lg text-gray-600 font-light mb-12 max-w-2xl mx-auto leading-relaxed animate-text-fade-in">
            Join our exclusive early access program and get priority access to STAY when we launch. 
            Plus, receive special pricing and personalized onboarding.
          </p>
        </div>

        <div className="animate-slide-up animate-delay-200 animate-card-float">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto glassmorphic-card p-6 rounded-2xl">
              <div className="relative mb-6">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400 animate-icon-pulse" />
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="glassmorphic-input w-full pl-12 text-base"
                  required
                />
              </div>
              
              <button
                type="submit"
                disabled={isLoading}
                className={`
                  ripple-effect w-full py-4 rounded-full text-white font-medium text-lg
                  transition-all duration-300 hover:scale-105 hover:shadow-xl
                  disabled:opacity-70 disabled:cursor-not-allowed
                  ${isLoading ? 'animate-pulse' : ''}
                `}
                style={{ backgroundColor: 'var(--brand-700)' }}
              >
                {isLoading ? 'Joining...' : 'Get Early Access'}
              </button>
              
              <p className="text-sm text-gray-500 font-light mt-4 animate-text-fade-in">
                No spam, unsubscribe anytime. We respect your privacy.
              </p>
            </form>
          ) : (
            <div className="max-w-md mx-auto">
              <div 
                className="success-checkmark w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                style={{ backgroundColor: 'var(--brand-700)' }}
              >
                <Check className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-medium mb-4 animate-text-slide-in" style={{ color: 'var(--brand-900)' }}>
                Welcome to the future!
              </h3>
              
              <p className="text-gray-600 font-light mb-8 animate-text-fade-in">
                Thanks for joining our early access program. We'll be in touch soon with exclusive updates and your priority access invitation.
              </p>
              
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  setEmail('');
                }}
                className="text-sm font-medium underline animate-text-pulse"
                style={{ color: 'var(--brand-700)' }}
              >
                Sign up another email
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default EarlyAccess;