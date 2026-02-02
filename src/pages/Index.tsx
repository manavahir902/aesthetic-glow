import FireworksCanvas from '@/components/FireworksCanvas';
import HeroSection from '@/components/HeroSection';
import StorySection from '@/components/StorySection';
import GallerySection from '@/components/GallerySection';
import QuestionSection from '@/components/QuestionSection';
import AudioPlayer from '@/components/AudioPlayer';
import herGraceAudio from '@/assets/hergrace.mp3';

const Index = () => {
  return (
    <div className="relative min-h-screen bg-midnight overflow-x-hidden">
      <FireworksCanvas />
      
      {/* 2. Pass the imported variable, NOT a string path */}
      <AudioPlayer audioSrc={herGraceAudio} />
      
      <main className="relative z-10">
        <HeroSection />
        <StorySection />
        <GallerySection />
        <QuestionSection />
      </main>

      <footer className="relative z-10 py-8 text-center">
        <p className="font-heading text-2xl text-gold/60">
          Yours Truly, Uday ♥
        </p>
      </footer>
    </div>
  );
};

export default Index;
