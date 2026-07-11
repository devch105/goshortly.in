import { useState } from "react";
import Input from "../components/Input";

import toast from "react-hot-toast";
import { AUTH } from "../utils/apiEndpoints";
import authApi from "../utils/authApi";

const SignUp = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isloading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const validateFullname = (name) => {
    if (!name.trim()) {
      setError("Full name is required");
      toast.error("Full name is required");
      return false;
    }

    return true;
  };

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

    setError("");
    setIsLoading(true);

    if (!validateFullname(fullName)) {
      setIsLoading(false);
      return;
    }

    if (!isValidEmail(email)) {
      setError("Invalid email");
      setIsLoading(false);
      return;
    }

    if (!isValidPassword(password)) {
      setError("Password doesn't meet requirements");
      setIsLoading(false);
      return;
    }

    try {
      const response = await authApi.post(AUTH.REGISTER, {
        fullName,
        email,
        password,
      });

      toast.success(response.data.message || "Registration successful");

      setFullName("");
      setEmail("");
      setPassword("");
    } catch (error) {
      const message =
        error.response?.data?.message || "Failed to register user";

      setError(message);
      toast.error(message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center gap-5 relative z-10 w-full mx-auto">
      <div className="w-full max-w-3xl rounded-lg  p-8 max-h-[95vh]  overflow-auto">
        <div className="w-full max-w-3xl mx-auto mb-8">
          <h2 className="text-3xl font-semibold text-center mb-2">
            Create Your Account
          </h2>
          <p className="text-sm text-slate-600 text-center mb-5">
            Make Your URL Short , Shareable and Trackable
          </p>
        </div>

        <div className="mt-5 mb-2">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
              <Input
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                label="Fullname"
                placeholder="Enter Your full name"
                type="text"
              />
              <Input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                label="Email"
                placeholder="fullname@example.com"
                type="text"
              />
              <div className="col-span-2">
                <Input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  label="Password"
                  placeholder="**************"
                  type="password"
                />
              </div>
            </div>

            {/* Error Section */}

            {error && (
              <p className="text-red-800 text-sm text-center bg-red p-2 rounded">
                {error}
              </p>
            )}

            {/* Button Section */}

            <button
              disabled={isloading}
              type="submit"
              className={`w-full py-2 text-md bg-[#1D1D1D] text-white rounded-md flex items-center justify-center gap-2 ${isloading ? `opacity-60 cursor-not-allowed` : ``}`}
            >
              SignUp
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
