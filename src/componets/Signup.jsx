import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, provider } from "../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithPopup } from "firebase/auth";
import { SiGoogle } from "react-icons/si";
import Cookies from "universal-cookie";

import { toast } from "react-hot-toast";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate();
  const cookies = new Cookies();
  const [loadingStatus, setLoadingStatus] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    const loadingToast = toast.loading("just a moment...");
    username = {username}; 
    try {
      setLoadingStatus("signupWithEmail");
      await createUserWithEmailAndPassword(auth, email, password);
      const succesToast = toast.success("Sign up success!", {
        id: loadingToast,
        duration: 1000,
      });
      setTimeout(() => {
        toast.success(`Welcome ${username}`, { id: succesToast });
      }, 2000);
      navigate("/hero");
    } catch (e) {
      console.log(e);
    }
    setLoadingStatus(null);
  };
  const googleSignUp = async () => {
    const loadingToast = toast.loading("signing in...");
    setLoadingStatus("googleSignup");
    try {
      const result = await signInWithPopup(auth, provider);
      navigate("/hero");
      cookies.set("auth-token", result.user.refreshToken);
    } catch (e) {
      console.log(e);
    }
    setLoadingStatus(null);
    toast.success("Signed in successfully!", { id: loadingToast });
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-900 to-black px-4">
      <h1 className='opacity-0 md:opacity-100  absolute top-2 left-2 text-emerald-400 text-4xl sm:text-5xl font-extrabold font-["times"]'>
        vybe
      </h1>

      <div className="px-4 py-6 border-2 border-cyan-400 shadow-purple-500 rounded-md shadow-lg max-w-sm w-full text-white">
        <h2 className=" text-2xl font-bold text-center mb-6">
          Create an Account
        </h2>
        <div>
          <div className="mb-3">
            <label className="block text-md font-bold mb-1">Username</label>
            <input
              type="text"
              placeholder="Enter your username"
              onChange={(e) => setUsername(e.target.value)}
              className="w-full outline-0 px-4 py-2 rounded-lg text-white border-2 autofill:bg-black autofill:text-white shadow-sm focus:shadow-md focus:shadow-emerald-400 focus:border-cyan-300 border-cyan-700"
              required
            />
          </div>
          <div className="mb-3">
            <label className="block text-md font-bold mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
              className="w-full outline-0 px-4 py-2 rounded-lg text-white border-2 shadow-sm focus:shadow-md focus:shadow-emerald-400 focus:border-cyan-300 border-cyan-700"
              required
            />
          </div>
          <div className="mb-3">
            <label className="block font-bold text-md mb-1">Password</label>
            <input
              type="password"
              placeholder="Create a password"
              onChange={(e) => setPassword(e.target.value)}
              className="w-full outline-0 px-4 py-2 rounded-lg text-white border-2 focus:shadow-md focus:shadow-emerald-400 focus:border-cyan-300 border-cyan-700"
              required
            />
          </div>
          <button
            onClick={handleLogin}
            disabled={loadingStatus === "signupWithEmail"}
            className="w-full py-2 bg-purple-600 hover:shadow-emerald-400 shadow-md rounded-md font-bold transition"
          >
            {loadingStatus === "signupWithEmail" ? "Signing up..." : "Sign Up"}
          </button>
        </div>
        <p className="text-center font-semibold text-sm mt-4">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/")}
            className="text-emerald-500 cursor-pointer hover:text-purple-500"
          >
            Log in
          </span>
        </p>
        <h1 className="flex justify-center font-bold mt-2 mb-2 text-emerald-600">
          OR
        </h1>
        <div className="mb-4 ">
          <button
            disabled={loadingStatus === "googleSignup"}
            onClick={googleSignUp}
            className="w-full flex justify-center gap-4 outline-0 px-4 py-2 rounded-lg text-white border-2 shadow-sm hover:shadow-md hover:shadow-emerald-400 font-semibold hover:border-cyan-300 border-purple-600"
          >
            <SiGoogle size={20} className="text-purple-300" />
            {loadingStatus === "googleSignup"
              ? "Logging in..."
              : "Log in with google"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
