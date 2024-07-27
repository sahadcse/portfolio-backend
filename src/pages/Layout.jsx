import { Outlet, useLocation } from "react-router-dom";
import NavMain from "../components/Nav/NavMain";
import ProfileCard from "../components/ProfileCard/ProfileCard";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";

const Layout = () => {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait">
      <section className="flex lg:flex-col p-1 lg:w-full">
        <ProfileCard />
        <div className=" w-3/4 lg:w-full flex flex-col items-center lg:order-first">
          <NavMain />
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x:0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: .8 }}
            className="h-auto w-[95%] xs:mt-24 lg:mb-6 mt-5"
          >
            <Outlet />
          </motion.div>
        </div>
      </section>
    </AnimatePresence>
  );
};

export default Layout;
