import prayagLogo from "../../assets/images/prayagmart-logo.png";
import swaadLogo from "../../assets/images/swaadvilla-logo.png";
import designoraLogo from "../../assets/images/designora.jpeg";
const brands = [
  {
    name: "PrayagMart",
    logo: prayagLogo,
  },
  {
    name: "Swaad Villa",
    logo: swaadLogo,
  },
  {
    name: "Designora Labs",
    logo: designoraLogo,
  },
];

const TrustedBrands = () => {
  return (
    <section className="bg-[#09090B] py-16 border-y border-white/10">
      <div className="mx-auto max-w-7xl px-6">

        <p className="mb-10 text-center text-sm uppercase tracking-[0.3em] text-gray-400">
          Trusted By Growing Brands
        </p>

        <div className="grid grid-cols-2 gap-8 md:grid-cols-3">

          {brands.map((brand) => (
            <div
              key={brand.name}
              className="flex h-36 items-center justify-center rounded-3xl border border-white/10 bg-white/5 transition duration-300 hover:-translate-y-2 hover:border-violet-500/40"
            >
              <img
  src={brand.logo}
  alt={brand.name}
  className="max-h-24 max-w-[180px] object-contain"
/>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default TrustedBrands;