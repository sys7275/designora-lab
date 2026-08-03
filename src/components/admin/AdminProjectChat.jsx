import { useEffect, useState } from "react";
import {
  collection,
  query,
  orderBy,
  onSnapshot,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../../firebase/firebase";

const AdminProjectChat = ({ projectId }) => {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    if (!projectId) return;

    const q = query(
      collection(db, "projects", projectId, "messages"),
      orderBy("createdAt", "asc")
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      setMessages(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
      );
    });

    return () => unsubscribe();
  }, [projectId]);

  const sendReply = async () => {
    if (!text.trim()) return;

    await addDoc(
      collection(db, "projects", projectId, "messages"),
      {
        sender: "admin",
        senderEmail: "admin@designoralabs.com",
        message: text,
        createdAt: serverTimestamp(),
      }
    );

    setText("");
  };

  return (
    <div className="rounded-xl bg-white/5 p-6">
      <h2 className="mb-5 text-xl font-bold">Admin Chat</h2>

      <div className="mb-5 h-80 overflow-y-auto rounded-lg bg-black/20 p-4">
        {messages.map((msg) => (
          <div key={msg.id} className="mb-4">
            <strong>{msg.senderEmail}</strong>
            <p>{msg.message}</p>
          </div>
        ))}
      </div>

      <div className="flex gap-3">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Reply..."
          className="flex-1 rounded-lg border border-white/10 bg-black/20 p-3"
        />

        <button
          onClick={sendReply}
          className="rounded-lg bg-violet-600 px-5"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default AdminProjectChat;