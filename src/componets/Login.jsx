import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import {toast} from "react-hot-toast";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
const [isLoading, setIsLoading] = useState(false)
const navigate = useNavigate()

  const handleLogin = async(e) => {

    e.preventDefault();
    const loadingToast = toast.loading("logging in...")
    setIsLoading(true)
    try{
      await signInWithEmailAndPassword(auth, email, password)
      toast.success("Log in success!", {id:loadingToast})
      navigate("/hero")
  

    }catch(e){
      console.log(e)
    }
    
    setIsLoading(false);
    
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-900 to-black">
      <h1 className='absolute top-2 left-2 text-emerald-400 text-5xl font-extrabold font-["times"]'>vybe</h1>
      
      <div className=" px-4 py-8 border-2 border-cyan-400 shadow-purple-500 rounded-md  shadow-lg w-96 text-white">
        <h2 className="text-2xl font-bold text-center mb-6">Welcome Back</h2>
        <div>
          <div className="mb-4">
            <label className="block text-md font-bold mb-1">Email</label>
            <input
              type="email"
              value={email}
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
              className="w-full outline-0 px-4 py-2 rounded-lg text-white border-2 autofill:bg-black autofill:text-white shadow-sm focus:shadow-md focus:shadow-emerald-400 focus:border-cyan-300  border-cyan-700 "
              required
            />
          </div>
          <div className="mb-4">
            <label className="block font-bold text-sm mb-1">Password</label>
            <input
              type="password"
              value={password}
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
              className="w-full outline-0 px-4 py-2 rounded-lg text-white border-2  focus:shadow-md focus:shadow-emerald-400 focus:border-cyan-300  border-cyan-700"
              required
            />
          </div>
          <button
            onClick={handleLogin}
            disabled={isLoading}
            
            className="w-full py-2 bg-purple-600 hover:shadow-emerald-400 shadow-md rounded-md font-bold transition"
          >
          {
            isLoading? "logging in...": "Log in"
          }
          </button>
        </div>
        <p className="text-center font-semibold text-sm mt-4">
          Don't have an account? <span onClick={()=>navigate("/signup")} className="text-emerald-500 cursor-pointer hover:text-purple-500 ">Sign up</span>

        </p>
        
      </div>
    </div>
  );
};

export default Login;
