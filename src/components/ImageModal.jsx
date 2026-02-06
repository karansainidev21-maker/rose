import { motion } from "framer-motion";
import { X, Heart } from "lucide-react";

const ImageModal = ({ image, onClose }) => {
  return (
    <motion.div
      className="
        fixed inset-0 z-50
        flex items-center justify-center
        bg-black/80 backdrop-blur-sm
        p-4
      "
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Modal Box */}
      <motion.div
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.7, opacity: 0 }}
        transition={{ type: "spring", stiffness: 120 }}
        onClick={(e) => e.stopPropagation()}
        className="
          relative
          w-full max-w-md
          rounded-3xl
          bg-white/10
          backdrop-blur-xl
          border border-white/20
          shadow-2xl
          overflow-hidden
        "
      >
        {/* ❌ Close Button */}
        <button
          onClick={onClose}
          className="
            absolute top-3 right-3
            z-10
            p-2 rounded-full
            bg-black/40
            hover:bg-black/60
            transition
          "
        >
          <X className="w-5 h-5 text-white" />
        </button>

        {/* Image (NO CROP) */}
        <div className="w-full aspect-[4/5] flex items-center justify-center bg-black/20">
          <img
            src={image.src}
            alt={image.title}
            className="
              max-w-full
              max-h-full
              object-contain
            "
          />
        </div>

        {/* Text */}
        <div className="p-5 text-center">
          <p className="text-rose-200 text-base sm:text-lg flex items-center justify-center gap-2">
            <Heart className="w-5 h-5 fill-rose-400 text-rose-400" />
            {image.title}
          </p>

          <p className="mt-2 text-xs sm:text-sm text-rose-300/80">
            A small memory, but a big place in my heart 💖
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ImageModal;
