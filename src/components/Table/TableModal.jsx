const TableModal = ({ handleModal, singleData }) => {
  return (
    <div className=" z-50 w-fit m-auto h-full bg-slate-500 bg-opacity-50 overflow-y-auto mb-10 rounded-lg">
      <div className="relative w-fit h-fit bg-white rounded-lg shadow-lg">
        <div className="absolute top-0 right-0 p-4">
          <button onClick={handleModal} className="bg-black">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-red-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="p-4 text-black">
          <h1 className="text-xl mb-2">
            <span className="font-bold">Email:</span> {singleData.email}
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mb-2">
            <span className="font-bold text-lg">Name:</span>{" "}
            {singleData.fullName}
          </p>
          <p className="text-gray-500 dark:text-gray-400 mb-6">
            <span className="font-bold text-lg">Subject:</span>{" "}
            {singleData.subject}
          </p>
          <p className="text-gray-500 dark:text-gray-600 text-justify">
            <span className="font-bold text-lg">Message:</span>{" "}
            {singleData.message}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TableModal;
