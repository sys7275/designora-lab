import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "Modern Coffee Branding",
    category: "Branding",
    image: "https://picsum.photos/600/400?1",
  },
  {
    id: 2,
    title: "Tech Startup Logo",
    category: "Logo",
    image: "https://picsum.photos/600/400?2",
  },
  {
    id: 3,
    title: "Restaurant Social Media",
    category: "Social",
    image: "https://picsum.photos/600/400?3",
  },
  {
    id: 4,
    title: "Fashion Website",
    category: "Website",
    image: "https://picsum.photos/600/400?4",
  },
  {
    id: 5,
    title: "Gym Poster",
    category: "Poster",
    image: "https://picsum.photos/600/400?5",
  },
  {
    id: 6,
    title: "Cosmetics Packaging",
    category: "Packaging",
    image: "https://picsum.photos/600/400?6",
  },
];

const categories = [
  "All",
  "Logo",
  "Website",
  "Branding",
  "Social",
  "Poster",
  "Packaging",
];

export default function Portfolio() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <div className="min-h-screen bg-[#09090B] text-white pt-32">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold">
            Our Creative Portfolio
          </h1>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Explore our latest branding, website,
            logo and social media design projects.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">

          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full transition ${
                active === cat
                  ? "bg-violet-600"
                  : "bg-white/10 hover:bg-violet-500"
              }`}
            >
              {cat}
            </button>
          ))}

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {filtered.map((item) => (

            <div
              key={item.id}
              className="rounded-3xl overflow-hidden bg-white/5 border border-white/10 hover:border-violet-500 transition"
            >

              <img
                src={item.image}
                alt={item.title}
                className="h-56 w-full object-cover hover:scale-105 transition duration-300"
              />

              <div className="p-6">

                <span className="text-xs bg-violet-600 px-3 py-1 rounded-full">
                  {item.category}
                </span>

                <h2 className="text-2xl font-bold mt-4">
                  {item.title}
                </h2>

                <button className="mt-6 text-violet-400 hover:text-violet-300">
                  View Project →
                </button>

              </div>

            </div>

          ))}

        </div>

        <div className="mt-24 rounded-3xl bg-gradient-to-r from-violet-700 to-indigo-700 p-14 text-center">

          <h2 className="text-4xl font-bold">
            Ready to Start Your Project?
          </h2>

          <p className="text-white/80 mt-4">
            Let's create something amazing together.
          </p>

          <button className="mt-8 bg-white text-black px-8 py-4 rounded-xl font-semibold hover:scale-105 transition">
            Start Project
          </button>

        </div>

      </div>

    </div>
  );
}