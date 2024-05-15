import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const AdminHome = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: stats = {} } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/admin-stats");
      return res.data;
    },
  });
  console.log(stats);
  return (
    <div className="w-full m-4">
      <h2 className="text-xl">Welcome back, {user.displayName}</h2>
      <div className="stats shadow text-center">
        <div className="stat">
          <div className="stat-value">${stats.revenue}</div>
          <div className="text-3xl">Revenue</div>
        </div>

        <div className="stat">
          <div className="stat-value">{stats.user}</div>
          <div className="text-3xl">Customers</div>
        </div>

        <div className="stat">
          <div className="stat-value">{stats.products}</div>
          <div className="text-3xl">Products</div>
        </div>
        <div className="stat">
          <div className="stat-value">{stats.orders}</div>
          <div className="text-3xl">Orders</div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
