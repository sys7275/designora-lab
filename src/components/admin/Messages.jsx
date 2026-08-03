import { useEffect, useState } from "react";
import {
  collection,
  onSnapshot,
  getDocs,
  query,
  orderBy,
} from "firebase/firestore";

import { db } from "../../firebase/firebase";
import AdminProjectChat from "./AdminProjectChat";

const Messages = () => {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  // ===========================
  // Fetch Projects
  // ===========================
  useEffect(() => {
    const q = query(collection(db, "projects"));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setProjects(data);

      if (!selectedProject && data.length > 0) {
        setSelectedProject(data[0]);
      }
    });

    return () => unsubscribe();
  }, []);

  // ===========================
  // Fetch Contact Messages
  // ===========================
  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const q = query(
          collection(db, "contactMessages"),
          orderBy("createdAt", "desc")
        );

        const snapshot = await getDocs(q);

        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setMessages(data);
      } catch (err) {
        console.log(err);
      }

      setLoading(false);
    };

    fetchMessages();
  }, []);

  return (
    <div className="space-y-8">

      {/* ========================= */}
      {/* CLIENT CHATS */}
      {/* ========================= */}

      <div className="grid grid-cols-12 gap-6">

        {/* Project List */}

        <div className="col-span-4 rounded-2xl bg-white/5 p-5">

          <h2 className="mb-5 text-2xl font-bold">
            Client Chats
          </h2>

          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className={`mb-3 cursor-pointer rounded-xl p-4 transition ${
                selectedProject?.id === project.id
                  ? "bg-violet-600"
                  : "bg-black/20 hover:bg-black/40"
              }`}
            >
              <h3 className="font-semibold">
                {project.title}
              </h3>

              <p className="text-sm text-gray-300">
                {project.clientEmail}
              </p>
            </div>
          ))}

        </div>

        {/* Chat */}

        <div className="col-span-8">

          {selectedProject ? (
            <AdminProjectChat
              projectId={selectedProject.id}
            />
          ) : (
            <div className="rounded-2xl bg-white/5 p-10">
              Select a project.
            </div>
          )}

        </div>

      </div>

      {/* ========================= */}
      {/* CONTACT FORM MESSAGES */}
      {/* ========================= */}

      <div className="rounded-2xl bg-white/5 p-6">

        <h2 className="mb-6 text-2xl font-bold">
          Contact Form Messages
        </h2>

        {loading ? (
          <p>Loading...</p>
        ) : messages.length === 0 ? (
          <p>No Messages Found.</p>
        ) : (
          <div className="space-y-4">

            {messages.map((msg) => (

              <div
                key={msg.id}
                className="rounded-xl border border-white/10 bg-black/20 p-5"
              >

                <div className="flex items-center justify-between">

                  <div>

                    <h3 className="text-xl font-semibold">
                      {msg.name}
                    </h3>

                    <p className="text-gray-400">
                      {msg.email}
                    </p>

                    <p className="text-gray-400">
                      {msg.phone}
                    </p>

                  </div>

                  <span className="rounded-full bg-violet-600 px-3 py-1 text-sm">
                    {msg.status}
                  </span>

                </div>

                <div className="mt-4">

                  <p className="text-violet-400">
                    Service : {msg.service}
                  </p>

                  <p className="text-gray-400">
                    Budget : {msg.budget}
                  </p>

                </div>

                <div className="mt-5 rounded-lg bg-white/5 p-4">
                  {msg.message}
                </div>

              </div>

            ))}

          </div>
        )}

      </div>

    </div>
  );
};

export default Messages;