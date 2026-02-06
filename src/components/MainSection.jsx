import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const petals = [
  { rotate: 0, delay: 0.9 },
  { rotate: 25, delay: 1.1 },
  { rotate: -25, delay: 1.3 },
  { rotate: 55, delay: 1.5 },
  { rotate: -55, delay: 1.7 },
];

const MainSection = ({ onNext }) => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: -60 }}
      transition={{ duration: 0.8 }}
      className="relative z-10 w-full max-w-4xl
      flex flex-col items-center text-center px-4"
    >
      {/* 🌸 HEADING */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-3xl sm:text-4xl md:text-6xl
        font-semibold text-rose-300 tracking-wide"
      >
        Happy Rose Day 🌹
      </motion.h1>

      {/* 🌸 SUBTITLE */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 1 }}
        className="mt-4 max-w-xl
        text-rose-200 text-sm sm:text-base md:text-lg
        leading-relaxed"
      >
        This rose is not bought,
        <br />
        it is made… just for you ❤️
      </motion.p>

      {/* 🌹 ROSE WRAPPER */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 1 }}
        className="
          relative mt-14
          w-28 sm:w-32 md:w-40
          h-[360px] sm:h-[400px] md:h-[440px]
          flex items-end justify-center
        "
      >
        {/* STEM */}
        <div className="absolute bottom-0 w-[8px] sm:w-[9px] md:w-[10px]
          h-[200px] sm:h-[220px] md:h-[260px]
          bg-gradient-to-b from-green-600 to-green-900
          rounded-full shadow-md"
        />

        {/* LEAVES */}
        <div className="absolute bottom-[120px] sm:bottom-[140px]
          left-[-22px] sm:left-[-26px]
          w-12 sm:w-14 h-6 sm:h-7
          bg-green-700 rounded-[30px_0_30px_0]
          rotate-45 shadow-sm"
        />
        <div className="absolute bottom-[150px] sm:bottom-[170px]
          right-[-22px] sm:right-[-26px]
          w-12 sm:w-14 h-6 sm:h-7
          bg-green-700 rounded-[0_30px_0_30px]
          -rotate-45 shadow-sm"
        />

        {/* 🌹 BUD */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.9, type: "spring", stiffness: 120 }}
          className="absolute
          bottom-[200px] sm:bottom-[220px] md:bottom-[260px]
          w-24 sm:w-28 h-24 sm:h-28
          flex items-end justify-center"
        >
          {petals.map((petal, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0, rotate: -90 }}
              animate={{ scale: 1, rotate: petal.rotate }}
              transition={{ delay: petal.delay, type: "spring", stiffness: 90 }}
              className="
                absolute
                w-14 sm:w-16
                h-24 sm:h-28
                bg-gradient-to-br from-rose-400 via-rose-500 to-rose-800
                rounded-[0_35px_0_35px]
                origin-bottom shadow-lg
              "
            />
          ))}

          {/* CENTER PETAL */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 2, type: "spring" }}
            className="
              absolute
              w-14 sm:w-16
              h-28 sm:h-32
              bg-gradient-to-b from-rose-300 to-rose-700
              rounded-[18px]
              shadow-2xl
            "
          />
        </motion.div>
      </motion.div>

      {/* 💖 BUTTON */}
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.6 }}
        whileHover={{
          scale: 1.1,
          boxShadow: "0 0 28px rgba(244,63,94,0.8)",
        }}
        whileTap={{ scale: 0.95 }}
        onClick={onNext}
        className="
          mt-12
          flex items-center gap-2
          px-8 sm:px-10 py-3 sm:py-4
          rounded-full
          text-base sm:text-lg font-medium
          bg-gradient-to-r from-rose-500 via-pink-500 to-rose-600
          shadow-lg shadow-rose-500/40
          tracking-wide
        "
      >
        <Heart className="w-5 h-5 fill-white" />
        See Our Moments
      </motion.button>
    </motion.section>
  );
};

export default MainSection;
