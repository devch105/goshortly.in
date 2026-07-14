import { motion } from "motion/react";
import { useState } from "react";
import { assetImages } from "../assets/assests";
import AuthCard from "../components/AuthCard";
import Footer from "../components/Footer";
import HomeFeatures from "../components/HomeFeatures";
import ManageLinkButton from "../components/UI/ManageLinksButton";

const LandingPage = () => {
  const [type, setType] = useState("Login");

  const text =
    "Generate short, memorable links with GoShortly's intuitive interface. Share URLs effortlessly across platforms and optimize your link management with powerful analytics.";

  return (
    <div className="min-h-screen max-w-7xl mx-auto px-6 sm:px-8 lg:px-6">
      {/* Hero Section */}
      <section className="flex flex-col-reverse lg:flex-row items-center justify-between gap-16 py-10 lg:py-20">
        {/* Left Content */}
        <div className="flex-1">
          <motion.h1
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl text-3xl md:text-5xl font-bold leading-tight text-slate-800"
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
            Shorten URLs. Share Instantly. Track Every Click.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 max-w-xl text-lg leading-8 text-slate-600"
          >
            {text}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <ManageLinkButton />

            <button className="rounded-lg border border-emerald-500 px-6 py-3 font-medium text-emerald-500 transition-all duration-300 hover:bg-emerald-500 hover:text-white">
              Create Short Link
            </button>
          </motion.div>
        </div>

        {/* Right Logo */}
        <div className="flex flex-1 justify-center">
          <motion.img
            initial={{ opacity: 0, x: 80, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            whileHover={{
              scale: 1.03,
            }}
            src={assetImages.Logo}
            alt="GoShortly Logo"
            className="w-72 md:w-96 lg:w-[480px] h-auto drop-shadow-2xl"
          />
        </div>
      </section>

      {/* Features */}
      <HomeFeatures />

      {/* Authentication */}
      <AuthCard type={type} setType={setType} />
      <Footer />
    </div>
  );
};

export default LandingPage;
