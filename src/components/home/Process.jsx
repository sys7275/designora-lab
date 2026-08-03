import { motion } from "framer-motion";
import { process } from "../../data/process";

const Process = () => {
  return (
    <section className="bg-[#09090B] py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <span className="rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-sm text-violet-300">
            Our Process
          </span>

          <h2 className="mt-6 text-5xl font-bold text-white">
            How We Work
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-400">
            A simple process that keeps every project organized,
            transparent, and focused on delivering quality.
          </p>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {process.map((step) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.id}
                whileHover={{ y: -8 }}
                className="relative rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-xl"
              >
                <span className="absolute right-6 top-6 text-5xl font-bold text-white/10">
                  {step.id}
                </span>

                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-violet-600/20 text-violet-400">
                  <Icon size={30} />
                </div>

                <h3 className="mt-6 text-2xl font-bold text-white">
                  {step.title}
                </h3>

                <p className="mt-4 text-gray-400">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Process;