import { FaPhone, FaEnvelope, FaLocationArrow } from "react-icons/fa6";

import { Link } from "react-router-dom";
import InputForm from "../components/Form/InputForm";
import { useState } from "react";
import { BASE_URL } from "../utils/staticData";

const CONTACT_DATA_INIT = {
  fullName: "",
  email: "",
  subject: "",
  message: "",
};


const toastMessage = (message) => {
  const toast = document.getElementById("toast");
  toast.classList.remove("hidden");
  toast.innerText = message;
  setTimeout(() => {
    toast.classList.add("hidden");
  }, 5000);
};

const Contact = () => {
  const [messages, setMessages] = useState({ ...CONTACT_DATA_INIT });
  const [error, setError] = useState({});

  const onChange = (e) => {
    const { name, value } = e.target;
    setMessages((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    setError({
      ...error,
      [name]: validateInput(name, value),
    });
  };

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/ && /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validateInput = (name, value) => {
    let error = "";
    if (name === "fullName" && value === "") {
      error = "Full Name is required";
    } else if (
      (name === "email" && !validateEmail(value)) ||
      (value === "" && value <= 30)
    ) {
      error = "Email is invalid";
    } else if (name === "subject" && value === "") {
      error = "Subject is required";
    } else if (name === "message" && value === "") {
      error = "Message is required";
    }
    return error;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newError = {};

    Object.keys(messages).forEach((key) => {
      const error = validateInput(key, messages[key]);
      if (error && error.length > 0) {
        newError[key] = error;
      }
    });

    if (Object.keys(newError).length === 0) {
      // No errors, proceed with form submission
      setError({}); // Clear previous errors

      fetch(`${BASE_URL}/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(messages),
      })
        .then((res) => res.json())
        .then(() => {
          setMessages(CONTACT_DATA_INIT);
          toastMessage("Message Sent Successfully");
        })
        .catch((err) => console.log(err));
    } else {
      // There are errors, set the errors state
      console.log("Errors in the form:", newError);
      setError(newError);
    }
  };

  

  return (
    <div className="contact">

      <div id="toast" className="hidden bg-green-500 text-white text-center fixed top-15 right-32 m-3 p-2 rounded-md lg:right-5">
        Message Sent Successfully
      </div>
      
      <div className="contact-sub bg-gray-100 py-8 px-10 md:max-w-full rounded-md">
        <h3 className="contact-title mb-5 text-black text-2xl squada">
          Get in Touch -
        </h3>
        <div className="contact-content-main flex md:flex-col">
          <div className="contact-form w-[65%] md:w-full bg-white shadow-2xl my-4 py-8 px-3 rounded-lg md:mb-9">
            <div className="confoTitle">
              <form onSubmit={handleSubmit} className="grid m-auto w-[90%]">
                <div className="name-email flex justify-between gap-4 md:flex-col md:gap-0">
                  <InputForm
                    type="text"
                    id="fullName"
                    name="fullName"
                    className="fullName"
                    value={messages.fullName}
                    onChange={onChange}
                    placeholder="Full Name"
                    error={error.fullName}
                  />

                  <InputForm
                    type="email"
                    id="email"
                    name="email"
                    className="email"
                    value={messages.email}
                    onChange={onChange}
                    placeholder="Email"
                    error={error.email}
                  />
                </div>
                <InputForm
                  type="text"
                  id="subject"
                  name="subject"
                  className="subject"
                  value={messages.subject}
                  onChange={onChange}
                  placeholder="Subject"
                  error={error.subject}
                />
                <textarea
                  id="message"
                  name="message"
                  placeholder="Message"
                  onChange={onChange}
                  value={messages.message}
                  className="message outline-none border-2 border-sky-300 p-2 w-full h-32 md:h-40 lg:h-48 resize-none rounded-md text-black"
                ></textarea>
                {error.message && (
                  <p className="text-red-500 text-sm">{error.message}</p>
                )}
                <br />
                <button type="submit" className="submit-btn-contact">
                  Submit
                </button>
              </form>
            </div>
          </div>

          <div className="contact-cards px-6 w-[35%] md:w-full">
            <div className="phone mb-7">
              <div className="ph-info contact-page-info">
                <FaPhone className=" bg-slate-300 text-black rounded-sm p-1 " />
                <h5 className="">Phone</h5>
              </div>
              <Link to="tel:8801746669174" className="text-xl">
                <span className="">+880 1746669174</span>
              </Link>
            </div>
            <div className="email mb-7 max-w-full">
              <div className="email-info contact-page-info">
                <FaEnvelope className="bg-slate-300 text-black rounded-sm p-1 " />
                <h5 className="">Email</h5>
              </div>
              <div className="gmail-name">
                <Link
                  to="mailto:sahaduzzaman.cse@gmail.com"
                  className="text-xl"
                >
                  <span className=" break-all">sahaduzzaman.cse@gmail.com</span>
                </Link>
              </div>
            </div>
            <div className="address">
              <div className="address-info contact-page-info">
                <FaLocationArrow className=" bg-slate-300 text-black rounded-sm p-1 " />
                <h5 className="">Address</h5>
              </div>
              <p className="text-xl">Dhaka, Bangladesh</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
