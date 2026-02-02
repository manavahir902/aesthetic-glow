import { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

interface AudioPlayerProps {
  audioSrc: string;
}

const AudioPlayer = ({ audioSrc }: AudioPlayerProps) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    const handleInteraction = () => {
      // If already playing or interacted, do nothing
      if (hasInteracted || (audioRef.current && !audioRef.current.paused)) return;

      if (audioRef.current) {
        setHasInteracted(true);
        audioRef.current.play()
          .then(() => setIsPlaying(true))
          .catch((error) => {
            console.warn("Autoplay still blocked by browser policy:", error);
          });
      }
    };

    // Listen for the first interaction to "unlock" audio
    const events = ['scroll', 'touchstart', 'click', 'keydown'];
    events.forEach(event => window.addEventListener(event, handleInteraction, { once: true }));

    // Fallback: Attempt to play immediately on mount (works if site is allowlisted)
    if (audioRef.current) {
      audioRef.current.play()
        .then(() => setIsPlaying(true))
        .catch(() => { /* Silent fail is expected here */ });
    }

    return () => {
      events.forEach(event => window.removeEventListener(event, handleInteraction));
    };
  }, [hasInteracted]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play().then(() => setIsPlaying(true));
      }
    }
  };

  return (
    <>
      {/* Added autoPlay and playsInline for better mobile/tablet support */}
      <audio 
        ref={audioRef} 
        src={audioSrc} 
        loop 
        autoPlay 
        playsInline 
      />
      <button
        onClick={togglePlay}
        className="fixed bottom-6 right-6 z-40 p-4 rounded-full glass-card text-lavender hover:text-gold transition-all hover:scale-110"
        style={{
          boxShadow: isPlaying 
            ? '0 0 20px hsla(51, 100%, 50%, 0.4)' 
            : '0 0 10px hsla(270, 60%, 70%, 0.2)',
        }}
      >
        {isPlaying ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5" />}
      </button>
    </>
  );
};

export default AudioPlayer;