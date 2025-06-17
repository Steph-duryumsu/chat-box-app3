import React, { useState} from "react";
import { useNavigate} from "react-router-dom";
import { Link } from "react-router-dom";
import aiImage from '../Images/image1.jpg'; 

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    
    if (email.endsWith("@gmail.com") && password.length >= 6) {
      console.log("Login successful");
      navigate('/chatbox');
    } else {
      alert("Invalid email or password");
    }
  };


  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-900 relative overflow-hidden">

      <div className="absolute top-0 left-0 h-full w-2/5 transform -skew-x-4 overflow-hidden">

        <img
          src={aiImage}
          alt="Decorative"
          className="h-full w-full object-cover opacity-90"
        />
        </div>
       
        {/* <div className="absolute inset-0 bg-black opacity-30" />
        </div> */}

        <div className="relative z-10 w-full max-w-2xl bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl p-10 flex flex-col gap-6">

           <h2 className="text-3xl font-bold center my-8  text-center text-white">Welcome Back 👋</h2>

          {/* <p className="text-sm text-gray-300">Sign in to your account</p> */}

          <form onSubmit={handleLogin}>
            <input type="email"
             placeholder="Enter your email" 
             value={email}   
             className="border p-2 mx-40 rounded w-70 bg-white/20 placeholder-white text-white focus:outline-none"
             onChange={(e) => setEmail(e.target.value)}
              />

            <input type="password"
             placeholder="Enter your password"
             value={password}
             className="border p-2 mx-40 my-6 rounded w-70 bg-white/20 placeholder-white text-white focus:outline-none"
             onChange={(e) => setPassword(e.target.value)}/>

            <button 
              type="submit" 
              className="bg-[#e5e5e5] pt-3 pl-10 pr-10 pb-3 mx-60 rounded-md hover:bg-gray-200 transition font-semibold"
              // onClick={() => navigate('/chatbox')}
              >Login</button>
          </form>

          <p className="text-center my-5"> Don't have an account? {""} <Link to="/signup" className="text-blue-500 hover:underline">Sign up</Link></p>
          {/* <p className="text-blue-500 px-4"><Link to="/signin">Signin</Link></p> */}
        </div>
        
      </div>
    
  )
}

export default Login;