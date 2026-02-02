import { useState } from 'react';
import ImageSlider from './ImageSlider';
import Lightbox from './Lightbox';
import { Camera } from 'lucide-react';

// Import generated images
import romantic1 from '@/assets/romantic-1.jpg';
import romantic2 from '@/assets/romantic-2.jpg';
import romantic3 from '@/assets/romantic-3.jpg';
import romantic4 from '@/assets/romantic-4.jpg';
import romantic5 from '@/assets/romantic-5.jpg';
import romantic6 from '@/assets/romantic-6.jpg';
import gallery1 from '@/assets/gallery-1.jpg';
import gallery2 from '@/assets/gallery-2.jpg';
import gallery3 from '@/assets/gallery-3.jpg';
import gallery4 from '@/assets/gallery-4.jpg';

const galleryImages1 = [romantic1, romantic2, romantic3];
const galleryImages2 = [romantic4, romantic5, romantic6];
const staticImages = [gallery1, gallery2, gallery3, gallery4];

const GallerySection = () => {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [currentSliderImages, setCurrentSliderImages] = useState<string[]>([]);

  const handleSliderClick = (images: string[]) => {
    setCurrentSliderImages(images);
    setLightboxImage(images[0]);
  };

  return (
    <section id="gallery" className="relative py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section heading */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-section heading-calligraphy">
            Precious Moments
          </h2>
          <div className="mt-4 flex justify-center items-center gap-3">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-lavender" />
            <Camera className="w-5 h-5 text-gold" />
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-lavender" />
          </div>
        </div>

        {/* Sliders row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div 
            className="cursor-pointer" 
            onClick={() => handleSliderClick(galleryImages1)}
          >
            <ImageSlider images={galleryImages1} interval={6000} />
          </div>
          <div 
            className="cursor-pointer" 
            onClick={() => handleSliderClick(galleryImages2)}
          >
            <ImageSlider images={galleryImages2} interval={6000} />
          </div>
        </div>

        {/* Static gallery grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {staticImages.map((image, index) => (
            <div
              key={index}
              className="glass-card overflow-hidden cursor-pointer group aspect-[4/5] relative"
              onClick={() => setLightboxImage(image)}
            >
              <img
                src={image}
                alt={`Memory ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-midnight/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-3 left-3 text-lavender-soft text-xs font-body opacity-0 group-hover:opacity-70 transition-opacity duration-300">
                Tap to enlarge
              </div>
            </div>
          ))}
        </div>
      </div>

      <Lightbox image={lightboxImage} onClose={() => setLightboxImage(null)} />
    </section>
  );
};

export default GallerySection;
