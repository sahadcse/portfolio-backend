// import React from "react";
import {
  FaArrowTurnDown,
  FaHtml5,
  FaCss3,
  FaBootstrap,
  FaSquareJs,
  FaReact,
  FaNode,
  FaPhp,
  FaLaravel,
  FaVuejs,
  FaNpm,
  FaSquareGit,
  FaGithub,
  FaDocker,
  FaAws,
  FaDigitalOcean,
  FaPython
} from "react-icons/fa6";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import { TbBrandCpp } from "react-icons/tb";
import {
  SiFramer,
  SiNestjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiMongoose,
  SiRedis,
  SiCircleci,
  SiHeroku,
  SiPuppeteer,
  SiWebpack,
  SiPostman,
} from "react-icons/si";

const Resume = () => {
  return (
    <section className="resume w-full">
      <div className="resume-div flex w-full  lg:flex-col">
        <div className="resume-left bg-gray-600 py-3 px-4 rounded-lg mr-5 lg:mr-0 lg:mb-4 h-full sticky top-0 lg:relative">
          <p className="mb-5 text-justify">
            <span className="text-secondary font-bold">
              Although I&apos;m a fresher,
            </span>{" "}
            I bring a unique blend of cleverness and intelligence to build the
            features and solutions you need. With a solid foundation in web
            technologies and a knack for solving complex problems, I am
            dedicated to delivering innovative and efficient results. Let&apos;s
            create something exceptional together.
          </p>

          <div className="skill-sec">
            <div className="skill-heading text-2xl text-green-500 flex">
              <h3 className="mr-4">Tech I Use</h3>
              <FaArrowTurnDown />
            </div>

            <div className="skill-content text-gray-200">
              <div className="skill-front bg-slate-700 px-5 py-4 rounded-lg my-3">
                <p className="mb-3 italic">
                  These include, but are not limited to, the technologies I use
                  for building{" "}
                  <span className="text-secondary">
                    client-side applications
                  </span>{" "}
                  -
                </p>

                <div className=" logos text-5xl flex flex-wrap gap-4 text-gray-300 justify-around">
                  <FaHtml5 title="HTML 5" className="resume-skill " />
                  <FaCss3 title="CSS 3" className="resume-skill" />
                  <RiTailwindCssFill
                    title="Tailwind CSS"
                    className="resume-skill"
                  />
                  <FaBootstrap title="BootStrap" className="resume-skill" />
                  <FaSquareJs title="JavaScript" className="resume-skill" />
                  <FaReact title="React" className="resume-skill" />
                  <RiNextjsFill title="NextJS" className="resume-skill" />
                  <SiFramer title="Framer Motion" className="resume-skill" />
                  <FaVuejs title="Vuejs" className="resume-skill" />
                </div>
              </div>

              <div className="skill-back bg-slate-700 px-5 py-4 rounded-lg my-3">
                <p className="mb-3 italic">
                  These include, but are not limited to, the techn. i use for
                  building fast and scalable{" "}
                  <span className="text-secondary">backend applications</span> -
                </p>

                <div className=" logos text-5xl flex flex-wrap gap-4 text-gray-300 justify-around">
                  <FaNode title="NodeJS" className="resume-skill" />
                  <SiNestjs title="Nestjs" className="resume-skill" />
                  <SiExpress title="Express" className="resume-skill" />
                  <SiMongodb title="MOngoDB" className="resume-skill" />
                  <SiMysql title="My SQL" className="resume-skill" />
                  <SiPostgresql title="Postgre Sql" className="resume-skill" />
                  <SiMongoose title="Mongoose" className="resume-skill" />
                  <FaPhp title="PHP" className="resume-skill" />
                  <FaLaravel title="Laravel" className="resume-skill" />
                  <TbBrandCpp title="CPP" className="resume-skill" />
                  <FaPython title="Python" className="resume-skill" />
                </div>
              </div>

              <div className="skill-tools bg-slate-700 px-5 py-4 rounded-lg my-3">
                <p className="mb-3 italic">
                  Others...and <span className="text-secondary">more!</span> -
                </p>

                <div className=" logos text-5xl flex flex-wrap gap-4 text-gray-300 justify-around">
                  <FaNpm title="Npm" className="resume-skill" />
                  <FaSquareGit title="Git" className="resume-skill" />
                  <FaGithub title="Github" className="resume-skill" />
                  <SiRedis title="Redis" className="resume-skill" />
                  <FaDocker title="Docker" className="resume-skill" />
                  <FaAws title="AWS" className="resume-skill" />
                  <SiCircleci title="Circleci" className="resume-skill" />
                  <SiHeroku title="HeroKu" className="resume-skill" />
                  <FaDigitalOcean
                    title="Digital Ocean"
                    className="resume-skill"
                  />
                  <SiPuppeteer title="Puppeteer" className="resume-skill" />
                  <SiWebpack title="Webpack" className="resume-skill" />
                  <SiPostman title="Postman" className="resume-skill" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="resume-right bg-gray-600 rounded-lg py-3
        px-4 h-full sticky top-0 -z-10">
          <h3 className="edQu">Educational Qualifications</h3>
          <div className="schools ">
            <div className="bsc schoolSec">
              <h3 className="schoolSub">B.Sc. in Computer Science & Engineering</h3>
              <p className="mb-2 text-[.90rem] text-gray-300">Dhaka Internation University</p>
              <p className="schoolYR">Year: 2020 - 2024</p>
              <p className="schoolDesc">
                I learn the core concepts of CSE and completed 148 credits with
                good grades.
              </p>
            </div>
            <div className="diploma schoolSec my-3">
              <h3 className="schoolSub">Diploma Engineering in Computer Technology</h3>
              <p className="mb-2 text-[.90rem] text-gray-200">Khulna Govt. Polytechnic Institute</p>
              <p className="schoolYR">Year: 2015 - 2019</p>
              <p className="schoolDesc">
                I grasped the fundamental concepts of Computer Technology and
                successfully completed a four-year diploma with excellent
                grades.
              </p>
            </div>
            <div className="secondary schoolSec">
              <h3 className="schoolSub">Secondary Level in Science</h3>
              <p className="mb-2 text-[.90rem] text-gray-200">Choubaria Secondary School</p>
              <p className="schoolYR">Year: 2010 - 2015</p>
              <p className="schoolDesc">
                I acquired a solid understanding of Science and completed my SSC
                with excellent grades.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
