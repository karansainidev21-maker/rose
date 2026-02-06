import { motion } from "framer-motion";
import { Gift, Heart } from "lucide-react";

const GallerySection = ({ images, onSelect }) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="relative z-10 w-full max-w-6xl px-3 sm:px-4"
    >
      {/* Heading */}
      <h2 className="text-center text-xl sm:text-2xl md:text-3xl font-semibold text-rose-300 tracking-wide">
        Your Gifts 🎁
      </h2>

      {/* Gift Cards */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((img, index) => (
          <motion.button
            key={img.id}
            type="button"
            whileHover={{ y: -6, scale: 1.03 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => onSelect(img)}
            className="
              group relative w-full rounded-3xl
              bg-gradient-to-br from-rose-500/20 to-pink-600/20
              border border-rose-400/30
              backdrop-blur-xl
              shadow-xl shadow-rose-500/20
              overflow-hidden
              px-6 py-10
              text-center
            "
          >
            {/* Ribbon */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-3 bg-gradient-to-r from-pink-500 to-rose-600" />

            {/* Gift Icon */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 + index * 0.1, type: "spring" }}
              className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full
              bg-gradient-to-br from-rose-500 to-pink-600
              shadow-lg shadow-rose-500/40"
            >
              <Gift className="w-8 h-8 text-white" />
            </motion.div>

            {/* Text */}
            <p className="text-rose-200 text-sm sm:text-base font-medium">
              Tap to Open 💝
            </p>

            <p className="mt-2 text-rose-300 text-xs sm:text-sm flex items-center justify-center gap-1">
              <Heart className="w-4 h-4 fill-rose-400 text-rose-400" />
              {img.title}
            </p>

            {/* Hover Glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500
              bg-gradient-to-br from-rose-500/10 to-pink-600/10"
            />
          </motion.button>
        ))}
      </div>
    </motion.section>
  );
};

export default GallerySection;
