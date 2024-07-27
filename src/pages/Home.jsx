// import React from 'react'
import {ReactTyped} from "react-typed"
import {useNavigate} from "react-router-dom"

const Home = () => {
  const navigate = useNavigate()
  return (
    <>
      <section className="home flex justify-center items-center h-[80vh] lg:h-fit">
        <div className="home-content text-[#5a00b3]  ">
          <h2 className="md:text-3xl text-4xl  mb-12 text-secondary font-american tracking-widest">Welcome Sir,</h2>
          <h4 className="md:text-4xl text-6xl tracking-wider squada">I can help you establish </h4>
          <p className="md:text-4xl text-6xl squada tracking-wider my-2">your online presence through -</p>
          <ReactTyped
            strings={["Web Application,", "websites,", " and more."]}
            typeSpeed={40}
            backSpeed={50}
            loop
            className=" text-6xl md:text-5xl squada tracking-wider uppercase"
          />
          <p className="my-7 md:text-xl text-2xl opacity-70">Transform Your Online Business into a Digital Powerhouse.</p>
          <button className="text-white bg-[#5a00b3] text-xl py-2 px-6 rounded-md uppercase hover:bg-white hover:text-[#5a00b3] transition-all duration-300 shadow-2xl shadow-green-400" onClick={()=> navigate("/contact")}>Hire Me</button>
        </div>
      </section>
    </>
  )
}

export default Home