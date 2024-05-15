import useAuth from "../../../hooks/useAuth";

const AdminHome = () => {
    const {user}=useAuth()
  return (
   <div className="w-full m-4">
   <h2 className="text-xl">Welcome back, {user.displayName}</h2>
   </div>
  );
};

export default AdminHome;
