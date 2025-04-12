import { useState, useEffect } from "react";
import { Mail, Lock, User, Globe } from "lucide-react";
import { registerUser, GoogleAuth, loginUser } from "../lib/authService";
export default function LoginSignupModal({ open, tab: initialTab, onClose }) {
  const [tab, setTab] = useState(initialTab);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    setTab(initialTab); // Update when prop changes
  }, [initialTab]);

  const handleGoogleLogin = () => {
    GoogleAuth();
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (tab === "login") {
      console.log("Logging in with:", formData);
      await loginUser(formData.email, formData.password);
    } else {
      console.log("Signing up with:", formData);
      await registerUser(formData.email, formData.password, formData.name);
    }
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black/50 ${
        open ? "" : "hidden"
      }`}
    >
      <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl p-6 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 text-xl font-bold"
        >
          ×
        </button>

        <h2 className="text-center text-2xl font-bold text-gray-800">
          Welcome
        </h2>

        <div className="grid grid-cols-2 gap-2 mt-6 bg-gray-100 rounded-xl overflow-hidden">
          <button
            onClick={() => setTab("login")}
            className={`py-2 text-sm font-medium ${
              tab === "login" ? "bg-white shadow" : "text-gray-500"
            }`}
          >
            Login
          </button>
          <button
            onClick={() => setTab("signup")}
            className={`py-2 text-sm font-medium ${
              tab === "signup" ? "bg-white shadow" : "text-gray-500"
            }`}
          >
            Sign Up
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 mt-6">
          {tab === "signup" && (
            <div className="relative">
              <User
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={18}
              />
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="pl-10 w-full border rounded-lg py-2 px-3"
              />
            </div>
          )}

          <div className="relative">
            <Mail
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={18}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="pl-10 w-full border rounded-lg py-2 px-3"
            />
          </div>

          <div className="relative">
            <Lock
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={18}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="pl-10 w-full border rounded-lg py-2 px-3"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium"
          >
            {tab === "login" ? "Login" : "Sign Up"}
          </button>
        </form>

        <div className="text-center text-sm text-gray-500 mt-4">or</div>
        <button
          onClick={handleGoogleLogin}
          className="w-full border rounded-lg py-2 mt-2 flex items-center justify-center gap-2 text-gray-700"
        >
          <Globe size={18} />{" "}
          {tab === "login" ? "Continue with Google" : "Sign Up with Google"}
        </button>
      </div>
    </div>
  );
}
