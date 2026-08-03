import { useState } from "react";
import {
  collection,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";

import { db } from "../firebase/firebase";

import { useNavigate } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  
  Globe,
} from "lucide-react";

export default function Contact() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    budget: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const [loading, setLoading] = useState(false);

const handleSubmit = async (e) => {
  e.preventDefault();

  if (
    !form.name ||
    !form.email ||
    !form.phone ||
    !form.service ||
    !form.budget ||
    !form.message
  ) {
    alert("Please fill all fields.");
    return;
  }

  setLoading(true);
try {
  await addDoc(
    collection(db, "contactMessages"),
    {
      ...form,
      status: "new",
      createdAt: serverTimestamp(),
    }
  );

  alert("✅ Your message has been sent successfully!");

  setForm({
    name: "",
    email: "",
    phone: "",
    service: "",
    budget: "",
    message: "",
  });

} catch (error) {
  console.error(error);
  alert("Failed to send message.");
} finally {
 
}
 

  

  setLoading(false);
};

  return (
    <div className="min-h-screen bg-[#09090B] text-white pt-28">

      {/* Hero */}

      <section className="relative overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-r from-violet-900/40 via-transparent to-fuchsia-900/30 blur-3xl"></div>

        <div className="relative mx-auto max-w-7xl px-6 py-20">

          <div className="text-center">

            <span className="rounded-full border border-violet-500/30 bg-violet-500/10 px-5 py-2 text-sm text-violet-300">
              Contact Designora Labs
            </span>

            <h1 className="mt-8 text-6xl font-extrabold">

              Let's Create Something
              <span className="bg-gradient-to-r from-violet-400 to-fuchsia-500 bg-clip-text text-transparent">
                {" "}Amazing
              </span>

            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-400">

              We'd love to hear your ideas.
              Whether you need a logo,
              website or complete branding,
              our team is ready to help.

            </p>

          </div>

        </div>

      </section>

      {/* Contact Cards */}

      <section className="mx-auto max-w-7xl px-6 py-10">

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {/* Email */}

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:border-violet-500">

            <div className="inline-flex rounded-2xl bg-violet-600 p-4">

              <Mail size={28} />

            </div>

            <h3 className="mt-6 text-2xl font-bold">

              Email

            </h3>

            <p className="mt-4 text-gray-400">

              sys737988396@gmail.com

            </p>

          </div>

          {/* Phone */}

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:border-cyan-500">

            <div className="inline-flex rounded-2xl bg-cyan-600 p-4">

              <Phone size={28} />

            </div>

            <h3 className="mt-6 text-2xl font-bold">

              Phone

            </h3>

            <p className="mt-4 text-gray-400">

              +91 7379883936

            </p>

          </div>

          {/* Location */}

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:border-green-500">

            <div className="inline-flex rounded-2xl bg-green-600 p-4">

              <MapPin size={28} />

            </div>

            <h3 className="mt-6 text-2xl font-bold">

              Location

            </h3>

            <p className="mt-4 text-gray-400">

              Jaunpur, Uttar Pradesh, India

            </p>

          </div>

          {/* Working Hours */}

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:border-orange-500">

            <div className="inline-flex rounded-2xl bg-orange-600 p-4">

              <Clock size={28} />

            </div>

            <h3 className="mt-6 text-2xl font-bold">

              Working Hours

            </h3>

            <p className="mt-4 text-gray-400">

              Mon - Sat

              <br />

              8:00 AM -10:00 PM

            </p>

          </div>

        </div>

      </section>

      {/* Social Section */}

      <section className="mx-auto max-w-7xl px-6 py-14">

        <div className="rounded-[40px] border border-white/10 bg-white/5 p-10">

          <h2 className="text-4xl font-bold">

            Connect With Us

          </h2>

          <p className="mt-4 text-gray-400">

            Stay connected with Designora Labs
            through our social platforms.

          </p>

          <div className="mt-10 flex flex-wrap gap-5">

           

            

            <button className="flex items-center gap-3 rounded-xl bg-white/10 px-6 py-4 transition hover:bg-green-600">

              <Globe size={22} />

              Website

            </button>

          </div>

        </div>

      </section>
            {/* Contact Form */}

      <section className="mx-auto max-w-7xl px-6 py-20">

        <div className="grid gap-12 lg:grid-cols-2">

          {/* Left */}

          <div>

            <span className="font-semibold text-violet-400">
              GET IN TOUCH
            </span>

            <h2 className="mt-4 text-5xl font-bold">
              Tell Us About
              <br />
              Your Project
            </h2>

            <p className="mt-8 text-lg leading-8 text-gray-400">

              Fill out the form and we'll get back
              to you within 24 hours with the
              perfect solution for your project.

            </p>

            <div className="mt-10 space-y-6">

              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">

                <h3 className="text-xl font-bold">
                  🚀 Fast Response
                </h3>

                <p className="mt-3 text-gray-400">
                  We usually reply within a few hours.
                </p>

              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">

                <h3 className="text-xl font-bold">
                  💜 Free Consultation
                </h3>

                <p className="mt-3 text-gray-400">
                  Discuss your project before starting.
                </p>

              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">

                <h3 className="text-xl font-bold">
                  🎯 Custom Solutions
                </h3>

                <p className="mt-3 text-gray-400">
                  Every project is planned according to
                  your business goals.
                </p>

              </div>

            </div>

          </div>

          {/* Right */}

          <div className="rounded-[35px] border border-white/10 bg-white/5 p-8 backdrop-blur">

            <h3 className="mb-8 text-3xl font-bold">
              Send Message
            </h3>

           <form onSubmit={handleSubmit} className="space-y-6">

              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={form.name}
                onChange={handleChange}
                className="w-full rounded-2xl border border-white/10 bg-black/30 px-5 py-4 outline-none focus:border-violet-500"
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={form.email}
                onChange={handleChange}
                className="w-full rounded-2xl border border-white/10 bg-black/30 px-5 py-4 outline-none focus:border-violet-500"
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={form.phone}
                onChange={handleChange}
                className="w-full rounded-2xl border border-white/10 bg-black/30 px-5 py-4 outline-none focus:border-violet-500"
              />

              <select
                name="service"
                value={form.service}
                onChange={handleChange}
                className="w-full rounded-2xl border border-white/10 bg-black/30 px-5 py-4 outline-none focus:border-violet-500"
              >

                <option value="">
                  Select Service
                </option>

                <option>
                  Logo Design
                </option>

                <option>
                  Website Design
                </option>

                <option>
                  Branding
                </option>

                <option>
                  Social Media Design
                </option>

                <option>
                  Packaging Design
                </option>

                <option>
                  Poster Design
                </option>

              </select>

              <select
                name="budget"
                value={form.budget}
                onChange={handleChange}
                className="w-full rounded-2xl border border-white/10 bg-black/30 px-5 py-4 outline-none focus:border-violet-500"
              >

                <option value="">
                  Select Budget
                </option>

                <option>
                  Under ₹5,000
                </option>

                <option>
                  ₹5,000 - ₹15,000
                </option>

                <option>
                  ₹15,000 - ₹50,000
                </option>

                <option>
                  Above ₹50,000
                </option>

              </select>

              <textarea
                rows="6"
                name="message"
                placeholder="Tell us about your project..."
                value={form.message}
                onChange={handleChange}
                className="w-full rounded-2xl border border-white/10 bg-black/30 px-5 py-4 outline-none focus:border-violet-500"
              />

          <button
  type="submit"
  disabled={loading}
  className="flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-violet-600 to-fuchsia-600 py-4 font-semibold transition hover:scale-[1.02] disabled:opacity-60"
>
  <Send size={20} />
  {loading ? "Sending..." : "Send Message"}
</button>

            </form>

          </div>

        </div>

      </section>
            {/* FAQ */}

      <section className="mx-auto max-w-7xl px-6 py-20">

        <div className="text-center">

          <span className="font-semibold text-violet-400">
            FREQUENTLY ASKED QUESTIONS
          </span>

          <h2 className="mt-4 text-5xl font-bold">
            Have Questions?
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
            Here are some common questions our clients ask before
            starting a project.
          </p>

        </div>

        <div className="mt-16 space-y-6">

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

            <h3 className="text-xl font-bold">
              💡 How long does a project take?
            </h3>

            <p className="mt-4 text-gray-400 leading-7">
              Most branding and graphic design projects are completed
              within 3–7 business days. Website projects usually take
              1–3 weeks depending on requirements.
            </p>

          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

            <h3 className="text-xl font-bold">
              🎨 Do you provide revisions?
            </h3>

            <p className="mt-4 text-gray-400 leading-7">
              Yes. Every project includes revisions to ensure you are
              completely satisfied with the final result.
            </p>

          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

            <h3 className="text-xl font-bold">
              💳 How do payments work?
            </h3>

            <p className="mt-4 text-gray-400 leading-7">
              Payments are discussed before the project starts.
              Secure payment options will be available soon.
            </p>

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="mx-auto max-w-7xl px-6 pb-24">

        <div className="rounded-[40px] bg-gradient-to-r from-violet-700 via-fuchsia-700 to-indigo-700 p-14 text-center shadow-2xl">

          <h2 className="text-5xl font-bold leading-tight">
            Ready To Start
            <br />
            Your Dream Project?
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/80">
            Whether you need a stunning logo, a modern website,
            branding or social media creatives,
            Designora Labs is ready to bring your ideas to life.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-5">

            <button
              onClick={() => navigate("/dashboard")}
              className="rounded-xl bg-white px-8 py-4 font-semibold text-black transition hover:scale-105"
            >
              Start Project
            </button>

            <button
              onClick={() => navigate("/portfolio")}
              className="rounded-xl border border-white px-8 py-4 font-semibold transition hover:bg-white hover:text-black"
            >
              View Portfolio
            </button>

          </div>

        </div>

      </section>

      {/* Footer Note */}

      <section className="border-t border-white/10 py-10">

        <div className="mx-auto max-w-7xl px-6 text-center">

          <p className="text-gray-500">
            © 2026 Designora Labs. Crafted with ❤️ using React,
            Firebase & Tailwind CSS.
          </p>

        </div>

      </section>

    </div>
  );
}