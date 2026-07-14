import { motion } from "motion/react";
import { features } from "../assets/data";
import FeaturesCard from "./UI/FeaturesCard";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const HomeFeatures = () => {
  return (
    <section className="py-24 bg-slate-50 mx-5">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex flex-col justify-center items-center gap-2 max-w-4xl mx-auto p-6 mb-5"
      >
        <h2 className="text-center text-4xl font-bold text-slate-900">
          Powerful Features
        </h2>

        <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
          Everything you need to shorten, manage, and track your links in one
          place.
        </p>
      </motion.div>

      {/* Feature Grid */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{
          once: true,
          amount: 0.3,
        }}
        className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3"
      >
        {features.map((feature) => (
          <FeaturesCard key={feature.id} feature={feature} />
        ))}
      </motion.div>
    </section>
  );
};

export default HomeFeatures;
