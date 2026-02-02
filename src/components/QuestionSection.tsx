import { useState } from 'react';
import { Heart, Sparkles } from 'lucide-react';
import EscapingButton from './EscapingButton';
import confetti from 'canvas-confetti';

const QuestionSection = () => {
  const [answered, setAnswered] = useState(false);

  const handleYes = () => {
    setAnswered(true);
    
    // Trigger confetti
    const duration = 3000;
    const end = Date.now() + duration;

    const colors = ['#ffd700', '#b794f6', '#fbbf24'];

    (function frame() {
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: colors,
      });
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: colors,
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
  };

  return (
    <section id="question" className="relative py-32 px-6 min-h-screen flex items-center justify-center">
      <div className="max-w-2xl mx-auto text-center">
        {!answered ? (
          <>
            {/* Question */}
            <div className="mb-12">
              <Sparkles className="w-10 h-10 text-gold mx-auto mb-6 animate-pulse" />
              <h2 className="font-heading text-section heading-calligraphy mb-4">
                The Question
              </h2>
              <p className="font-body text-body-lg text-lavender font-light tracking-wide">
                Will you continue this beautiful journey with me?
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button
                onClick={handleYes}
                className="px-12 py-4 rounded-full font-body font-medium text-lg
                         bg-gradient-to-r from-gold to-gold-soft text-midnight
                         hover:shadow-lg transition-all duration-300 animate-pulse-glow"
              >
                <span className="flex items-center gap-2">
                  <Heart className="w-5 h-5" />
                  Yes, Forever
                </span>
              </button>

              <EscapingButton
                className="px-12 py-4 rounded-full font-body font-medium text-lg
                         glass-card text-lavender border border-lavender/30
                         hover:text-gold hover:border-gold/30"
              >
                Maybe Later
              </EscapingButton>
            </div>
          </>
        ) : (
          <div className="animate-fade-in-up">
            <Heart className="w-20 h-20 text-gold mx-auto mb-8 animate-pulse" />
            <h2 className="font-heading text-hero heading-calligraphy mb-6">
              You Made Me Complete
            </h2>
            <p className="font-body text-body-lg text-lavender-soft font-light tracking-wide">
              Thank you for saying yes. This is just the beginning of our forever.
            </p>
            
            {/* Hearts animation */}
            <div className="mt-12 flex justify-center gap-4">
              {[...Array(5)].map((_, i) => (
                <Heart
                  key={i}
                  className="w-6 h-6 text-gold animate-float"
                  style={{ animationDelay: `${i * 0.2}s` }}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default QuestionSection;
