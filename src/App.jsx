import { Toaster } from "react-hot-toast";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import ProtectRoute from "./components/ProtectRoute";
import LandingPage from "./pages/LandingPage";

import { isTokenValid } from "./utils/Validation";

const Root = () => {
  return isTokenValid() ? (
    <Navigate to="/dashboard" replace />
  ) : (
    <Navigate to="/login" replace />
  );
};

export default function App() {
  return (
    <BrowserRouter>
      <Toaster position="bottom-center" />

      <Routes>
        <Route path="/" element={<Root />} />

        <Route
          path="/dashboard"
          element={
            <ProtectRoute>
              <Dashboard />
            </ProtectRoute>
          }
        />

        <Route path="/login" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  );
}
