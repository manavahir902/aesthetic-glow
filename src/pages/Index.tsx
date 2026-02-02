import FireworksCanvas from '@/components/FireworksCanvas';
import HeroSection from '@/components/HeroSection';
import StorySection from '@/components/StorySection';
import GallerySection from '@/components/GallerySection';
import QuestionSection from '@/components/QuestionSection';
import AudioPlayer from '@/components/AudioPlayer';

const Index = () => {
  return (
    <div className="relative min-h-screen bg-midnight overflow-x-hidden">
      {/* Fireworks background */}
      <FireworksCanvas />
      
      {/* Audio player - using a royalty-free romantic track placeholder */}
      <AudioPlayer audioSrc="https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3" />
      
      {/* Main content */}
      <main className="relative z-10">
        <HeroSection />
        <StorySection />
        <GallerySection />
        <QuestionSection />
      </main>

      {/* Footer */}
      <footer className="relative z-10 py-8 text-center">
        <p className="font-heading text-2xl text-gold/60">
          Made with love ♥
        </p>
      </footer>
    </div>
  );
};

export default Index;
