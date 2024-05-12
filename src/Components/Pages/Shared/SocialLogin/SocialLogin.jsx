import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { AuthContext } from "../../../Providers/AuthProviders";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { googleSignin } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const handleGoogleLogin = () => {
    googleSignin()
      .then((result) => {
        const user = result.user;
        console.log(user);
        const savedUser={name:user.displayName,email:user.email}
        fetch('http://localhost:5000/users',{
          method:'POST',
          headers:{
            'content-type':'application/json'
          },
          body:JSON.stringify(savedUser)
        })
        .then(res=>res.json())
        .then(()=>{
navigate(from,{replace:true})
        })
       
      })
      .catch((erorr) => console.log(erorr.message));
  };
  return (
    <div>
      <div className="divider"></div>
      <div className="w-ful text-center">
        <button
          onClick={handleGoogleLogin}
          className="btn text-white m-3 btn-circle"
        >
          <FaGoogle></FaGoogle>
        </button>
        <button className="btn text-white m-3 btn-circle">
          <FiGithub></FiGithub>
        </button>
        <button className="btn text-white m-3 btn-circle">
          <FaGoogle></FaGoogle>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
