import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

import MainSection from "./MainSection";
import GallerySection from "./GallerySection";
import ImageModal from "./ImageModal";

import img1 from "../assets/img.jpg";
import img2 from "../assets/img.jpg";
import img3 from "../assets/img.jpg";
import img4 from "../assets/img.jpg";
import img5 from "../assets/img.jpg";
import img6 from "../assets/img.jpg";


const images = [
  { id: 1, src: img1, title: "My Favourite Smile ❤️" },
  { id: 2, src: img2, title: "The Day I Felt Lucky 💕" },
  { id: 3, src: img3, title: "Your Happiness Means Everything 🌸" },
  { id: 4, src: img4, title: "Moments I Never Want to Forget ✨" },
  { id: 5, src: img5, title: "You Make My World Beautiful 🌍" },
  { id: 6, src: img6, title: "With You, Everything Feels Right 💖" },
];


const Hero = () => {
  const [showGallery, setShowGallery] = useState(false);
  const [selectedImg, setSelectedImg] = useState(null);

  // 📱 Auto scroll to top when gallery opens
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [showGallery]);

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-black via-rose-950 to-black text-white relative overflow-hidden">

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 pointer-events-none" />

      {/* Content wrapper */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-4 py-10">

        <AnimatePresence mode="wait">
          {!showGallery ? (
            <MainSection
              key="main"
              onNext={() => setShowGallery(true)}
            />
          ) : (
            <GallerySection
              key="gallery"
              images={images}
              onSelect={(img) => setSelectedImg(img)}
            />
          )}
        </AnimatePresence>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedImg && (
          <ImageModal
            image={selectedImg}
            onClose={() => setSelectedImg(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Hero;
