import { motion } from "motion/react";

const Footer = () => {
  return (
    <footer className=" bg-transparent rounded-2xl backdrop-blur-md ">
      <div className="mx-auto flex flex-col justify-center items-center gap-3 text-center max-w-7xl">
        <motion.h1
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl  text-3xl md:text-5xl font-bold leading-tight text-slate-800"
        >
          <span
            className="text-emerald-500 acme"
            style={{
              textShadow: "2px 2px 8px rgba(0,0,0,0.20)",
            }}
          >
            Go
          </span>
          <span
            className="text-slate-700 acme"
            style={{
              textShadow: "0px 0px 12px rgba(16, 185, 129, 0.35)",
            }}
          >
            Shortly
          </span>{" "}
        </motion.h1>

        <p className="mt-3 text-xl lg:text-2xl text-slate-500 m">
          Shorten URLs. Share with confidence. Track every click.
        </p>
      </div>

      <div className="mt-3 mb-5  pt-6 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} GoShortly. Made By Dev Dhama
      </div>
    </footer>
  );
};

export default Footer;
