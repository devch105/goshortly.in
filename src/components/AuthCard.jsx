import { motion } from "motion/react";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
const AuthCard = ({ type, setType }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      <div className="flex flex-col rounded-md bg-opacity-95 bg-transparent backdrop-blur-sm mt-12 mb-12 pt-8 pb-8 shadow-2xl">
        {type === "Login" ? <Login /> : <SignUp />}

        <div className="flex gap-2 items-center justify-center">
          <p className="text-center font-semibold text-slate-600 text-sm">
            {type === "Login"
              ? "Don't have an account?"
              : "Already have an account?"}
          </p>

          <button
            onClick={() => setType(type === "Login" ? "SignUp" : "Login")}
            className="inline-flex w-fit cursor-pointer text-sm font-medium text-emerald-600 underline hover:text-emerald-700"
          >
            {type === "Login" ? "Sign Up" : "Login"}
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default AuthCard;
