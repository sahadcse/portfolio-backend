import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
    const navigate = useNavigate()

    useEffect(()=>{
        const timer = setTimeout(()=>{
            navigate("/")
        }, 3000)
        return () => clearTimeout(timer)
    }, [navigate])
    
  return (
    <div className="flex flex-col items-center justify-center h-full text-center text-white">
      <div className="bg-gray-600 py-5 px-3 rounded-lg">
      <p className="text-xl"><span className="text-red-700 font-bold">404!</span> Page Not Found</p>
      <p className="mt-2 text-gray-300">The page you are looking for does not exist, Redirecting...</p>
      </div>
    </div>
  );
};

export default NotFound;
