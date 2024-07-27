import { Link } from "react-router-dom";
import { useState } from "react";
import TableModal from "./TableModal";

const Table = ({ pageType, pageData, handleOperation, fetchMessage }) => {
  const [showModal, setShowModal] = useState(false);
  const [singleData, setSingleData] = useState({});

  const pushSingleDataMessage = (id) => {
    const singleData = pageData.find((data) => data._id === id);
    setSingleData(singleData);
  };

  const handleModal = (id) => {
    pushSingleDataMessage(id);
    setShowModal(!showModal);
  };

  return (
    <>
        {/* making a refresh button for this table */}
        <div className="flex justify-center my-5">
            <button
                onClick={fetchMessage}
                className="bg-blue-500 text-white px-4 py-1 rounded-md active:bg-blue-600"
            >
                Refresh
            </button>
        </div>
      <div className="relative overflow-x-auto lg:w-full z-20">
        <table className="w-fill lg:w-fit text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 overflow-x-auto">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                {pageType.one}
              </th>
              <th scope="col" className="px-6 py-3">
                {pageType.two}
              </th>
              <th scope="col" className="px-6 py-3">
                {pageType.three}
              </th>
              <th scope="col" className="px-6 py-3">
                {pageType.four}
              </th>
              <th scope="col" className="px-6 py-3">
                {pageType.five}
              </th>
              <th scope="col" className="px-6 py-3">
                {pageType.six}
              </th>
            </tr>
          </thead>

          <tbody>
            {pageData.map((data) => (
              <tr key={data._id} className="bg-gray-100 dark:bg-gray-800">
                <td className="px-6 py-4">{data.fullName}</td>
                <td className="px-6 py-4">{data.email}</td>
                <td className="px-6 py-4">{data.subject}</td>
                <td className="px-6 py-4">
                  {data.message.length > 50
                    ? data.message.substring(0, 50) + "..."
                    : data.message}
                </td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => handleOperation(data._id)}
                    className="bg-red-500 text-white px-4 py-1 rounded-md"
                  >
                    Delete
                  </button>
                </td>
                {/* <td className="px-6 py-4">
                  <Link to={`${data._id}`} target={"_blank"}>
                    <button className="bg-blue-500 text-white px-4 py-1 rounded-md">
                      View
                    </button>
                  </Link>
                </td> */}
                <td className="px-6 py-4">
                  <button
                    onClick={handleModal ? () => handleModal(data._id) : null}
                    className="bg-blue-500 text-white px-4 py-1 rounded-md"
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Table Modal  */}
      <div className=" absolute z-50 top-28 w-11/12 mb-10">
        {showModal && (
          <TableModal handleModal={handleModal} singleData={singleData} />
        )}
      </div>
    </>
  );
};

export default Table;
