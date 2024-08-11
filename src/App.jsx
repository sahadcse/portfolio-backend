import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Works from "./pages/Works";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/admin/Dashboard";
import DashAbout from "./pages/admin/DashAbout";
import DashContact from "./pages/admin/DashContact";
import SingleContact from "./pages/admin/SingleContact";
import DashResume from "./pages/admin/DashResume";
import DashWorks from "./pages/admin/DashWorks";
import Login from "./pages/admin/Login";
import Register from "./pages/admin/Register";
import PrivateRoute from "./pages/admin/PrivateRoute";
import useRegiser from "./components/admin/RegiserUrl";

const App = () => {
  const register = useRegiser();

  if (register === null) {
    return (
      <div className=" text-2xl text-center mt-20 text-red-800 ">
        Loading...
      </div>
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
          <Route path="resume" element={<Resume />} />
          <Route path="works" element={<Works />} />
          <Route path="*" element={<NotFound />} />
        </Route>

        {/* Protected Routes */}
        <Route path="/dashboard" element={<PrivateRoute />}>
          <Route index element={<Dashboard />} />
          {/* <Route path="home" element={<DashHome />} /> */}
          <Route path="contact" element={<DashContact />} />
          <Route path="contact/:id" element={<SingleContact />} />
          <Route path="about" element={<DashAbout />} />
          <Route path="resume" element={<DashResume />} />
          <Route path="works" element={<DashWorks />} />
        </Route>

        {/* Authentication Routes */}
        <Route path="/login" element={<Login />} />
        <Route
          path="/register"
          element={register ? <Register /> : <Navigate to="/login" />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
