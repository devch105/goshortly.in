// src/data/features.js

import {
    FaBoltLightning,
    FaChartLine,
    FaClock,
    FaCode,
    FaLink,
    FaQrcode,
    FaShieldHalved,
    FaTableColumns,
} from "react-icons/fa6";

export const features = [
  {
    id: 1,
    title: "Lightning Fast Redirects",
    description:
      "Deliver users to their destination instantly with high-performance redirects and minimal latency.",
    icon: FaBoltLightning,
  },
  {
    id: 2,
    title: "Custom Short URLs",
    description:
      "Create branded and memorable short links that are easy to share and recognize.",
    icon: FaLink,
  },
  {
    id: 3,
    title: "Advanced Analytics",
    description:
      "Track clicks, locations, devices, browsers, and referral sources with detailed insights.",
    icon: FaChartLine,
  },
  {
    id: 4,
    title: "QR Code Generation",
    description:
      "Automatically generate QR codes for every short link to simplify offline sharing.",
    icon: FaQrcode,
  },
  {
    id: 5,
    title: "Secure & Reliable",
    description:
      "Protect your links with HTTPS, secure redirects, and reliable infrastructure.",
    icon: FaShieldHalved,
  },
  {
    id: 6,
    title: "Link Expiration",
    description:
      "Set expiration dates so temporary links automatically become inactive.",
    icon: FaClock,
  },
];