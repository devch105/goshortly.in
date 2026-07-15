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
      className={`
        rounded-2xl
        border
        ${feature.border}
        bg-white
        p-8
        shadow-sm
        transition-all
        duration-300
        hover:shadow-xl
        ${feature.hover}
      `}
    >
      <div
        className={`
          flex h-14 w-14 items-center justify-center
          rounded-xl
          ${feature.bg}
        `}
      >
        <Icon className={`${feature.iconColor}`} size={20} />
      </div>

      <h3 className="mt-2 text-xl font-bold text-slate-900">
        {feature.title}
      </h3>

      <p className="mt-1 leading-7 text-slate-600">
        {feature.description}
      </p>
    </motion.div>
  );
};

export default FeaturesCard;