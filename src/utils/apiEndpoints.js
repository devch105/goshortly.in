export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:8080";

// Auth
export const AUTH = {
  LOGIN: "/api/v1.0/auth/login",
  REGISTER: "/api/v1.0/auth/register",
  VERIFY_EMAIL: "/api/v1.0/auth/verify-email",
  RESEND_OTP: "/api/v1.0/auth/resend-verification",
};

// URL
export const URLS = {
  CREATE: "/api/v1.0/url",
  GET_ALL: "/api/v1.0/url",
  GET_BY_ID: (id) => `/api/v1.0/url/${id}`,
  DELETE: (id) => `/api/v1.0/url/${id}`,
  UPDATE: (id) => `/api/v1.0/url/${id}`,
};

// Analytics
export const ANALYTICS = {
  OVERVIEW: "/api/v1.0/analytics/overview",
  URL: (id) => `/api/v1.0/analytics/${id}`,
};

// Profile
export const USER = {
  PROFILE: "/api/v1.0/user/profile",
};