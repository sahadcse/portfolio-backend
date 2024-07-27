import axiosInstance from "./axiosInstances";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../utils/staticData";


const SingleContact = () => {
  const [contact, setContact] = useState({});
  const { id } = useParams();
  useEffect(() => {
    const fetchContact = async () => {
      try {
        const response = await axiosInstance.get(
          `${BASE_URL}/contact/${id}`
        );
        setContact(response.data.messageSingle)
      } catch (error) {
        console.log(error);
      }
    };
    fetchContact();
  }, [id]);

  return (
    <div>
      <h1 className="">
        Single Contact
      </h1>
      <div className="">
        <div className="">
          <h1 className="">
            Full Name: {contact.fullName}
          </h1>
          <h1 className="">
            Email: {contact.email}
          </h1>
          <h1 className="">
            Subject: {contact.subject}
          </h1>
          <h1 className="">
            Message: {contact.message}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default SingleContact;
