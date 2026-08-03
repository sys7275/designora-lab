import { useNavigate } from "react-router-dom";
import {
  Clock,
  CheckCircle2,
  LoaderCircle,
  TrendingUp,
  ArrowUpRight,
} from "lucide-react";

const DashboardHome = () => {
  const navigate = useNavigate();

  return (
    <div>

      {/* Heading */}

      <div className="flex items-center justify-between">

        <div>

          <h1 className="text-4xl font-bold text-white">
            Welcome Back 👋
          </h1>

          <p className="mt-2 text-gray-400">
            Manage all your design projects from one place.
          </p>

        </div>

        <button
          onClick={() => navigate("/contact")}
          className="rounded-xl bg-violet-600 px-5 py-3 font-semibold hover:bg-violet-700 transition"
        >
          + New Project
        </button>

      </div>

      {/* Stats */}

      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <Clock className="mb-4 text-yellow-400" size={32} />
          <h2 className="text-4xl font-bold">3</h2>
          <p className="mt-2 text-gray-400">
            Active Projects
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <LoaderCircle className="mb-4 text-blue-400" size={32} />
          <h2 className="text-4xl font-bold">2</h2>
          <p className="mt-2 text-gray-400">
            Pending Revisions
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <CheckCircle2 className="mb-4 text-green-400" size={32} />
          <h2 className="text-4xl font-bold">14</h2>
          <p className="mt-2 text-gray-400">
            Completed Projects
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <TrendingUp className="mb-4 text-violet-400" size={32} />
          <h2 className="text-4xl font-bold">
            ₹50K
          </h2>
          <p className="mt-2 text-gray-400">
            Total Spending
          </p>
        </div>

      </div>

      {/* Recent Activity */}

      <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-8">

        <div className="mb-8 flex items-center justify-between">

          <h2 className="text-2xl font-bold">
            Recent Activity
          </h2>

          <button className="text-violet-400 hover:text-violet-300">
            View All
          </button>

        </div>

        <div className="space-y-5">

          <div className="flex items-center justify-between rounded-2xl bg-black/30 p-5">

            <div>

              <h3 className="text-lg font-semibold">
                Restaurant Logo Design
              </h3>

              <p className="mt-1 text-gray-400">
                In Progress
              </p>

            </div>

            <span className="rounded-full bg-yellow-500/20 px-4 py-2 text-yellow-400">
              75%
            </span>

          </div>

          <div className="flex items-center justify-between rounded-2xl bg-black/30 p-5">

            <div>

              <h3 className="text-lg font-semibold">
                Business Card Design
              </h3>

              <p className="mt-1 text-gray-400">
                Completed
              </p>

            </div>

            <span className="rounded-full bg-green-500/20 px-4 py-2 text-green-400">
              Delivered
            </span>

          </div>

          <div className="flex items-center justify-between rounded-2xl bg-black/30 p-5">

            <div>

              <h3 className="text-lg font-semibold">
                Social Media Kit
              </h3>

              <p className="mt-1 text-gray-400">
                Waiting for Approval
              </p>

            </div>

            <button className="flex items-center gap-2 rounded-xl bg-violet-600 px-5 py-2 hover:bg-violet-700">
              Open
              <ArrowUpRight size={18} />
            </button>

          </div>

        </div>

      </div>

    </div>
  );
};

export default DashboardHome;