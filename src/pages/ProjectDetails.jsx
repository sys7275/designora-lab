import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  doc,
  getDoc,
  collection,
  query,
  orderBy,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../firebase/firebase";
import ProjectChat from "../components/project/ProjectChat";


const ProjectDetails = () => {
  const { id } = useParams();

  const [project, setProject] = useState(null);
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch Project
  useEffect(() => {
    const fetchProject = async () => {
      try {
        const docRef = doc(db, "projects", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setProject({
            id: docSnap.id,
            ...docSnap.data(),
          });
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [id]);

  // Fetch Activities
  useEffect(() => {
    const q = query(
      collection(db, "projects", id, "activities"),
      orderBy("createdAt", "desc")
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setActivities(data);
    });

    return () => unsubscribe();
  }, [id]);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#09090B] text-white">
        <h2 className="text-2xl font-semibold">Loading...</h2>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#09090B] text-white">
        <h2 className="text-2xl font-semibold">Project Not Found</h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#09090B] p-10 text-white">

      {/* Title */}
      <h1 className="mb-10 text-4xl font-bold">
        {project.title}
      </h1>

      {/* Info + Progress */}
      <div className="grid gap-6 md:grid-cols-2">

        {/* Project Info */}
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <h3 className="mb-4 text-xl font-bold">
            Project Info
          </h3>

          <p>
            <strong>Category:</strong> {project.category}
          </p>

          <p className="mt-3">
            <strong>Budget:</strong> ₹{project.budget}
          </p>

          <p className="mt-3">
            <strong>Deadline:</strong> {project.deadline}
          </p>
        </div>

        {/* Progress */}
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <h3 className="mb-4 text-xl font-bold">
            Progress
          </h3>

          <p>
            <strong>Status:</strong> {project.status}
          </p>

          <p className="mt-3">
            <strong>Progress:</strong> {project.progress}%
          </p>

          <div className="mt-5 h-3 rounded-full bg-black/40">
            <div
              className="h-3 rounded-full bg-violet-600"
              style={{
                width: `${project.progress}%`,
              }}
            />
          </div>
        </div>

      </div>

      {/* Description */}
      <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-6">

        <h3 className="mb-4 text-xl font-bold">
          Description
        </h3>

        <p className="text-gray-300">
          {project.description}
        </p>

      </div>

      {/* Activity Timeline */}
      <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-6">

        <h3 className="mb-6 text-xl font-bold">
          Activity Timeline
        </h3>

        {activities.length === 0 ? (
          <p className="text-gray-400">
            No activity yet.
          </p>
        ) : (
          <div className="space-y-4">

            {activities.map((activity) => (

              <div
                key={activity.id}
                className="rounded-xl border border-white/10 bg-black/20 p-4"
              >
                <h4 className="font-semibold">
                  {activity.message}
                </h4>

                <p className="mt-2 text-sm text-gray-400">
                  {activity.user || "System"}
                </p>

              </div>

            ))}

          </div>
        )}

      </div>
        {/* Project Chat */}
 <ProjectChat projectId={id} />
    </div>
  );
};

export default ProjectDetails;