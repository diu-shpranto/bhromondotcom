import { motion } from "framer-motion";
import generateTravelGuide from "../../utils/aiTravelGuide";

const AiTravelGuide = ({ destination }) => {
  const guideText = generateTravelGuide(destination);

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="max-w-7xl mx-auto px-6 pb-24"
    >
      <div className="bg-gradient-to-br from-sky-700 to-sky-950 text-white p-8 md:p-10 rounded-3xl ring-1 ring-sky-900/20 shadow-xl relative overflow-hidden">

        {/* Glass overlay effect */}
        <div className="absolute inset-0 bg-white/5 backdrop-blur-lg" />

        <div className="relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            🧠 AI Travel Guide
          </h2>

          <div className="h-1 w-16 rounded-full bg-sky-400 mb-6" />

          <p className="text-lg leading-relaxed text-sky-50 whitespace-pre-line">
            {guideText}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default AiTravelGuide;