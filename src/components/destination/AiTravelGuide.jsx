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
      className="max-w-6xl mx-auto px-6 pb-24"
    >
      <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white p-10 rounded-3xl shadow-2xl relative overflow-hidden">

        {/* Glass overlay effect */}
        <div className="absolute inset-0 bg-white/5 backdrop-blur-lg" />

        <div className="relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            🧠 AI Travel Guide
          </h2>

          <p className="text-lg leading-relaxed whitespace-pre-line">
            {guideText}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default AiTravelGuide;