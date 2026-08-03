import { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db, auth } from "../../firebase/firebase";

const CreateProject = () => {
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    title: "",
    category: "",
    description: "",
    budget: "",
    deadline: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

     const docRef = await addDoc(collection(db, "projects"), {
  ...form,
  clientId: auth.currentUser.uid,
  clientEmail: auth.currentUser.email,
  progress: 0,
  status: "Pending",
  createdAt: serverTimestamp(),
});

await addDoc(
  collection(db, "projects", docRef.id, "activities"),
  {
    type: "CREATE",
    message: "Project created",
    user: auth.currentUser.email,
    createdAt: serverTimestamp(),
  }
);

      alert("Project Created Successfully!");

      setForm({
        title: "",
        category: "",
        description: "",
        budget: "",
        deadline: "",
      });
    } catch (err) {
      console.error(err);
      alert("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto max-w-3xl rounded-3xl border border-white/10 bg-white/5 p-8">
      <h1 className="mb-8 text-3xl font-bold">
        Start New Project
      </h1>

      <form onSubmit={handleSubmit} className="space-y-5">

        <input
          name="title"
          placeholder="Project Title"
          value={form.title}
          onChange={handleChange}
          className="w-full rounded-xl bg-black/30 p-4 outline-none"
          required
        />

        <input
          name="category"
          placeholder="Logo / Website / Branding"
          value={form.category}
          onChange={handleChange}
          className="w-full rounded-xl bg-black/30 p-4 outline-none"
          required
        />

        <textarea
          rows="5"
          name="description"
          placeholder="Describe your project..."
          value={form.description}
          onChange={handleChange}
          className="w-full rounded-xl bg-black/30 p-4 outline-none"
          required
        />

        <input
          name="budget"
          placeholder="Budget"
          value={form.budget}
          onChange={handleChange}
          className="w-full rounded-xl bg-black/30 p-4 outline-none"
        />

        <input
          type="date"
          name="deadline"
          value={form.deadline}
          onChange={handleChange}
          className="w-full rounded-xl bg-black/30 p-4 outline-none"
        />

        <button
          disabled={loading}
          className="w-full rounded-xl bg-violet-600 py-4 font-semibold hover:bg-violet-700 disabled:opacity-50"
        >
          {loading ? "Creating..." : "Create Project"}
        </button>

      </form>
    </div>
  );
};

export default CreateProject;