import { NavLink, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";

import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";

import { auth, googleProvider } from "../firebase/firebase";

const Signup = () => {
  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  // Email Signup
  const handleSignup = async (e) => {
    e.preventDefault();

    if (!fullName || !email || !password || !confirmPassword) {
      alert("Please fill all fields.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    try {
      setLoading(true);

      const userCredential =
        await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );

      // Save user name
      await updateProfile(userCredential.user, {
        displayName: fullName,
      });

      alert("Account Created Successfully 🎉");

      navigate("/dashboard");
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  // Google Signup
  const handleGoogleSignup = async () => {
    try {
      await signInWithPopup(auth, googleProvider);

      navigate("/dashboard");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-[#09090B] via-[#111827] to-[#1E1B4B] px-6">

      <div className="w-full max-w-md rounded-3xl border border-violet-500/20 bg-white/10 p-8 shadow-2xl shadow-violet-500/10 backdrop-blur-xl">

        <h1 className="text-center text-4xl font-bold text-white">
          Create Account 🚀
        </h1>

        <p className="mt-3 text-center text-gray-400">
          Join Designora Labs and start your creative journey.
        </p>

        <form
          onSubmit={handleSignup}
          className="mt-8 space-y-5"
        >

          {/* Google Signup */}
          <button
            type="button"
            onClick={handleGoogleSignup}
            className="flex w-full items-center justify-center gap-3 rounded-xl bg-white py-3 font-semibold text-black transition hover:bg-gray-100"
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

          {/* Full Name */}
          <input
            type="text"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="w-full rounded-2xl border border-white/10 bg-[#111827] px-5 py-4 text-white placeholder:text-gray-500 outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20"
          />

          {/* Email */}
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-2xl border border-white/10 bg-[#111827] px-5 py-4 text-white placeholder:text-gray-500 outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20"
          />

          {/* Password */}
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-2xl border border-white/10 bg-[#111827] px-5 py-4 text-white placeholder:text-gray-500 outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20"
          />

          {/* Confirm Password */}
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full rounded-2xl border border-white/10 bg-[#111827] px-5 py-4 text-white placeholder:text-gray-500 outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20"
          />

          {/* Signup Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-2xl bg-gradient-to-r from-violet-600 to-fuchsia-600 py-4 font-semibold text-white transition hover:scale-[1.02] hover:shadow-lg hover:shadow-violet-500/30 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {loading ? "Creating Account..." : "Create Account"}
          </button>

          {/* Login Link */}
          <p className="text-center text-sm text-gray-400">
            Already have an account?{" "}
            <NavLink
              to="/login"
              className="font-semibold text-violet-400 hover:underline"
            >
              Login
            </NavLink>
          </p>

        </form>

      </div>

    </div>
  );
};

export default Signup;