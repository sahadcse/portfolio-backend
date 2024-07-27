import { FaArrowTurnDown } from "react-icons/fa6";
import appdev from "/about/appdev.png";
import webdeg from "/about/ux.png";

const About = () => {
  return (
    <div className="w-[95%] flex flex-col m-auto">
      <div className="flex mb-6 text-2xl text-primary uppercase">
        <h1 className="mr-6">About Myself </h1>
        <FaArrowTurnDown className="mt-2" />
      </div>

      <div className="content-section flex justify-around ">
        <div className="flex justify-between md:flex-col md:w-full">
          <div className="about-me w-[65%] md:w-full shadow-2xl shadow-green-300">
            <p className="text-gray-300 text-justify">
              <p className="bg-gray-700 py-3 px-4 rounded-md">
                <span className="text-2xl text-secondary">Greetings!</span> I am
                <span className=" uppercase"> Sahaduzzaman Solyman</span>, a recent Computer Science and Engineering
                (CSE) graduate with a Diploma in Engineering in Computer
                Technology. I have a strong foundation in core computer science
                subjects such as Data Structures, Algorithms, Database
                Management, Software Engineering, Distributed Systems, Cloud,
                Artificial Intelligence(AI) and more.
                <br />
                <br />
                My hands-on experience with full-stack web development
                technologies, including HTML, CSS, JavaScript, React, Node.js,
                Express, MongoDB, PHP, Laravel, and So On enables me to build dynamic and responsive
                web applications. My academic journey has equipped me with both
                theoretical knowledge and practical skills, making me proficient
                in tackling complex software engineering challenges.
                <br />
                <br />I am passionate about problem-solving and continuously
                updating my skills to stay abreast of the latest technological
                advancements. My strong communication and collaboration
                abilities make me an effective team player, <span className=" italic tracking-wider">ready to contribute
                to innovative projects. I am eager to join a dynamic team</span> where
                I can apply my expertise in software engineering and web
                development to create impactful and scalable solutions.
              </p>
            </p>
          </div>

          <div className="current-working w-[33%] sm:w-full md:mt-8 flex flex-col md:w-full md:mb-7">
            <h3 className=" -mt-2 mb-2 text-xl font-mono uppercase tracking-wider text-primary text-start md:text-center">
              Working Area
            </h3>
            <div className="md:grid md:grid-cols-2 md:w-full md:place-items-center md:min-h-full sm:grid-cols-1">
              <div className="web-dev w-2/3 bg-gray-700 py-3 px-4 rounded-md mb-5 shadow-2xl shadow-green-300 sm:w-[80%]">
                <h4>App Development</h4>
                <img src={appdev} alt="" className="w-24 m-auto" />
                <p className="text-gray-300 text-justify  text-[0.76rem]">
                  Web development is the process of creating websites and
                  applications for users.
                </p>
              </div>
              <div className="web-dev w-2/3 bg-gray-700 py-3 px-4 rounded-md shadow-2xl shadow-green-300 sm:w-[80%]">
                <h4>Website Build & Fixing</h4>
                <img src={webdeg} alt="" className="w-24 m-auto" />
                <p className="text-gray-300 text-[0.76rem] text-justify">
                  I specialize in building and fixing websites to ensure optimal
                  performance, user experience, and functionality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
