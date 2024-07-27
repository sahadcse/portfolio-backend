import { useEffect, useState } from "react";
import Projects from "../components/works/Projects";
import { BASE_URL } from "../utils/staticData";

const Works = () => {
  const [works, setWorks] = useState([]);
  const [filter, setFilter] = useState("all");

  const fetchWorks = async () => {
    const response = await fetch(`${BASE_URL}/works`);
    const data = await response.json();
    setWorks(data.works);
  };
  useEffect(() => {
    fetchWorks();

    const intervalID = setInterval(fetchWorks, 10000);
    return () => clearInterval(intervalID);
  }, []);

  const handleFilter = (e) => setFilter(e.target.value);
  const filteredWorks = []
    .concat(works)
    .filter((work) => (filter === "all" ? true : work.workType === filter));

  if (works.length === 0) {
    return (
      <div className=" text-2xl text-center mt-20 text-red-800 ">
        Loading...
      </div>
    );
  }

  // make the active-work-list button active by filter value
  const activeWorkList = document.querySelectorAll(".btn-works-nav-list");
  activeWorkList.forEach((btn) => {
    btn.classList.remove("active-work-list");
    if (btn.value === filter) {
      btn.classList.add("active-work-list");
    }
  });

  return (
    <>
      <div className="works">
        <div className="works-content bg-white text-black py-7 px-12 rounded-lg">
          <h1 className="text-2xl uppercase tracking-widest mb-7">
            My Works -
          </h1>

          <div className="works-content-main">
            <div className="works-content-nav-list mb-6">
              <button
                className="all btn-works-nav-list"
                name="all"
                onClick={handleFilter}
                value="all"
              >
                All
              </button>
              <button
                className="full-stack btn-works-nav-list"
                name="fullStack  "
                onClick={handleFilter}
                value="fullStack"
              >
                Full Stack
              </button>
              <button
                className="front-end btn-works-nav-list"
                name="frontend"
                onClick={handleFilter}
                value="frontend"
              >
                Front End
              </button>
              <button
                className="back-end btn-works-nav-list"
                name="backend"
                onClick={handleFilter}
                value="backend"
              >
                Back End
              </button>
              <button
                className="themes btn-works-nav-list"
                name="themes"
                onClick={handleFilter}
                value="themes"
              >
                Themes
              </button>
              <button
                className="others btn-works-nav-list"
                name="Other"
                onClick={handleFilter}
                value="Other"
              >
                Others
              </button>
            </div>

            <div className="w-full grid grid-cols-3 md:grid-cols-1 gap-7 lg:grid-cols-2">
              {filteredWorks.map((work) => (
                <Projects
                  key={work?._id}
                  imageurl={work.workImage}
                  name={work.workTitle}
                  desc={work.workDescription}
                  urlvisit={work.workVisitUrl}
                  urlcode={work.workGithubUrl}
                  alt={`${work.workTitle} Image`}
                />
              ))}
              {filteredWorks.length === 0 && (
                <div className="text-2xl text-red-800">
                  <h3 className="text-center font-mono">No Projects Found</h3>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Works;
