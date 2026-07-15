export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://10.105.75.220:8080/api/v1.0";

// Auth
export const AUTH = {
  LOGIN: "/auth/login",
  REGISTER: "/auth/register",
  VERIFY_EMAIL: "/auth/verify-email",
  RESEND_OTP: "/auth/resend-verification",
};

// URL
export const URLS = {
  CREATE: "/urls/shorten",
  LIST: "/urls/list",
  DELETE: (shortCode) => `/urls/delete/${shortCode}`,
  
};

// Analytics
export const ANALYTICS = {
  TOTAL_CLICKS: "/urls/totalclicks",
  URL: (id) => `/analytics/${id}`,
};
