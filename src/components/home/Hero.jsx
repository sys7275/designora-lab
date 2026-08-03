import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
const Hero = () => {
  const navigate = useNavigate();
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#09090B] pt-28 flex items-center">

      {/* Purple Glow */}
      <div className="absolute -top-52 -left-40 h-[500px] w-[500px] rounded-full bg-violet-600/20 blur-[140px]"></div>

      {/* Cyan Glow */}
      <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[140px]"></div>

      {/* Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)",
            backgroundSize: "45px 45px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">

        <div className="grid items-center gap-16 lg:grid-cols-12">

          {/* LEFT SIDE */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <div className="inline-flex items-center rounded-full border border-violet-500/30 bg-violet-500/10 px-5 py-2 text-sm text-violet-300">
              ✨ Premium Creative Design Agency
            </div>

            {/* Heading */}
            <h1 className="mt-7 text-5xl font-black leading-tight text-white md:text-7xl">
              We Don't Just
              <br />
              Design.
              <br />

              <span className="text-violet-500">
                We Build Brands.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-8 max-w-xl text-lg leading-8 text-gray-400">
              From logos and social media creatives to complete
              brand identities and websites, we create designs
              that help businesses stand out, connect and grow.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-wrap gap-5">

              <button
  onClick={() => navigate("/contact")}
  className="rounded-xl bg-violet-600 px-8 py-4 font-semibold transition hover:bg-violet-700"
>
  Start a Project
</button>

            <button
  onClick={() => navigate("/portfolio")}
  className="rounded-xl border border-white/15 px-8 py-4 font-semibold text-white transition hover:bg-white/10"
>
  View Portfolio
</button>

            </div>

            {/* Stats */}
            <div className="mt-14 grid grid-cols-3 gap-6">

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
                <h2 className="text-3xl font-bold">50+</h2>
                <p className="mt-2 text-gray-400">
                  Projects
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
                <h2 className="text-3xl font-bold">98%</h2>
                <p className="mt-2 text-gray-400">
                  Satisfaction
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
                <h2 className="text-3xl font-bold">24h</h2>
                <p className="mt-2 text-gray-400">
                  Response
                </p>
              </div>

            </div>

          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            className="relative flex justify-center lg:col-span-5"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >

            <div className="relative h-[560px] w-full max-w-md overflow-hidden rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-2xl">

              <div className="absolute inset-0 bg-gradient-to-br from-violet-600/20 via-transparent to-cyan-500/20"></div>

              {/* Floating Cards */}

              <div className="absolute left-6 top-8 rounded-xl bg-violet-600 px-5 py-3 font-medium shadow-lg">
                🎨 Logo Design
              </div>

              <div className="absolute right-6 top-36 rounded-xl bg-cyan-500 px-5 py-3 font-medium shadow-lg">
                📱 Social Media
              </div>

              <div className="absolute bottom-12 left-8 rounded-xl border border-white/10 bg-white/10 px-5 py-3 backdrop-blur-xl">
                🌐 Website Design
              </div>

              <div className="flex h-full items-center justify-center">

                <h2 className="text-center text-5xl font-black leading-tight tracking-wider">
                  DESIGNORA
                  <br />

                  <span className="text-violet-500">
                    LABS
                  </span>

                </h2>

              </div>

            </div>

          </motion.div>

        </div>

      </div>

      {/* Scroll Indicator */}

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">

        <div className="flex h-10 w-6 justify-center rounded-full border border-white/20">

          <div className="mt-2 h-2 w-2 rounded-full bg-violet-500"></div>

        </div>

      </div>

    </section>
  );
};

export default Hero;