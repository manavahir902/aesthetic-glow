import { Heart } from 'lucide-react';

const StorySection = () => {
  return (
    <section id="story" className="relative py-20 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Section heading */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-section heading-calligraphy">
            Our Story
          </h2>
          <div className="mt-4 flex justify-center items-center gap-3">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-lavender" />
            <Heart className="w-5 h-5 text-gold animate-pulse" />
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-lavender" />
          </div>
        </div>

        {/* Story card */}
        <div className="glass-card p-8 md:p-12">
          <div className="story-text text-foreground space-y-6 text-body-lg">
            <p className="opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
              From the very first day of conversations I knew we were gonna have a very long journey together
              our bond was incomparable and unique in every manner and that too in a very short period of time.
              and see today here we areee
            </p>
            
            <p className="opacity-0 animate-fade-in-up" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
              Every day with you feels like unwrapping a beautiful gift full of surprises, 
              warmth, and endless wonder. You've taught me what it means to truly love and 
              be loved in return.
            </p>
            
            <p className="opacity-0 animate-fade-in-up" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
              This page is a small token love. I Love you 🐻‍❄️
            </p>
          </div>

          {/* Signature */}
          <div className="mt-10 text-right">
            <p className="font-heading text-3xl text-gold">
              Your Lover 💝.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
