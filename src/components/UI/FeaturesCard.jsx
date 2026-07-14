import { motion } from "motion/react";

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.95,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
    },
  },
};

const FeaturesCard = ({ feature }) => {
  const Icon = feature.icon;

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{
        y: -8,
        scale: 1.03,
      }}
      transition={{
        type: "spring",
        stiffness: 250,
      }}
      className="rounded-2xl border border-slate-200 bg-white p-8"
    >
      <div className="w-14 h-14 rounded-xl bg-emerald-100 flex items-center justify-center">
        <Icon className="text-emerald-500 text-2xl" />
      </div>

      <h3 className="mt-6 text-xl font-bold">{feature.title}</h3>

      <p className="mt-3 text-slate-600">{feature.description}</p>
    </motion.div>
  );
};

export default FeaturesCard;