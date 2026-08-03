import { motion } from "framer-motion";
import { features } from "../../data/features";

const WhyChoose = () => {
  return (
    <section className="bg-[#09090B] py-28">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <div className="text-center">
          <span className="rounded-full border border-violet-500/30 bg-violet-500/10 px-5 py-2 text-sm text-violet-300">
            Why Choose Us
          </span>

          <h2 className="mt-6 text-5xl font-bold text-white">
            Why Designora Labs?
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg text-gray-400">
            We combine creativity, strategy and technology to build
            brands that leave a lasting impression.
          </p>
        </div>

        {/* Features */}

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {features.map((feature) => {

            const Icon = feature.icon;

            return (

              <motion.div
                key={feature.id}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
                transition={{
                  duration: 0.3,
                }}
                className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl hover:border-violet-500/40"
              >

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-violet-600/20 text-violet-400">
                  <Icon size={30} />
                </div>

                <h3 className="mt-8 text-2xl font-bold text-white">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-400">
                  {feature.description}
                </p>

              </motion.div>

            );

          })}

        </div>

      </div>
    </section>
  );
};

export default WhyChoose;