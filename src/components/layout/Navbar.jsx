import { Menu, X, ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NavLink, useNavigate } from "react-router-dom";

import { auth } from "../../firebase/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

const Navbar = () => {
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [profileOpen, setProfileOpen] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const handleStartProject = () => {
    if (user) {
      navigate("/dashboard");
    } else {
      navigate("/login");
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
    setProfileOpen(false);
    setOpen(false);
    navigate("/");
  };

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-black/40 backdrop-blur-2xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <NavLink
          to="/"
          className="text-3xl font-black text-white"
        >
          Designora <span className="text-violet-500">Labs</span>
        </NavLink>

        {/* Desktop Menu */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                isActive
                  ? "font-semibold text-violet-500"
                  : "text-gray-300 transition hover:text-white"
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        {/* Desktop Right */}
        <div className="relative hidden lg:block">
          {!user ? (
            <button
              onClick={handleStartProject}
              className="rounded-xl bg-violet-600 px-6 py-3 font-semibold text-white transition hover:bg-violet-700"
            >
              Start Project
            </button>
          ) : (
            <div className="relative">
              <button
                onClick={() => setProfileOpen(!profileOpen)}
                className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-2 hover:bg-white/10"
              >
                <img
                  src={
                    user.photoURL ||
                    `https://ui-avatars.com/api/?name=${encodeURIComponent(
                      user.displayName || user.email
                    )}&background=7C3AED&color=fff`
                  }
                  alt="Profile"
                  className="h-10 w-10 rounded-full"
                />

                <div className="text-left">
                  <p className="text-sm font-semibold text-white">
                    {user.displayName || user.email.split("@")[0]}
                  </p>

                  <p className="text-xs text-gray-400">
                    {user.email}
                  </p>
                </div>

                <ChevronDown size={18} className="text-gray-400" />
              </button>

              {profileOpen && (
                <div className="absolute right-0 mt-3 w-60 rounded-2xl border border-white/10 bg-[#111827] p-2 shadow-2xl">

                  <button
                    onClick={() => {
                      navigate("/dashboard");
                      setProfileOpen(false);
                    }}
                    className="w-full rounded-xl px-4 py-3 text-left text-white hover:bg-violet-600"
                  >
                    Dashboard
                  </button>

                  <button
                    onClick={() => {
                      navigate("/projects");
                      setProfileOpen(false);
                    }}
                    className="w-full rounded-xl px-4 py-3 text-left text-white hover:bg-violet-600"
                  >
                    My Projects
                  </button>

                  <button
                    onClick={() => {
                      navigate("/settings");
                      setProfileOpen(false);
                    }}
                    className="w-full rounded-xl px-4 py-3 text-left text-white hover:bg-violet-600"
                  >
                    Settings
                  </button>

                  <hr className="my-2 border-white/10" />

                  <button
                    onClick={handleLogout}
                    className="w-full rounded-xl px-4 py-3 text-left text-red-400 hover:bg-red-500/20"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="text-white lg:hidden"
        >
          {open ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -25 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -25 }}
            transition={{ duration: 0.25 }}
            className="border-t border-white/10 bg-[#09090B] lg:hidden"
          >
            <div className="flex flex-col gap-6 p-6">

              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    isActive
                      ? "text-lg font-semibold text-violet-400"
                      : "text-lg text-gray-300 hover:text-violet-400"
                  }
                >
                  {item.name}
                </NavLink>
              ))}

              {!user ? (
                <button
                  onClick={() => {
                    setOpen(false);
                    navigate("/login");
                  }}
                  className="rounded-xl bg-violet-600 py-3 font-semibold text-white"
                >
                  Start Project
                </button>
              ) : (
                <div className="space-y-4">

                  <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3">
                   <img
  src={
    user.photoURL ||
    `https://ui-avatars.com/api/?name=${encodeURIComponent(
      user.displayName || user.email
    )}&background=7C3AED&color=fff`
  }
  alt="profile"
  className="h-10 w-10 rounded-full"
/>
<motion.div
  initial={{ opacity: 0, y: 10 }}
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0, y: 10 }}
  transition={{ duration: 0.2 }}
></motion.div>

                    <div>
                      <h3 className="font-semibold text-white">
                        {user.displayName || user.email.split("@")[0]}
                      </h3>

                      <p className="text-sm text-gray-400">
                        {user.email}
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      setOpen(false);
                      navigate("/dashboard");
                    }}
                    className="w-full rounded-xl bg-violet-600 py-3 font-semibold text-white"
                  >
                    Dashboard
                  </button>

                  <button
                    onClick={() => {
                      setOpen(false);
                      navigate("/projects");
                    }}
                    className="w-full rounded-xl border border-white/10 py-3 text-white"
                  >
                    My Projects
                  </button>

                  <button
                    onClick={() => {
                      setOpen(false);
                      navigate("/settings");
                    }}
                    className="w-full rounded-xl border border-white/10 py-3 text-white"
                  >
                    Settings
                  </button>

                  <button
                    onClick={handleLogout}
                    className="w-full rounded-xl bg-red-600 py-3 font-semibold text-white hover:bg-red-700"
                  >
                    Logout
                  </button>
                </div>
              )}

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;