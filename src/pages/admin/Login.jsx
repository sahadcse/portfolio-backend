import axiosInstance from "./axiosInstances";
import { useState } from "react";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const token = localStorage.getItem("token");

  if (token) {
    window.location.href = "/dashboard";
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      return alert("Please fill all the fields");
    }

    try {
      const response = await axiosInstance.post("/login", {
        email,
        password,
      });
      if (response.data.accessToken) {
        localStorage.setItem("token", response.data.accessToken);
        window.location.href = "/dashboard";
      }
    } catch (error) {
        setError(true);
      if (error.response.status === 401) {
        alert("Wrong email or password");
      }
    }
  };

  return (
    <div className="">
      <div className="login-page w-fit m-auto p-2">
        <h1 className="text-2xl mb-5">Login</h1>
        <form onSubmit={handleSubmit} className="text-black">
          <input
            type="text"
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
            className="mb-2 px-2 py-1 rounded-sm outline-none"
          />
          <input
            type="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
            className="mb-4 block px-2 py-1 rounded-sm outline-none"
          />

          <button type="submit" className="border py-2 px-6 rounded-sm">
            Login
          </button>

            {error && <p className="text-red-500">Wrong email or password</p>}
        </form>
      </div>
    </div>
  );
};

export default Login;
