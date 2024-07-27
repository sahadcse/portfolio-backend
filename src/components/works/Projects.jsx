import { Link } from "react-router-dom";
const Projects = ({imageurl, name, desc, urlvisit, urlcode, alt}) => {
  return (
    <div className="flex flex-col items-center py-5 mb-3 bg-gray-800 rounded-md px-2">
      <img
        className="w-24 h-24 mb-3 rounded-full shadow-lg"
        src={imageurl || "https://picsum.photos/200"}
        alt={alt}
      />
      <h5 className="mb-1 text-xl font-medium dark:text-white text-white">
        {name}
      </h5>
      <span className="text-sm text-gray-500 dark:text-gray-400">
        {desc}
      </span>
      <div className="flex mt-4 md:mt-6">
        <Link to={urlvisit} className="works-card-visit" target={'_blank'}>
          VISIT
        </Link>
        <Link to={urlcode} className="works-card-code" target={'_blank'}>
          CODE
        </Link>
      </div>
    </div>
  );
};

export default Projects;
