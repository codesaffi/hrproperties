import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { backendUrl } from "../App";
import { toast } from "react-toastify";

export default function Login() {
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    // client-side validation
    if (!emailOrPhone.trim()) return setError("Email or phone is required");
    if (!password) return setError("Password is required");
    try {
      const body = { password };
      if (emailOrPhone.includes("@")) body.email = emailOrPhone;
      else body.phone = emailOrPhone;

      const res = await fetch(
        `${backendUrl || "http://localhost:4000"}/api/user/login`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        }
      );
      const data = await res.json();
      if (!data.success) throw new Error(data.message || "Login failed");
      if (data.token) localStorage.setItem("token", data.token);
      if (data.user) localStorage.setItem("user", JSON.stringify(data.user));
      toast.success("Login successful");
      navigate("/");
    } catch (err) {
      setError(err.message);
      toast.error(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <form
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-md"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold mb-6 text-blue-800 text-center">
          Login
        </h2>
        <input
          type="text"
          placeholder="Email"
          value={emailOrPhone}
          onChange={(e) => setEmailOrPhone(e.target.value)}
          className="w-full mb-4 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-4 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-800 text-white py-2 rounded-lg font-bold hover:bg-blue-900 transition"
        >
          Login
        </button>
        <div className="mt-4 text-center">
          <span>Don't have an account? </span>
          <Link to={"/signup"} className="text-blue-700 hover:underline">
            Sign up
          </Link>
        </div>
      </form>
    </div>
  );
}
