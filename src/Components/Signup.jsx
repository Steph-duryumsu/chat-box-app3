import React, {useState} from "react";
import { useNavigate} from "react-router-dom";
import { Link } from "react-router-dom";
import aiImage from '../Images/image1.jpg'; 


const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullname, setFullName] = useState("");
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
      
      <div className="relative z-10 w-full max-w-2xl bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl p-10 flex flex-col gap-6">
        <form onSubmit={handleLogin}>

          <h2 className="text-3xl bold center my-8 font-bold text-center text-white ">Hi user, 😊 </h2>

          <input type="text"
         placeholder="Enter your full name"
         className="w-70 border p-2 mx-40 rounded  bg-white/20 placeholder-white text-white focus:outline-none"
         value={fullname}
         onChange={(e) => setFullName(e.target.value)}
         />

        <input type="email"
         placeholder="Enter your email" 
         className="border my-5 w-70 p-2 mx-40 rounded bg-white/20 placeholder-white text-white focus:outline-none"
         value={email}
         onChange={(e) => setEmail(e.target.value)}/>

        <input type="password"
         placeholder="Enter your password"
         className="border p-2 mx-40 rounded w-70 bg-white/20 placeholder-white text-white focus:outline-none"
         value={password}
         onChange={(e) => setPassword(e.target.value)}
         />
        <input/>

        <button className="bg-[#e5e5e5] pt-3 pl-10 pr-10 pb-3 mx-60 rounded-md hover:bg-gray-200 transition font-semibold" >SignUP</button>
        <p className="text-center my-5" >Already have an account? <Link to="/" className="text-blue-500">Login</Link></p>
        </form>
        
      </div>
   </div>
  );
};

export default Signup;
