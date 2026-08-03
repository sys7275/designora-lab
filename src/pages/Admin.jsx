import { useState } from "react";
import {
  LayoutDashboard,
  FolderOpen,
  Users,
  MessageSquare,
  Settings,
} from "lucide-react";

import AdminDashboard from "../components/admin/AdminDashboard";
import ProjectsTable from "../components/admin/ProjectsTable";
import Clients from "../components/admin/Clients";
import Messages from "../components/admin/Messages";
import SettingsPage from "../components/admin/Settings";

const Admin = () => {
  
   const [activeTab, setActiveTab] = useState("dashboard");

  const menu = [
    {
      id: "dashboard",
      label: "Dashboard",
      icon: LayoutDashboard,
    },
    {
      id: "projects",
      label: "Projects",
      icon: FolderOpen,
    },
    {
      id: "clients",
      label: "Clients",
      icon: Users,
    },
    {
      id: "messages",
      label: "Messages",
      icon: MessageSquare,
    },
    {
      id: "settings",
      label: "Settings",
      icon: Settings,
    },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <AdminDashboard />;

      case "projects":
        return <ProjectsTable />;

      case "clients":
        return <Clients />;

      case "messages":
        return <Messages />;

      case "settings":
        return <SettingsPage />;

      default:
        return <AdminDashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-[#09090B] text-white pt-20">
      <div className="mx-auto flex max-w-7xl">

        <aside className="hidden w-72 border-r border-white/10 bg-[#0E0E13] p-6 lg:block">

          <h2 className="mb-8 text-2xl font-bold">
            Admin Panel
          </h2>

          <div className="space-y-3">

            {menu.map((item) => {
              const Icon = item.icon;

              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 transition ${
                    activeTab === item.id
                      ? "bg-violet-600"
                      : "hover:bg-white/10"
                  }`}
                >
                  <Icon size={20} />
                  {item.label}
                </button>
              );
            })}

          </div>

        </aside>

        <main className="flex-1 p-8">
          {renderContent()}
        </main>

      </div>
    </div>
  );
};

export default Admin;