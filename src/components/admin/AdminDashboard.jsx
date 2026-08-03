const AdminDashboard = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold">
        Admin Dashboard
      </h1>

      <p className="mt-2 text-gray-400">
        Manage all Designora Labs projects.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-4">

        <div className="rounded-3xl bg-white/5 p-6">
          <h2 className="text-4xl font-bold">0</h2>
          <p>Total Projects</p>
        </div>

        <div className="rounded-3xl bg-white/5 p-6">
          <h2 className="text-4xl font-bold">0</h2>
          <p>Clients</p>
        </div>

        <div className="rounded-3xl bg-white/5 p-6">
          <h2 className="text-4xl font-bold">0</h2>
          <p>Pending</p>
        </div>

        <div className="rounded-3xl bg-white/5 p-6">
          <h2 className="text-4xl font-bold">0</h2>
          <p>Completed</p>
        </div>

      </div>
    </div>
  );
};

export default AdminDashboard;