import { useNavigate } from "react-router-dom";
import {
  Sparkles,
  Target,
  Rocket,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

export default function About() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#09090B] text-white pt-28">

      {/* Hero */}

      <section className="relative overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-r from-violet-900/40 via-transparent to-fuchsia-900/30 blur-3xl"></div>

        <div className="relative mx-auto max-w-7xl px-6 py-24">

          <div className="grid items-center gap-14 lg:grid-cols-2">

            {/* Left */}

            <div>

              <span className="rounded-full border border-violet-500/30 bg-violet-500/10 px-5 py-2 text-sm text-violet-300">
                About Designora Labs
              </span>

              <h1 className="mt-8 text-6xl font-extrabold leading-tight">

                We Design

                <span className="bg-gradient-to-r from-violet-400 to-fuchsia-500 bg-clip-text text-transparent">
                  {" "}Digital Experiences
                </span>

              </h1>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-400">

                Designora Labs is a creative digital agency
                helping startups, businesses and creators
                build memorable brands through modern
                graphic design, branding and websites.

              </p>

              <div className="mt-10 flex flex-wrap gap-5">

                <button
                  onClick={() => navigate("/dashboard")}
                  className="rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 px-8 py-4 font-semibold transition hover:scale-105"
                >
                  Start Project
                </button>

                <button
                  onClick={() => navigate("/portfolio")}
                  className="rounded-xl border border-white/15 px-8 py-4 font-semibold transition hover:border-violet-500"
                >
                  View Portfolio
                </button>

              </div>

            </div>

            {/* Right */}

            <div>

              <div className="rounded-[40px] border border-white/10 bg-white/5 p-10 backdrop-blur">

                <div className="flex items-center gap-4">

                  <div className="rounded-2xl bg-violet-600 p-4">
                    <Sparkles size={30} />
                  </div>

                  <div>

                    <h3 className="text-2xl font-bold">
                      Creative First
                    </h3>

                    <p className="text-gray-400">
                      Every design starts with an idea.
                    </p>

                  </div>

                </div>

                <div className="mt-8 space-y-6">

                  <div className="rounded-2xl bg-black/30 p-6">

                    <h4 className="text-xl font-bold">
                      Modern UI / UX
                    </h4>

                    <p className="mt-3 text-gray-400">
                      Premium interfaces focused on user
                      experience and conversion.
                    </p>

                  </div>

                  <div className="rounded-2xl bg-black/30 p-6">

                    <h4 className="text-xl font-bold">
                      Brand Identity
                    </h4>

                    <p className="mt-3 text-gray-400">
                      Logos, colors and visual systems
                      that define your business.
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* Story */}

      <section className="mx-auto max-w-7xl px-6 py-24">

        <div className="grid gap-14 lg:grid-cols-2">

          <div>

            <span className="text-violet-400 font-semibold">
              OUR STORY
            </span>

            <h2 className="mt-4 text-5xl font-bold">
              Building Brands
              That People Remember
            </h2>

            <p className="mt-8 leading-8 text-gray-400">

              Designora Labs started with one simple goal —
              helping businesses create premium visual
              identities without the complexity of
              traditional agencies.

            </p>

            <p className="mt-6 leading-8 text-gray-400">

              Today we build logos, websites,
              social media creatives,
              complete brand identities and
              digital experiences that help
              businesses grow online.

            </p>

          </div>

          <div className="grid gap-6">

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

              <Target
                size={36}
                className="text-violet-400"
              />

              <h3 className="mt-5 text-2xl font-bold">
                Our Mission
              </h3>

              <p className="mt-4 text-gray-400 leading-7">

                Deliver creative digital solutions
                that help brands stand out.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

              <Rocket
                size={36}
                className="text-cyan-400"
              />

              <h3 className="mt-5 text-2xl font-bold">
                Our Vision
              </h3>

              <p className="mt-4 text-gray-400 leading-7">

                Become one of India's most trusted
                creative digital studios.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

              <ShieldCheck
                size={36}
                className="text-green-400"
              />

              <h3 className="mt-5 text-2xl font-bold">
                Our Promise
              </h3>

              <p className="mt-4 text-gray-400 leading-7">

                Quality, transparency and
                client satisfaction in every project.

              </p>

            </div>

          </div>

        </div>

      </section>
            {/* Statistics */}

      <section className="mx-auto max-w-7xl px-6 py-10">

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          <div className="rounded-3xl bg-gradient-to-r from-violet-600 to-fuchsia-600 p-8 text-center shadow-xl">

            <h2 className="text-5xl font-extrabold">
              50+
            </h2>

            <p className="mt-3 text-white/80">
              Projects Completed
            </p>

          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center">

            <h2 className="text-5xl font-extrabold text-cyan-400">
              20+
            </h2>

            <p className="mt-3 text-gray-400">
              Happy Clients
            </p>

          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center">

            <h2 className="text-5xl font-extrabold text-green-400">
              100%
            </h2>

            <p className="mt-3 text-gray-400">
              Client Satisfaction
            </p>

          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center">

            <h2 className="text-5xl font-extrabold text-orange-400">
              24/7
            </h2>

            <p className="mt-3 text-gray-400">
              Support Available
            </p>

          </div>

        </div>

      </section>

      {/* Core Values */}

      <section className="mx-auto max-w-7xl px-6 py-24">

        <div className="text-center">

          <span className="text-violet-400 font-semibold">
            OUR VALUES
          </span>

          <h2 className="mt-4 text-5xl font-bold">
            What Makes Us Different
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">

            Every project is driven by creativity,
            strategy and attention to detail.

          </p>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:-translate-y-2 hover:border-violet-500">

            <div className="text-5xl">
              🎨
            </div>

            <h3 className="mt-6 text-2xl font-bold">
              Creativity
            </h3>

            <p className="mt-4 leading-7 text-gray-400">

              We create modern and unique designs
              that make brands memorable.

            </p>

          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:-translate-y-2 hover:border-cyan-500">

            <div className="text-5xl">
              🚀
            </div>

            <h3 className="mt-6 text-2xl font-bold">
              Innovation
            </h3>

            <p className="mt-4 leading-7 text-gray-400">

              Using the latest tools and technologies
              to deliver premium experiences.

            </p>

          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:-translate-y-2 hover:border-green-500">

            <div className="text-5xl">
              🤝
            </div>

            <h3 className="mt-6 text-2xl font-bold">
              Collaboration
            </h3>

            <p className="mt-4 leading-7 text-gray-400">

              We work closely with our clients
              throughout the project journey.

            </p>

          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:-translate-y-2 hover:border-orange-500">

            <div className="text-5xl">
              ⭐
            </div>

            <h3 className="mt-6 text-2xl font-bold">
              Excellence
            </h3>

            <p className="mt-4 leading-7 text-gray-400">

              Every pixel matters.
              We focus on quality over quantity.

            </p>

          </div>

        </div>

      </section>

      {/* Our Process */}

      <section className="mx-auto max-w-7xl px-6 py-24">

        <div className="text-center">

          <span className="text-violet-400 font-semibold">
            OUR PROCESS
          </span>

          <h2 className="mt-4 text-5xl font-bold">
            How We Work
          </h2>

        </div>

        <div className="mt-20 grid gap-10 lg:grid-cols-4">

          <div className="rounded-3xl bg-white/5 p-8 border border-white/10">

            <div className="text-4xl font-bold text-violet-400">
              01
            </div>

            <h3 className="mt-5 text-2xl font-bold">
              Discover
            </h3>

            <p className="mt-4 text-gray-400">

              Understanding your business,
              goals and target audience.

            </p>

          </div>

          <div className="rounded-3xl bg-white/5 p-8 border border-white/10">

            <div className="text-4xl font-bold text-cyan-400">
              02
            </div>

            <h3 className="mt-5 text-2xl font-bold">
              Design
            </h3>

            <p className="mt-4 text-gray-400">

              Creating premium concepts
              tailored to your vision.

            </p>

          </div>

          <div className="rounded-3xl bg-white/5 p-8 border border-white/10">

            <div className="text-4xl font-bold text-green-400">
              03
            </div>

            <h3 className="mt-5 text-2xl font-bold">
              Develop
            </h3>

            <p className="mt-4 text-gray-400">

              Refining every detail
              before final delivery.

            </p>

          </div>

          <div className="rounded-3xl bg-white/5 p-8 border border-white/10">

            <div className="text-4xl font-bold text-orange-400">
              04
            </div>

            <h3 className="mt-5 text-2xl font-bold">
              Deliver
            </h3>

            <p className="mt-4 text-gray-400">

              Launching a polished,
              production-ready solution.

            </p>

          </div>

        </div>

      </section>
            {/* Meet The Team */}

      <section className="mx-auto max-w-7xl px-6 py-24">

        <div className="text-center">

          <span className="font-semibold text-violet-400">
            OUR TEAM
          </span>

          <h2 className="mt-4 text-5xl font-bold">
            Meet The Creative Minds
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-400">
            A passionate team dedicated to building modern,
            memorable and premium digital experiences.
          </p>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center transition hover:-translate-y-2 hover:border-violet-500">

            <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 text-4xl font-bold">
              SY
            </div>

            <h3 className="mt-6 text-2xl font-bold">
              Shreyansh Yadav
            </h3>

            <p className="mt-2 text-violet-400">
              Founder & Developer
            </p>

            <p className="mt-5 text-gray-400 leading-7">
              Full Stack Developer and UI Designer building
              modern web experiences with React, Firebase
              and premium user interfaces.
            </p>

          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center transition hover:-translate-y-2 hover:border-cyan-500">

            <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-4xl font-bold">
              UI
            </div>

            <h3 className="mt-6 text-2xl font-bold">
              Creative Design
            </h3>

            <p className="mt-2 text-cyan-400">
              UI / UX Team
            </p>

            <p className="mt-5 text-gray-400 leading-7">
              Crafting elegant interfaces and memorable
              experiences focused on usability.
            </p>

          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center transition hover:-translate-y-2 hover:border-green-500">

            <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-r from-green-500 to-emerald-600 text-4xl font-bold">
              CS
            </div>

            <h3 className="mt-6 text-2xl font-bold">
              Client Success
            </h3>

            <p className="mt-2 text-green-400">
              Support Team
            </p>

            <p className="mt-5 text-gray-400 leading-7">
              Ensuring every client receives quick support,
              transparent communication and timely delivery.
            </p>

          </div>

        </div>

      </section>

      {/* Testimonials */}

      <section className="mx-auto max-w-7xl px-6 py-24">

        <div className="text-center">

          <span className="font-semibold text-violet-400">
            TESTIMONIALS
          </span>

          <h2 className="mt-4 text-5xl font-bold">
            What Clients Say
          </h2>

        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

            <p className="leading-8 text-gray-300">
              "Professional work and excellent communication.
              The branding exceeded our expectations."
            </p>

            <h4 className="mt-8 font-bold">
              — Startup Founder
            </h4>

          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

            <p className="leading-8 text-gray-300">
              "Fast delivery, modern design and outstanding
              attention to detail."
            </p>

            <h4 className="mt-8 font-bold">
              — Business Owner
            </h4>

          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

            <p className="leading-8 text-gray-300">
              "Our website looks amazing and performs
              beautifully on every device."
            </p>

            <h4 className="mt-8 font-bold">
              — Ecommerce Client
            </h4>

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="mx-auto max-w-7xl px-6 pb-24">

        <div className="rounded-[40px] bg-gradient-to-r from-violet-700 via-fuchsia-700 to-indigo-700 p-14 text-center shadow-2xl">

          <h2 className="text-5xl font-bold leading-tight">
            Ready To Build
            <br />
            Your Dream Project?
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/80">
            Whether you need branding, logo design,
            a modern website or a complete digital identity,
            we're here to bring your vision to life.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-5">

            <button
              onClick={() => navigate("/dashboard")}
              className="rounded-xl bg-white px-8 py-4 font-semibold text-black transition hover:scale-105"
            >
              Start Project
            </button>

            <button
              onClick={() => navigate("/contact")}
              className="rounded-xl border border-white px-8 py-4 font-semibold transition hover:bg-white hover:text-black"
            >
              Contact Us
            </button>

          </div>

        </div>

      </section>

    </div>
  );
}