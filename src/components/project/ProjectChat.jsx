import { useEffect, useRef, useState } from "react";
import {
  collection,
  addDoc,
  query,
  orderBy,
  onSnapshot,
  serverTimestamp,
} from "firebase/firestore";
import { db, auth } from "../../firebase/firebase";

const ProjectChat = ({ projectId }) => {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");

  const bottomRef = useRef(null);

  useEffect(() => {
    const q = query(
      collection(db, "projects", projectId, "messages"),
      orderBy("createdAt", "asc")
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const list = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setMessages(list);
    });

    return () => unsubscribe();
  }, [projectId]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);

  const sendMessage = async () => {
    if (!text.trim()) return;

    try {
      await addDoc(
        collection(db, "projects", projectId, "messages"),
        {
          sender: auth.currentUser?.uid,
          senderEmail: auth.currentUser?.email,
          message: text,
          createdAt: serverTimestamp(),
        }
      );

      setText("");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-6">

      <h2 className="mb-6 text-2xl font-bold">
        💬 Project Chat
      </h2>

      <div className="h-96 overflow-y-auto rounded-xl bg-black/20 p-4 space-y-2">

        {messages.length === 0 ? (
          <p className="text-gray-400">
            No messages yet.
          </p>
        ) : (
          messages.map((msg) => {
            const mine = msg.sender === auth.currentUser?.uid;

            return (
              <div
                key={msg.id}
                className={`mb-4 flex ${
                  mine ? "justify-end" : "justify-start"
                }`}
              >
               <div
  className={`max-w-[75%] rounded-2xl px-4 py-3 shadow-lg ${
    mine
      ? "bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white rounded-br-sm"
      : "bg-slate-700 text-white rounded-bl-sm"
  }`}
>
                 <p className="text-xs font-semibold opacity-70">
                    {msg.senderEmail}
                  </p>

                  <p className="mt-1">
                    {msg.message}
                  </p>
                  <p className="mt-2 text-right text-[11px] opacity-60">
  {msg.createdAt?.toDate
    ? msg.createdAt.toDate().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      })
    : ""}
</p>
                </div>
              </div>
            );
          })
        )}

        <div ref={bottomRef}></div>

      </div>

      <div className="mt-5 flex gap-3">

        <textarea
          value={text}
          placeholder="Type your message..."
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") sendMessage();
          }}
          className="flex-1 rounded-xl border border-white/10 bg-black/30 px-4 py-3 outline-none focus:border-violet-500"
        />

        <button
          onClick={sendMessage}
          className="rounded-xl bg-violet-600 px-6 py-3 font-semibold hover:bg-violet-700"
        >
         🚀 Send
        </button>

      </div>

    </div>
  );
};

export default ProjectChat;