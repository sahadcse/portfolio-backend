import { useEffect, useState } from "react";
import axiosInstance from "./axiosInstances";
import { BASE_URL } from "../../utils/staticData";


const WORK_FIELDS = {
  workType: "",
  workTitle: "",
  workDescription: "",
  workImage: "",
  workVisitUrl: "",
  workGithubUrl: "",
};

const DashWorks = () => {
  const [work, setWork] = useState({ ...WORK_FIELDS });
  const [works, setWorks] = useState([]);
  const [error, setError] = useState("");

  const dataInput = (e) => {
    setWork({
      ...work,
      [e.target.name]: e.target.value,
    });
  };

  const getWorks = async () => {
    try {
      const response = await fetch(`${BASE_URL}/works`);
      const data = await response.json();
      console.log("Works: ", data.works);
      setWorks(data.works);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await axiosInstance.delete(`/works/${id}`);
      if (response.data.error === false) {
        console.log("Work Deleted Successfully");
        setWorks(works.filter((work) => work._id !== id));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      work.workType === "" ||
      work.workTitle === "" ||
      work.workDescription === "" ||
      work.workImage === "" ||
      work.workVisitUrl === "" ||
      work.workGithubUrl === ""
    ) {
      setError("Please Fill All Fields Properly");
      return;
    } else {
      setError("");
    }

    try {
      const response = await axiosInstance.post("/works", work);
      console.log("WOrks: ", response);
      if (response.data.error === false) {
        console.log("Work Created Successfully");
        getWorks();
      }
      setWork({ ...WORK_FIELDS });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getWorks();
  }, []);

  return (
    <>
      <h2 className="mb-2 uppercase text-xl text-primary">Add Project</h2>
      <form className="flex gap-5 flex-wrap justify-center  text-black mb-5 lg:grid">
        {/* <input type="text" placeholder="Project Type" onChange={dataInput}  className="dashboard-work-input"/> */}
        <select
          name="workType"
          onChange={dataInput}
          className="dashboard-work-input"
        >
          <option value="" name="">
            Select Type
          </option>
          <option value="web" name="web">
            Web
          </option>
          <option value="mobile" name="mobile">
            Mobile
          </option>
          <option value="desktop" name="desktop">
            Desktop
          </option>
          <option value="fullStack" name="fullStack">
            Full Stack
          </option>
          <option value="frontend" name="frontend">
            Frontend
          </option>
          <option value="backend" name="backend">
            Backend
          </option>
          <option value="themes" name="themes">
            Themes
          </option>
          <option value="Other" name="Other">
            Other
          </option>
        </select>
        <input
          type="text"
          name="workTitle"
          placeholder="Project Title"
          onChange={dataInput}
          className="dashboard-work-input"
          value={work.workTitle}
        />
        <input
          type="text"
          name="workDescription"
          placeholder="Project Description"
          onChange={dataInput}
          className="dashboard-work-input"
          value={work.workDescription}
        />
        <input
          type="text"
          name="workImage"
          placeholder="Project Image"
          onChange={dataInput}
          className="dashboard-work-input"
          value={work.workImage}
        />
        <input
          type="text"
          name="workVisitUrl"
          placeholder="Project Visit Url"
          onChange={dataInput}
          className="dashboard-work-input"
          value={work.workVisitUrl}
        />
        <input
          type="text"
          name="workGithubUrl"
          placeholder="Project Github Url"
          onChange={dataInput}
          className="dashboard-work-input"
          value={work.workGithubUrl}
        />
        <button onClick={handleSubmit} className="dashboard-work-btn">
          Submit
        </button>
      </form>
      {error && <p className="bg-red-500 mb-4 py-1 px-2 rounded-md">{error}</p>}

      <div className="relative overflow-x-auto lg:w-full">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 overflow-x-auto">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Project Type
              </th>
              <th scope="col" className="px-6 py-3">
                Project Title
              </th>
              <th scope="col" className="px-6 py-3">
                Project Description
              </th>
              <th scope="col" className="px-6 py-3">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {works.map((work) => (
              <tr
                key={work._id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white uppercase"
                >
                  {work.workType}
                </th>
                <td className="px-6 py-4">{work.workTitle}</td>
                <td className="px-6 py-4">{work.workDescription}</td>
                <td className="px-6 py-4">
                  <button
                    className="bg-red-500 text-white px-4 py-1 rounded-md"
                    onClick={() => handleDelete(work._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default DashWorks;
