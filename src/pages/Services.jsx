import { useNavigate } from "react-router-dom";
import {
  Palette,
  Monitor,
  Image,
  Package,
  Globe,
  Briefcase,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

const services = [
  {
    id: "logo",
    title: "Logo Design",
    icon: Palette,
    description:
      "Unique, memorable and modern logo designs that represent your brand identity.",
    features: [
      "Minimal Logo",
      "Luxury Branding",
      "Vector Files",
      "Social Kit",
    ],
    color: "from-violet-600 to-fuchsia-600",
  },
  {
    id: "social",
    title: "Social Media Design",
    icon: Image,
    description:
      "Creative Instagram posts, stories, Facebook ads and marketing creatives.",
    features: [
      "Instagram Posts",
      "Facebook Ads",
      "Story Templates",
      "Carousel Design",
    ],
    color: "from-pink-600 to-violet-600",
  },
  {
    id: "website",
    title: "Website Design",
    icon: Monitor,
    description:
      "Modern responsive websites built using React and the latest technologies.",
    features: [
      "Landing Pages",
      "Business Website",
      "Portfolio",
      "UI Design",
    ],
    color: "from-cyan-600 to-blue-600",
  },
  {
    id: "branding",
    title: "Brand Identity",
    icon: Briefcase,
    description:
      "Complete branding package for startups and businesses.",
    features: [
      "Business Card",
      "Letterhead",
      "Brand Guide",
      "Stationery",
    ],
    color: "from-orange-500 to-red-500",
  },
  {
    id: "packaging",
    title: "Packaging Design",
    icon: Package,
    description:
      "Premium product packaging that increases customer attraction.",
    features: [
      "Label Design",
      "Box Design",
      "Mockups",
      "Print Ready",
    ],
    color: "from-green-500 to-emerald-600",
  },
  {
    id: "poster",
    title: "Poster Design",
    icon: Globe,
    description:
      "Creative posters and promotional graphics for every business.",
    features: [
      "Marketing Posters",
      "Event Posters",
      "Flyers",
      "Banner Design",
    ],
    color: "from-indigo-600 to-violet-700",
  },
];

export default function ServicesPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#09090B] text-white pt-28">

      {/* Hero */}

      <section className="relative overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-r from-violet-900/40 via-transparent to-cyan-900/20 blur-3xl"></div>

        <div className="relative mx-auto max-w-7xl px-6 py-20">

          <div className="max-w-4xl">

            <span className="rounded-full border border-violet-500/30 bg-violet-500/10 px-5 py-2 text-sm text-violet-300">
              Creative Digital Agency
            </span>

            <h1 className="mt-8 text-6xl font-extrabold leading-tight">

              Build Your
              <span className="bg-gradient-to-r from-violet-400 to-fuchsia-500 bg-clip-text text-transparent">
                {" "}
                Brand
              </span>

              <br />

              With Designora Labs

            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-400">

              We help startups, creators and businesses grow through
              premium branding, websites, social media creatives and
              high-quality graphic design.

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

        </div>

      </section>

      {/* Services */}

      <section className="mx-auto max-w-7xl px-6 py-16">

        <div className="mb-14 text-center">

          <h2 className="text-4xl font-bold">
            Our Premium Services
          </h2>

          <p className="mt-5 text-gray-400">
            Everything you need to create a powerful digital presence.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
                    {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.id}
                className="group rounded-3xl border border-white/10 bg-white/5 p-8 transition duration-300 hover:-translate-y-2 hover:border-violet-500 hover:bg-white/10"
              >

                <div
                  className={`inline-flex rounded-2xl bg-gradient-to-r ${service.color} p-4`}
                >
                  <Icon size={32} />
                </div>

                <h3 className="mt-6 text-2xl font-bold">
                  {service.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-400">
                  {service.description}
                </p>

                <div className="mt-6 space-y-3">

                  {service.features.map((feature) => (

                    <div
                      key={feature}
                      className="flex items-center gap-3"
                    >

                      <CheckCircle
                        size={18}
                        className="text-violet-400"
                      />

                      <span className="text-gray-300">
                        {feature}
                      </span>

                    </div>

                  ))}

                </div>

                <button
                  onClick={() => navigate("/dashboard")}
                  className="mt-8 flex items-center gap-2 rounded-xl bg-violet-600 px-5 py-3 font-semibold transition hover:bg-violet-700"
                >
                  Start Project

                  <ArrowRight size={18} />

                </button>

              </div>
            );
          })}

        </div>

      </section>

      {/* Why Choose Us */}

      <section className="mx-auto max-w-7xl px-6 py-20">

        <div className="mb-14 text-center">

          <h2 className="text-4xl font-bold">
            Why Choose Designora Labs?
          </h2>

          <p className="mt-5 text-gray-400">
            We don't just design — we create experiences that
            make your brand stand out.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

            <h3 className="text-2xl font-bold">
              ⚡ Fast Delivery
            </h3>

            <p className="mt-4 text-gray-400">
              Timely delivery without compromising quality.
            </p>

          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

            <h3 className="text-2xl font-bold">
              🎨 Premium Quality
            </h3>

            <p className="mt-4 text-gray-400">
              Pixel-perfect modern designs that leave an impact.
            </p>

          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

            <h3 className="text-2xl font-bold">
              🤝 Client First
            </h3>

            <p className="mt-4 text-gray-400">
              We work closely with every client from idea to launch.
            </p>

          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

            <h3 className="text-2xl font-bold">
              🚀 Latest Technology
            </h3>

            <p className="mt-4 text-gray-400">
              React, Firebase and modern UI for every project.
            </p>

          </div>

        </div>

      </section>
            {/* Stats */}

      <section className="mx-auto max-w-7xl px-6 py-10">

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          <div className="rounded-3xl bg-gradient-to-r from-violet-600 to-fuchsia-600 p-8 text-center">

            <h2 className="text-5xl font-bold">
              50+
            </h2>

            <p className="mt-3 text-white/80">
              Projects Completed
            </p>

          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center">

            <h2 className="text-5xl font-bold text-violet-400">
              20+
            </h2>

            <p className="mt-3 text-gray-400">
              Happy Clients
            </p>

          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center">

            <h2 className="text-5xl font-bold text-green-400">
              100%
            </h2>

            <p className="mt-3 text-gray-400">
              Client Satisfaction
            </p>

          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center">

            <h2 className="text-5xl font-bold text-cyan-400">
              24/7
            </h2>

            <p className="mt-3 text-gray-400">
              Support Available
            </p>

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="mx-auto max-w-7xl px-6 py-24">

        <div className="overflow-hidden rounded-[40px] bg-gradient-to-r from-violet-700 via-fuchsia-700 to-indigo-700 p-14 text-center shadow-2xl">

          <span className="rounded-full bg-white/20 px-5 py-2 text-sm font-semibold">
            🚀 Ready to Grow?
          </span>

          <h2 className="mt-8 text-5xl font-bold leading-tight">

            Let's Build Something
            Amazing Together

          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/80">

            Whether you need a logo, website,
            complete branding or social media creatives,
            our team is ready to turn your vision
            into reality.

          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-5">

            <button
              onClick={() => navigate("/dashboard")}
              className="rounded-xl bg-white px-8 py-4 font-semibold text-black transition hover:scale-105"
            >
              Start Your Project
            </button>

            <button
              onClick={() => navigate("/contact")}
              className="rounded-xl border border-white px-8 py-4 font-semibold transition hover:bg-white hover:text-black"
            >
              Let's Discuss
            </button>

          </div>

        </div>

      </section>

    </div>
  );
}