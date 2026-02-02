import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const scrollToNext = () => {
    const storySection = document.getElementById('story');
    storySection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20">
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <h1 
          className="font-heading text-hero heading-calligraphy animate-fade-in-up"
        >
          A Celebration of Us
        </h1>
        
        <p className="mt-8 font-body text-subhero text-lavender font-light tracking-widest animate-fade-in-up delay-200 opacity-0" style={{ animationFillMode: 'forwards' }}>
          Every moment with you is magic
        </p>

        {/* Decorative elements */}
        <div className="mt-12 flex justify-center gap-4 animate-fade-in-up delay-300 opacity-0" style={{ animationFillMode: 'forwards' }}>
          <div className="w-20 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
          <div className="w-2 h-2 rounded-full bg-gold glow-gold" />
          <div className="w-20 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
        </div>
      </div>

      {/* Scroll indicator */}
      <button 
        onClick={scrollToNext}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-float text-lavender hover:text-gold transition-colors"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
};

export default HeroSection;
