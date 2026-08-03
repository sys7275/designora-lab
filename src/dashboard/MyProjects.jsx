import { useEffect, useState } from "react";
import {
  collection,
  query,
  where,
  onSnapshot,
} from "firebase/firestore";
import { auth, db } from "../firebase/firebase";

import {
  Search,
  Calendar,
  Download,
  MessageCircle,
  Eye,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
const MyProjects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (!auth.currentUser) {
      setLoading(false);
      return;
    }

    const q = query(
      collection(db, "projects"),
      where("clientId", "==", auth.currentUser.uid)
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const list = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setProjects(list);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return (
      <div className="flex h-96 items-center justify-center">
        <h2 className="text-2xl text-white">Loading Projects...</h2>
      </div>
    );
  }

  return (
    <div>
      {/* Header */}

      <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-4xl font-bold text-white">
            My Projects
          </h1>

          <p className="mt-2 text-gray-400">
            Track all your ongoing design projects.
          </p>
        </div>

        <div className="relative">
          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
          />

          <input
            type="text"
            placeholder="Search Project..."
            className="w-72 rounded-xl border border-white/10 bg-white/5 py-3 pl-11 pr-4 text-white outline-none focus:border-violet-500"
          />
        </div>
      </div>

      {/* Empty State */}

      {projects.length === 0 ? (
        <div className="mt-10 rounded-3xl border border-dashed border-white/20 p-10 text-center">
          <h2 className="text-2xl font-bold">
            No Projects Yet
          </h2>

          <p className="mt-3 text-gray-400">
            Click on <strong>Start Project</strong> to create your first
            project.
          </p>
        </div>
      ) : (
        <div className="mt-10 space-y-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="rounded-3xl border border-white/10 bg-white/5 p-6"
            >
              <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <h2 className="text-2xl font-bold">
                    {project.title}
                  </h2>

                  <p className="mt-2 text-gray-400">
                    Category : {project.category}
                  </p>

                  <div className="mt-4 flex items-center gap-2 text-gray-400">
                    <Calendar size={18} />
                    {project.deadline}
                  </div>
                </div>

                <div className="w-full max-w-sm">
                  <div className="mb-2 flex justify-between">
                    <span className="text-sm text-gray-400">
                      Progress
                    </span>

                    <span className="font-semibold text-violet-400">
                      {project.progress}%
                    </span>
                  </div>

                  <div className="h-3 rounded-full bg-black/40">
                    <div
                      style={{
                        width: `${project.progress}%`,
                      }}
                      className="h-3 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500"
                    />
                  </div>

                  <span
                    className={`mt-4 inline-block rounded-full px-4 py-2 text-sm ${
                      project.status === "Completed"
                        ? "bg-green-500/20 text-green-400"
                        : project.status === "Review"
                        ? "bg-blue-500/20 text-blue-400"
                        : "bg-yellow-500/20 text-yellow-400"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
               <button
  onClick={() => navigate(`/project/${project.id}`)}
  className="flex items-center gap-2 rounded-xl bg-violet-600 px-5 py-3 hover:bg-violet-700"
>
  <Eye size={18} />
  View
</button>

                <button className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 hover:bg-white/10">
                  <Download size={18} />
                  Download
                </button>
<button
  onClick={() => navigate(`/project/${project.id}`)}
  className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 hover:bg-white/10"
>
  <MessageCircle size={18} />
  Chat
</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyProjects;