import { ChevronDown, LogOut, Mail, User } from "lucide-react";
import { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import AppContext from "../../context/AppContext";

const DashboardHeader = () => {
  const { user, clearUser } = useContext(AppContext);

  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const navigate = useNavigate();

  const handleLogout = () => {
    // Remove JWT
    localStorage.removeItem("token");
    // or sessionStorage.removeItem("token");

    // Clear React Context
    clearUser();

    // Redirect to login
    navigate("/login");
  };

  return (
    <div className="fixed h-20 top-0 left-0 z-50  w-full rounded-md border-b border-white/20 bg-white/10 px-8 py-2 backdrop-blur-xl shadow-lg">
      <div className="flex items-center justify-between">
        {/* Left */}
        <div>
          <h1 className="text-xl font-bold tracking-tight text-slate-800 sm:text-xl">
            Dashboard
          </h1>

          <p className="mt-1 text-xs lg:text-sm text-gray-500">
            Track your shortened URLs, monitor click trends.
          </p>
        </div>

        {/* Right */}
        <div className="relative flex justify-end" ref={dropdownRef}>
          <button
            onClick={() => setOpen(!open)}
            className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-3 py-2 shadow-md transition hover:shadow-lg"
          >
            <User />

            <ChevronDown
              size={18}
              className={`transition duration-200 ${open ? "rotate-180" : ""}`}
            />
          </button>

          {open && (
            <div
              className=" fixed top-20  right-3   z-30 w-50  overflow-hidden rounded-2xl border  border-slate-200  bg-white  shadow-2xl  animate-in  fade-in  zoom-in-95  duration-200
  "
            >
              {/* User Info */}
              <div className="bg-transparent opacity-90 backdrop:backdrop-blur-2xl p-6 text-slate-500">
                <h3 className="text-sm font-semibold">{user?.fullName}</h3>

                <div className="mt-1 flex items-center gap-2 text-xs text-slate-500">
                  <Mail size={15} />
                  <span className="truncate">{user?.email}</span>
                </div>
              </div>

              {/* Logout */}
              <button
                onClick={handleLogout}
                className="flex w-full items-center gap-3 px-5 py-4 text-sm font-medium text-red-600 transition hover:bg-red-50"
              >
                <LogOut size={18} />
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
