import { useState } from "react";
import axiosInstance from "./axiosInstances";
import RegiserUrl from "../../components/admin/RegiserUrl";
const Register = () => {
  const [admin, setAdmin] = useState({});

  const token = localStorage.getItem("token");

  if (token) {
    window.location.href = "/dashboard";
  }

  const dataInput = (e) => {
    const { name, value } = e.target;
    setAdmin({
      ...admin,
      [name]: value,
    });
  };
  // console.log(admin)

  const handleSUbmit = async (e) => {
  const activeRegister = RegiserUrl();
    try {
      if (activeRegister === true) {
        e.preventDefault();
        if (!admin.adminName || !admin.adminEmail || !admin.adminPassword) {
          return alert("Please fill all the fields");
        }

        console.log("Active Register REGISTER: ", activeRegister);

        const response = await axiosInstance.post("/register", admin);
        console.log(response);
        if (response.data.accessToken) {
          localStorage.setItem("token", response.data.accessToken);
          window.location.href = "/dashboard";
        }
      } else {
        return (window.location.href = "/login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="">
      <div className="login-page w-fit m-auto p-2">
        <h1 className="text-2xl mb-5">Register</h1>
        <form onSubmit={handleSUbmit} className="text-black">
          <input
            type="text"
            placeholder="Full Namin"
            onChange={dataInput}
            name="adminName"
            className="mb-2 px-2 py-1 rounded-sm outline-none"
          />
          <br />
          <input
            type="text"
            placeholder="email"
            onChange={dataInput}
            name="adminEmail"
            className="mb-2 px-2 py-1 rounded-sm outline-none"
          />
          <br />
          <input
            type="password"
            placeholder="password"
            onChange={dataInput}
            name="adminPassword"
            className="mb-4 block px-2 py-1 rounded-sm outline-none"
          />

          <button type="submit" className="border py-2 px-6 rounded-sm">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
