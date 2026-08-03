import { motion } from "framer-motion";
import { projects } from "../../data/projects";

const Showcase = () => {
  return (
    <section className="bg-[#09090B] py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <span className="rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-sm text-violet-300">
            Featured Work
          </span>

          <h2 className="mt-6 text-5xl font-bold text-white">
            Our Portfolio
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-400">
            Real projects designed by Designora Labs.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {projects.map((project) => (

            <motion.div
              key={project.id}
              whileHover={{ y: -8 }}
              className="overflow-hidden rounded-3xl border border-white/10 bg-[#141414]"
            >

              <img
                src={project.image}
                alt={project.title}
                className="h-80 w-full object-cover transition duration-500 hover:scale-110"
              />

              <div className="p-6">

                <span className="text-sm text-violet-400">
                  {project.category}
                </span>

                <h3 className="mt-2 text-2xl font-bold text-white">
                  {project.title}
                </h3>

                <p className="mt-2 text-gray-400">
                  {project.client}
                </p>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default Showcase;