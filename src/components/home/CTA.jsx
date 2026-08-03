import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";

const CTA = () => {
  return (
    <section className="bg-[#09090B] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[32px] border border-violet-500/20 bg-gradient-to-r from-violet-900/40 via-[#18181B] to-cyan-900/20 p-12 text-center"
        >
          {/* Glow */}
          <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-violet-600/20 blur-3xl"></div>
          <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl"></div>

          <span className="rounded-full border border-violet-500/30 bg-violet-500/10 px-5 py-2 text-sm text-violet-300">
            Let's Build Something Amazing
          </span>

          <h2 className="mt-8 text-5xl font-extrabold text-white">
            Ready to Elevate Your Brand?
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-300">
            Every project is unique. Tell us about your ideas and we'll
            create a custom design solution that fits your business perfectly.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-5 sm:flex-row">

            <button className="flex items-center justify-center gap-2 rounded-xl bg-violet-600 px-8 py-4 font-semibold text-white transition hover:bg-violet-700">
              Start Your Project
              <ArrowRight size={20} />
            </button>

            <button className="flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-8 py-4 font-semibold text-white transition hover:bg-white/10">
              <MessageCircle size={20} />
              Let's Discuss
            </button>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;