import Login from "../pages/Login";
import SignUp from "../pages/SignUp";

const AuthCard = ({ type, setType }) => {
  return (
    <div className="z-20 max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col rounded-md bg-opacity-95 bg-transparent backdrop-blur-sm mt-12 mb-12 pt-8 pb-8 shadow-2xl">
        {type === "Login" ? <Login /> : <SignUp />}

        <div className="flex gap-2 items-center justify-center">
          <p className="text-center text-slate-600 text-sm">
            {type === "Login"
              ? "Don't have an account?"
              : "Already have an account?"}
          </p>

          <button
            onClick={() => setType(type === "Login" ? "SignUp" : "Login")}
            className="text-sm underline"
          >
            {type === "Login" ? "Sign Up" : "Login"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthCard;
