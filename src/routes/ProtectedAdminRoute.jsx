import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { auth, db } from "../firebase/firebase";
import { doc, getDoc } from "firebase/firestore";

const ProtectedAdminRoute = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const checkAdmin = async () => {
      const user = auth.currentUser;

      if (!user) {
        setLoading(false);
        return;
      }

      const adminDoc = await getDoc(
        doc(db, "admin", user.uid)
      );

      setIsAdmin(adminDoc.exists());
      setLoading(false);
    };

    checkAdmin();
  }, []);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center text-white">
        Loading...
      </div>
    );
  }

  if (!isAdmin) {
    return <Navigate to="/dashboard" replace />;
  }

  return children;
};

export default ProtectedAdminRoute;