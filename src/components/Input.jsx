import { useState } from "react";
import { FaEye } from "react-icons/fa6";
import { LuEyeClosed } from "react-icons/lu";

const Input = ({
  label,
  value,
  onChange,
  placeholder,
  type,
  isSelect,
  options,
  className = "",
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className={`mb-4 ${className}`}>
      <label className="text-[13px] text-slate-800 block mb-1">{label}</label>

      <div className="relative">
        {isSelect ? (
          <select
            className="w-full bg-transparent outline-none border border-gray-300 rounded-md py-2 px-3 text-gray-700 focus:border-blue-500"
            value={value}
            onChange={onChange}
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        ) : (
          <input
            className="w-full bg-transparent outline-none border border-gray-300 rounded-md py-2 px-3 pr-10 text-gray-700 focus:border-blue-500"
            type={
              type === "password" ? (showPassword ? "text" : "password") : type
            }
            placeholder={placeholder}
            value={value}
            onChange={onChange}
          />
        )}

        {type === "password" && (
          <span
            className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
            onClick={() => setShowPassword((prev) => !prev)}
          >
            {showPassword ? (
              <FaEye size={20} className="text-purple-500" />
            ) : (
              <LuEyeClosed size={20} className="text-slate-500" />
            )}
          </span>
        )}
      </div>
    </div>
  );
};

export default Input;
