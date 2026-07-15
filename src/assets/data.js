// src/data/features.js

import {
  FaBoltLightning,
  FaChartLine,
  FaLink,
  FaQrcode,
  FaShieldHalved
} from "react-icons/fa6";

export const features = [
  {
    id: 1,
    title: "Lightning Fast Redirects",
    description:
      "Deliver users to their destination instantly with high-performance redirects and minimal latency.",
    icon: FaBoltLightning,
    bg: "bg-yellow-500/15",
    iconColor: "text-yellow-400",
    border: "border-yellow-500/20",
  },
  
  {
    id: 3,
    title: "Advanced Analytics",
    description:
      "Track clicks, locations, devices, browsers, and referral sources with detailed insights.",
    icon: FaChartLine,
    bg: "bg-violet-500/15",
    iconColor: "text-violet-400",
    border: "border-violet-500/20",
  },
  {
    id: 4,
    title: "QR Code Generation",
    description:
      "Automatically generate QR codes for every short link to simplify offline sharing.",
    icon: FaQrcode,
    bg: "bg-orange-500/15",
    iconColor: "text-orange-400",
    border: "border-orange-500/20",
  },
  {
    id: 5,
    title: "Secure & Reliable",
    description:
      "Protect your links with HTTPS, secure redirects, and reliable infrastructure.",
    icon: FaShieldHalved,
     bg: "bg-sky-500/15",
    iconColor: "text-sky-400",
    border: "border-sky-500/20",
  },
  
];