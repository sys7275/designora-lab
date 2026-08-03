import { useState } from "react";
import {
  LayoutDashboard,
  FolderOpen,
  Upload,
  MessageSquare,
  CreditCard,
  Settings,
  LogOut,
  PlusCircle,
} from "lucide-react";
import CreateProject from "../components/dashboard/CreateProject";
import DashboardHome from "../dashboard/DashboardHome";
import MyProjects from "../dashboard/MyProjects";
import UploadFiles from "../dashboard/UploadFiles";
import Messages from "../dashboard/Messages";
import Payments from "../dashboard/Payments";
import SettingsPage from "../dashboard/Settings";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <DashboardHome />;
case "create":
  return <CreateProject />;
      case "projects":
        return <MyProjects />;

      case "upload":
        return <UploadFiles />;

      case "messages":
        return <Messages />;

      case "payments":
        return <Payments />;

      case "settings":
        return <SettingsPage />;

      default:
        return <DashboardHome />;
    }
  };

 const menuItems = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: LayoutDashboard,
  },
  {
    id: "create",
    label: "Start Project",
    icon: PlusCircle,
  },
  {
    id: "projects",
    label: "My Projects",
    icon: FolderOpen,
  },
  {
    id: "upload",
    label: "Upload Files",
    icon: Upload,
  },
  {
    id: "messages",
    label: "Messages",
    icon: MessageSquare,
  },
  {
    id: "payments",
    label: "Payments",
    icon: CreditCard,
  },
  {
    id: "settings",
    label: "Settings",
    icon: Settings,
  },
];

  return (
    <div className="min-h-screen bg-[#09090B] pt-20 text-white">
      <div className="mx-auto flex max-w-7xl">

        {/* Sidebar */}

        <aside className="hidden w-72 border-r border-white/10 bg-[#0E0E13] p-6 lg:block">

          <h2 className="mb-8 text-2xl font-bold">
            Client Panel
          </h2>

          <div className="space-y-3">

            {menuItems.map((item) => {
              const Icon = item.icon;

              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 transition-all duration-300 ${
                    activeTab === item.id
                      ? "bg-violet-600 text-white"
                      : "hover:bg-white/10"
                  }`}
                >
                  <Icon size={20} />

                  {item.label}
                </button>
              );
            })}

            <button
              className="mt-5 flex w-full items-center gap-3 rounded-xl px-4 py-3 text-red-400 transition hover:bg-red-500/10"
            >
              <LogOut size={20} />

              Logout
            </button>

          </div>

        </aside>

        {/* Main */}

        <main className="flex-1 p-8">
          {renderContent()}
        </main>

      </div>
    </div>
  );
};

export default Dashboard;