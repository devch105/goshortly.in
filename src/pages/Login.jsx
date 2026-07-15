import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AUTH } from "../utils/apiEndpoints";
import privateApi from "../utils/privateApi";

import Input from "../components/Input";

import AuthHero from "../components/AuthHero";
import AppContext from "../context/AppContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const { setUser } = useContext(AppContext);

  const isValidEmail = (email) => {
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    return emailRegex.test(email);
  };

  const isValidPassword = (password) => {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&^#()_\-+=])[A-Za-z\d@$!%*?&^#()_\-+=]{8,}$/;
    return passwordRegex.test(password);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!isValidEmail(email)) {
      setError("Invalid email");
      setLoading(false);
      return;
    }

    // if (!isValidPassword(password)) {
    //   setError("Password doesn`t meet requirements");
    //   setLoading(false);
    //   return;
    // }

    try {
      const response = await privateApi.post(AUTH.LOGIN, {
        email,
        password,
      });

      if (response.status === 200) {
        toast.success(response.data.message || "Login successfull");
        localStorage.setItem("token", response.data.token);
        console.log("Response : " + response.data);
        setUser(response.data.user);
        navigate("/dashboard");
      }
    } catch (error) {
      console.error(error);
      const message = error.response?.data?.message || "Failed to login user";
      setError(message);
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center gap-5 w-full mx-auto">
      <AuthHero />

      <div className="flex-1 rounded-lg  p-8 max-h-[95vh]  overflow-auto">
        <div className=" mb-8">
          <h2 className="text-3xl font-semibold text-center mb-2">
            Good to see you again
          </h2>
          <p className="text-sm text-slate-600 text-center mb-5">
            Make Your URL Short , Shareable and Trackable
          </p>
        </div>

        <div className="mt-5 mb-2 max-w-3xl">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col justify-center items-center gap-3 z-10w-full max-w-md mx-auto">
              <Input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                label="Email"
                placeholder="fullname@example.com"
                type="text"
              />

              <Input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                label="Password"
                placeholder="**************"
                type="password"
              />
            </div>

            {/* Error Section */}

            {error && (
              <p className="text-red-800 text-sm text-center bg-red p-2 rounded">
                {error}
              </p>
            )}

            {/* Button Section */}

            <div className="flex justify-center mt-6">
              <button
                disabled={loading}
                type="submit"
                className={`w-3xs
                    h-10
                    rounded-xl
                    bg-slate-900
                    hover:bg-black
                    text-white
                    transition
                    font-semibold
                    text-sm
                    shadow-lg
                    hover:shadow-xl ${loading ? "opacity-60 cursor-not-allowed" : ""}`}
              >
                {loading ? "Logging in..." : "Login"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
