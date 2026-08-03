import { useEffect, useState } from "react";

import { db } from "../../firebase/firebase";

import {
  collection,
  onSnapshot,
  doc,
  updateDoc,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";

const ProjectsTable = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, "projects"),
      (snapshot) => {
        const list = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setProjects(list);
      }
    );

    return () => unsubscribe();
  }, []);

  return (
    <div>

      <h1 className="text-4xl font-bold">
        All Projects
      </h1>

      <div className="mt-8 overflow-x-auto rounded-2xl border border-white/10">

        <table className="w-full">

          <thead className="bg-white/10">

            <tr>

              <th className="p-4 text-left">Project</th>

              <th className="p-4 text-left">Client</th>

              <th className="p-4 text-left">Status</th>

              <th className="p-4 text-left">Progress</th>

            </tr>

          </thead>

          <tbody>

            {projects.map((project) => (

              <tr
                key={project.id}
                className="border-t border-white/10"
              >

                <td className="p-4">
                  {project.title}
                </td>

                <td className="p-4">
                  {project.clientEmail}
                </td>

               <td className="p-4">
  <select
    defaultValue={project.status}
    onChange={(e) =>
      (project.status = e.target.value)
    }
    className="rounded-lg bg-[#1E1E25] px-3 py-2"
  >
    <option>Pending</option>
    <option>In Progress</option>
    <option>Review</option>
    <option>Completed</option>
  </select>
</td>

             <td className="p-4">
  <input
    type="number"
    min="0"
    max="100"
    defaultValue={project.progress}
    onChange={(e) =>
      (project.progress = Number(e.target.value))
    }
    className="w-20 rounded-lg bg-[#1E1E25] px-3 py-2"
  />
</td>
<th className="p-4">
  Action
</th>
<td className="p-4">

<button
className="rounded-lg bg-violet-600 px-5 py-2"
onClick={async () => {
  try {
    // Purane values
    const oldProject = projects.find((p) => p.id === project.id);

    // Project update
    await updateDoc(doc(db, "projects", project.id), {
      status: project.status,
      progress: project.progress,
    });

    // Status change activity
    if (oldProject.status !== project.status) {
      await addDoc(
        collection(db, "projects", project.id, "activities"),
        {
          type: "STATUS",
          message: `Status changed: ${oldProject.status} → ${project.status}`,
          user: "Admin",
          createdAt: serverTimestamp(),
        }
      );
    }

    // Progress change activity
    if (oldProject.progress !== project.progress) {
      await addDoc(
        collection(db, "projects", project.id, "activities"),
        {
          type: "PROGRESS",
          message: `Progress updated: ${oldProject.progress}% → ${project.progress}%`,
          user: "Admin",
          createdAt: serverTimestamp(),
        }
      );
    }

    alert("Project Updated Successfully!");
  } catch (error) {
    console.error(error);
    alert("Failed to update project.");
  }
}}
>

Save

</button>

</td>
              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
};

export default ProjectsTable;