import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

import {
  signInWithEmailAndPassword,
  signInWithPopup,
  sendPasswordResetEmail,
} from "firebase/auth";

import { auth, googleProvider } from "../firebase/firebase";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  // Email Login
  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please enter email and password.");
      return;
    }

    try {
      setLoading(true);

      const userCredential = await signInWithEmailAndPassword(
  auth,
  email,
  password
);

const uid = userCredential.user.uid;

console.log("Logged in UID:", uid);

const adminRef = doc(db, "admin", uid);
const adminSnap = await getDoc(adminRef);

console.log("Admin exists:", adminSnap.exists());
console.log("Admin data:", adminSnap.data());

alert("Login Successful 🎉");

if (adminSnap.exists()) {
  console.log("Before navigate:", window.location.pathname);
navigate("/admin");
setTimeout(() => {
  console.log("After navigate:", window.location.pathname);
}, 1000);
  navigate("/admin");
} else {
  navigate("/dashboard");
}
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  // Google Login
  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);

      navigate("/dashboard");
    } catch (error) {
      alert(error.message);
    }
  };

  // Forgot Password
  const handleForgotPassword = async () => {
    if (!email) {
      alert("Enter your email first.");
      return;
    }

    try {
      await sendPasswordResetEmail(auth, email);

      alert("Password reset email sent.");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-[#09090B] via-[#111827] to-[#1E1B4B] px-6">

      <div className="w-full max-w-md rounded-3xl border border-violet-500/20 bg-white/10 p-8 shadow-2xl shadow-violet-500/10 backdrop-blur-xl">

        <h1 className="text-center text-4xl font-bold text-white">
          Welcome Back 👋
        </h1>

        <p className="mt-3 text-center text-gray-400">
          Sign in to continue your project.
        </p>

        <form onSubmit={handleLogin} className="mt-8 space-y-5">

          {/* Google Login */}
          <button
            type="button"
            onClick={handleGoogleLogin}
            className="flex w-full items-center justify-center gap-3 rounded-xl bg-white py-3 font-semibold text-black hover:bg-gray-100"
          >
            <FcGoogle size={24} />
            Continue with Google
          </button>

          {/* Divider */}
          <div className="flex items-center gap-3">
            <div className="h-px flex-1 bg-gray-700"></div>
            <span className="text-sm text-gray-400">OR</span>
            <div className="h-px flex-1 bg-gray-700"></div>
          </div>

          {/* Email */}
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-2xl border border-white/10 bg-[#111827] px-5 py-4 text-white placeholder:text-gray-500 outline-none focus:border-violet-500"
          />

          {/* Password */}
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-2xl border border-white/10 bg-[#111827] px-5 py-4 text-white placeholder:text-gray-500 outline-none focus:border-violet-500"
          />

          <div className="text-right">
            <button
              type="button"
              onClick={handleForgotPassword}
              className="text-sm text-violet-400 hover:underline"
            >
              Forgot Password?
            </button>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-2xl bg-gradient-to-r from-violet-600 to-fuchsia-600 py-4 font-semibold text-white hover:scale-[1.02] disabled:opacity-70"
          >
            {loading ? "Logging in..." : "Login"}
          </button>

          <p className="text-center text-sm text-gray-400">
            Don't have an account?{" "}
            <NavLink
              to="/signup"
              className="font-semibold text-violet-400 hover:underline"
            >
              Create Account
            </NavLink>
          </p>

        </form>
      </div>

    </div>
  );
};

export default Login;