import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-purple-200 text-gray-900">
      <h1 className="text-6xl font-extrabold tracking-wide text-purple-700">Welcome to Vybe</h1>
      <p className="mt-4 text-lg text-gray-700 max-w-md text-center">
        Connect, share, and vibe with your community. Join now and be part of the experience!
      </p>
      <button
        onClick={() => navigate("/login")}
        className="mt-6 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white text-lg font-semibold rounded-lg shadow-md transition duration-300"
      >
        Get Started
      </button>
    </div>
  );
};

export default Hero;
