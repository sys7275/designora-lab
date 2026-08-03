import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { testimonials } from "../../data/testimonials";

const Testimonials = () => {
  return (
    <section className="bg-[#09090B] py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <span className="rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-sm text-violet-300">
            Testimonials
          </span>

          <h2 className="mt-6 text-5xl font-bold text-white">
            What Our Clients Say
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-400">
            Trusted by businesses for creative branding and modern design solutions.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {testimonials.map((item) => (

            <motion.div
              key={item.id}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
            >

              {/* Stars */}
              <div className="mb-6 flex">
                {[...Array(5)].map((_, index) => (
                  <Star
                    key={index}
                    size={18}
                    className="mr-1 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              <p className="leading-7 text-gray-300">
                "{item.review}"
              </p>

              <div className="mt-8 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-violet-600 text-xl font-bold text-white">
                  {item.name.charAt(0)}
                </div>

                <div>
                  <h4 className="font-semibold text-white">
                    {item.name}
                  </h4>

                  <p className="text-sm text-gray-400">
                    {item.company}
                  </p>
                </div>
              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default Testimonials;