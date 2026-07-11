import { useState } from "react";
import { assetImages } from "../assets/assests";
import AuthCard from "../components/AuthCard";

const LandingPage = () => {
  const [type, setType] = useState("Login");
  return (
    <div className="h-screen w-full relative flex items-center justify-center overflow-hidden">
      <img
        src={assetImages.bg_image}
        alt="Background"
        className="absolute inset-0 h-full w-full object-cover filter blur-sm"
      />
      <AuthCard type={type} setType={setType} />
    </div>
  );
};

export default LandingPage;
