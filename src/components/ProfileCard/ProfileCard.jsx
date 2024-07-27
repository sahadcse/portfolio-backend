// import { useEffect, useState } from "react";
import {
  FaSquareFacebook,
  FaSquareXTwitter,
  FaSquareGithub,
  FaLinkedin,
  FaPhone,
  FaEnvelope,
  FaLocationArrow,
} from "react-icons/fa6";

import { Link } from "react-router-dom";
import FadeInWhenVisible from "../animation/PCfadeIN";
// import { BASE_URL } from "../../staticData";
import useProfleData from "../../utils/useProfleData";

const ProfileCard = () => {

  const { profileInfoMain, contactsMain, socalLinksMain } = useProfleData();

  console.log("contactsMain 121", contactsMain);
  console.log("profileInfoMain 121", profileInfoMain);
  console.log("socalLinksMain 121", socalLinksMain);
  
  // const [profileInfoMain, setProfileInfo] = useState({});
  // const [contactsMain, setContacts] = useState([]);
  // const [socalLinksMain, setSocalLinks] = useState([]);

  // useEffect(() => {
  //   try {
  //     const fetchData = async () => {
  //       const response = await fetch(`${BASE_URL}/profile`);
  //       const data = await response.json();
  //       // console.log(data.profile[0]);
  //       setProfileInfo((prev) => ({
  //         ...prev,
  //         imageUrl: data.profile[0].imageUrl,
  //         fullName: data.profile[0].fullName,
  //         role: data.profile[0].role,
  //         shortDescription: data.profile[0].shortDescription,
  //       }));
  //       setContacts(data.profile[0].contactsMain);
  //       setSocalLinks(data.profile[0].socalLinksMain);
  //     };
  //     fetchData();
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }, []);
  // console.log("contactsMain", contactsMain);
  // socalLinksMain.map((link) => Object.entries(link).forEach(([key, value]) => console.log(key, value)));

  return (
    <FadeInWhenVisible className="profile-card w-[28%] lg:w-[100%] bg-[#0f172a] md:w-[100%] rounded-lg h-full sticky top-1">
      <section className="">
        <div className="card-main flex flex-col items-center py-4 px-5 my-2">
          <div className="profile-img mb-3">
            <img
              src={profileInfoMain.imageUrl}
              alt="Profile Image"
              className=" w-48 rounded-md"
            />
          </div>
          <div className="profile-info">
            <h3 className="mb-1 font-bold text-xl font-mono text-center text-secondary">
              {profileInfoMain.fullName}
            </h3>
            <h4 className="text-gray-400 mb-2 text-center">
              {profileInfoMain.role}
            </h4>
            <p className="about-me text-justify mb-2">
              {profileInfoMain.shortDescription}
            </p>
            <div className="socal-logo mb-2 flex justify-center gap-7 text-2xl">
              {socalLinksMain.map((link) =>
                Object.entries(link).map(([key, value]) => {
                  if (key === "facebook") {
                    return (
                      <Link
                        to={value}
                        key={key}
                        className="facebook"
                        target="_blank"
                      >
                        <FaSquareFacebook />
                      </Link>
                    );
                  } else if (key === "twitter") {
                    return (
                      <Link
                        to={value}
                        key={key}
                        className="twitter"
                        target="_blank"
                      >
                        <FaSquareXTwitter />
                      </Link>
                    );
                  } else if (key === "github") {
                    return (
                      <Link
                        to={value}
                        key={key}
                        className="github"
                        target="_blank"
                      >
                        <FaSquareGithub />
                      </Link>
                    );
                  } else if (key === "linkedin") {
                    return (
                      <Link
                        to={value}
                        key={key}
                        className="linkedin"
                        target="_blank"
                      >
                        <FaLinkedin />
                      </Link>
                    );
                  }
                })
              )}
            </div>

            <div className="contact-info bg-gray-800 p-3 rounded-lg">
              {contactsMain.map((contact) =>
                Object.entries(contact).map(([key, value]) => {
                  if (key === "phone") {
                    return (
                      <section key={key}>
                        <div className="ph flex items-center">
                          <FaPhone className="mr-2 rounded-xl bg-gray-600 w-auto h-auto p-1" />
                          <div className="ph-info flex flex-col ">
                            <h5 className=" text-gray-500 capitalize">{key}</h5>
                            <Link to={`tel:${value}`} className=" tracking-wider hover:text-green-700">{value}</Link>
                          </div>
                        </div>
                        <span className="border-b border-gray-600 border-dashed flex my-1"></span>
                      </section>
                    );
                  } else if (key === "email") {
                    return (
                      <section key={key}>
                        <div className="email flex items-center">
                          <FaEnvelope className="mr-2 rounded-xl bg-gray-600 w-auto h-auto p-1" />
                          <div className="email-info">
                            <h5 className=" text-gray-500 capitalize">{key}</h5>
                            <Link to={`mailto:${value}`} className="break-all">
                              <p className="break-words hover:text-green-700">{value}</p>
                            </Link>
                          </div>
                        </div>
                        <span className="border-b border-gray-600 border-dashed flex my-1"></span>
                      </section>
                    );
                  } else if (key === "location") {
                    return (
                      <section key={key}>
                        <div className="location flex items-center">
                          <FaLocationArrow className="mr-2 rounded-xl bg-gray-600 w-auto h-auto p-1" />
                          <div className="location-info">
                            <h5 className=" text-gray-500 capitalize">{key}</h5>
                            <p>{value}</p>
                          </div>
                        </div>
                      </section>
                    );
                  }
                })
              )}
            </div>
            <p className="text-[.50rem] text-gray-300 text-center mt-2">{`© ${new Date().getFullYear()} SAHAD. All rights reserved.`}</p>
          </div>
        </div>
      </section>
    </FadeInWhenVisible>
  );
};

export default ProfileCard;
