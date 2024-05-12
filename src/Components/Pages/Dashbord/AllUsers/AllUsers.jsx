import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import toast, { Toaster } from "react-hot-toast";
import { FaTrashAlt, FaUserShield } from "react-icons/fa";

const AllUsers = () => {
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/users");
      return res.json();
    },
  });

  const notify = () => toast.success("Successfully Added New Admin!");
  const notifyDelete = () => toast.error("User Successfully Deleted.");

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/users/${id}`, {
      method: "delete",
    })
      .then((res) => res.json())
      .then((data) => {
        refetch();
        if (data.deletedCount) {
          notifyDelete();
        }
      });
  };
  const hadnleMakeAdmin = (id) => {
    fetch(`http://localhost:5000/users/admin/${id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        refetch();
        if (data.modifiedCount > 0) {
          notify();
        }
      });
  };
  return (
    <div>
      <Helmet>
        <title>Bistro Boss| All Users</title>
      </Helmet>

      <div className="uppercase font-bold     items-center">
        <h2>Total Users: {users.length}</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead className="bg-[#D1A054] text-white  ">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Eamil</th>
              <th>Role </th>
              <th>Action </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  {user.role === "admin" ? (
                    "admin"
                  ) : (
                    <button
                      onClick={() => {
                        hadnleMakeAdmin(user._id);
                      }}
                      className="btn bg-orange-700"
                    >
                      <FaUserShield />
                    </button>
                  )}
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(user._id)}
                    className="btn bg-red-700 text-white"
                  >
                    <FaTrashAlt></FaTrashAlt>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Toaster />
    </div>
  );
};

export default AllUsers;
