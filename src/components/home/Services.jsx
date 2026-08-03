import { motion } from "framer-motion";
import { services } from "../../data/services";

const Services = () => {
  return (
    <section className="bg-[#09090B] py-28">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <div className="text-center">

          <span className="rounded-full border border-violet-500/30 bg-violet-500/10 px-5 py-2 text-sm text-violet-300">
            Our Services
          </span>

          <h2 className="mt-6 text-5xl font-bold text-white">
            Everything Your Brand Needs
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-400">
            We provide creative design solutions that help businesses grow,
            attract customers and build a strong brand identity.
          </p>

        </div>

        {/* Cards */}

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {services.map((service) => {

            const Icon = service.icon;

            return (

              <motion.div
                key={service.id}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                }}
                transition={{
                  duration: 0.3,
                }}
                className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition hover:border-violet-500/40"
              >

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-violet-600/20 text-violet-400 transition group-hover:bg-violet-600 group-hover:text-white">

                  <Icon size={30} />

                </div>

                <h3 className="mt-8 text-2xl font-bold text-white">

                  {service.title}

                </h3>

                <p className="mt-4 leading-7 text-gray-400">

                  {service.description}

                </p>

                <button className="mt-8 text-violet-400 transition group-hover:translate-x-2">
                  Learn More →
                </button>

              </motion.div>

            );

          })}

        </div>

      </div>
    </section>
  );
};

export default Services;