import { X } from 'lucide-react';

interface LightboxProps {
  image: string | null;
  onClose: () => void;
}

const Lightbox = ({ image, onClose }: LightboxProps) => {
  if (!image) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Blurred background */}
      <div className="absolute inset-0 bg-midnight/90 backdrop-blur-xl" />
      
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 z-10 p-2 rounded-full glass-card text-lavender hover:text-gold transition-colors"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Image */}
      <img
        src={image}
        alt="Enlarged view"
        className="relative z-10 max-w-full max-h-[90vh] object-contain rounded-lg animate-fade-in-up"
        style={{
          boxShadow: '0 0 60px hsla(51, 100%, 50%, 0.2)',
        }}
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
};

export default Lightbox;
