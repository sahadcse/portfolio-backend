import { useEffect, useState } from "react";
import Table from "../../components/Table/Table";
import axiosInstance from "./axiosInstances";
import { BASE_URL } from "../../utils/staticData";

const DashContact = () => {
  const pageType = {
    one: "Full Name",
    two: "Email",
    three: "Subject",
    four: "Message",
    five: "Action",
    six: "View",
  };

  const [pageData, setPageData] = useState([]);
  const fetchMessage = async () => {
    try {
      const response = await fetch(`${BASE_URL}/contact`);
      const data = await response.json();
      setPageData(data.messages);
      // console.log("Log from DashContact: ", data.messages);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMessage();
  }, []);

  const handleOperation = async (id) => {
    try {
      await axiosInstance.delete(`/contact/${id}`);
      setPageData(pageData.filter((data) => data._id !== id));

      console.log("Deleted");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Table
      pageType={pageType}
      pageData={pageData}
      handleOperation={handleOperation}
      fetchMessage={fetchMessage}
    />
  );
};

export default DashContact;
