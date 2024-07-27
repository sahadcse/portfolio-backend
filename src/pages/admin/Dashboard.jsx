import axiosInstance from "./axiosInstances";
import { useEffect, useState } from "react";
import useProfleData from "../../utils/useProfleData";

const Dashboard = () => {
  const { profileInfoMain, contactsMain, socalLinksMain, fetchDataNew } = useProfleData();
  const [pushUrlStatus, setPushUrlStatus] = useState(null);
  const [isEdit, setIsEdit] = useState(false);
  const [userProfile, setUserProfile] = useState({
    fullName: "",
    role: "",
    shortDescription: "",
    imageUrl: "",
    contacts: [
      {
        phone: "",
        email: "",
        location: "",
      },
    ],
    socalLinks: [
      {
        facebook: "",
        twitter: "",
        github: "",
        linkedin: "",
      },
    ],
  });
  let id = profileInfoMain.id;

  const handleChanges = (e) => {
    const { name, value } = e.target;
    setUserProfile((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleChangesContact = (e) => {
    const { name, value } = e.target;
    setUserProfile((prev) => ({
      ...prev,
      contacts: [
        {
          ...prev.contacts[0],
          [name]: value,
        },
      ],
    }));
  };

  const handleChangesSocal = (e) => {
    const { name, value } = e.target;
    setUserProfile((prev) => ({
      ...prev,
      socalLinks: [
        {
          ...prev.socalLinks[0],
          [name]: value,
        },
      ],
    }));
  };


  // get the url status
  useEffect(() => {
    const fetchUrlStatus = async () => {
      const response = await axiosInstance.get("/url-active");
      setPushUrlStatus(!response.data.register[0].activeStatus);
    };
    fetchUrlStatus();
  }, []);

  // handle edit button
  const handleEdit = () => {
    setIsEdit(!isEdit);
  };

  // handle url status
  const handleUrl = () => {
    try {
      console.log("Url Status 2: ", pushUrlStatus);
      axiosInstance.put("/url-active", { urlStatus: pushUrlStatus });
      setPushUrlStatus(!pushUrlStatus);
    } catch (error) {
      console.error("Error Updating Url Status: ", error);
    }
  };
  
  // load profile data when useProfileData is ready
  useEffect(() => {
    setUserProfile({
      fullName: profileInfoMain?.fullName,
      role: profileInfoMain?.role,
      shortDescription: profileInfoMain?.shortDescription,
      imageUrl: profileInfoMain?.imageUrl,
      contacts: [
        {
          phone: contactsMain[0]?.phone,
          email: contactsMain[0]?.email,
          location: contactsMain[0]?.location,
        },
      ],
      socalLinks: [
        {
          facebook: socalLinksMain[0]?.facebook,
          twitter: socalLinksMain[0]?.twitter,
          github: socalLinksMain[0]?.github,
          linkedin: socalLinksMain[0]?.linkedin,
        },
      ],
    });
  }, [profileInfoMain, contactsMain, socalLinksMain]);

  // just refresh the profile data not the whole page
  const handleRefresh = () => {
    fetchDataNew();
  };

  const hanldeSubmit = async () => {
    try {
      await axiosInstance.put(`/profile/${id}`, userProfile);
      setIsEdit(!isEdit);
    } catch (error) {
      console.error("Error Updating Profile: ", error);
    }
  };

  return (
    <div className=" flex flex-col justify-center items-center w-[95%]">
      <button
        onClick={handleUrl}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-8"
      >
        Register Page: {pushUrlStatus ? "Inactive" : "Active"}
      </button>

      {/* Refresh Button for Profile Data */}
      <button
        onClick={handleRefresh}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Refresh
      </button>

      <div className="flex flex-col bg-white text-black w-fit justify-center py-4 px-4 rounded-md max-w-[90%] lg:max-w-full mb-5">
        <h4 className="text-3xl squada tracking-widest text-sky-600 mb-5">
          Profile Data
        </h4>
        <div className="">
          {isEdit ? (
            <div className="text-black grid grid-cols-3 lg:grid-cols-1 gap-3">
              <div className="">
                <input
                  type="text"
                  name="fullName"
                  value={userProfile.fullName}
                  onChange={handleChanges}
                  className="outline-none border border-gray-400 px-3 rounded-sm py-1"
                  placeholder="Full Name"
                />
              </div>
              <div className="">
                <input
                  type="text"
                  name="role"
                  value={userProfile.role}
                  onChange={handleChanges}
                  className="outline-none border border-gray-400 px-3 rounded-sm py-1"
                  placeholder="Role"
                />
              </div>
              <div className="">
                <input
                  type="text"
                  name="imageUrl"
                  value={userProfile.imageUrl}
                  onChange={handleChanges}
                  className="outline-none border border-gray-400 px-3 rounded-sm py-1"
                  placeholder="Image Url"
                />
              </div>
              <div className="">
                <input
                  type="text"
                  name="phone"
                  value={userProfile.contacts[0].phone}
                  onChange={handleChangesContact}
                  className="outline-none border border-gray-400 px-3 rounded-sm py-1"
                  placeholder="Phone"
                />
              </div>
              <div className="">
                <input
                  type="text"
                  name="email"
                  value={userProfile.contacts[0].email}
                  onChange={handleChangesContact}
                  className="outline-none border border-gray-400 px-3 rounded-sm py-1"
                  placeholder="Email"
                />
              </div>
              <div className="">
                <input
                  type="text"
                  name="location"
                  value={userProfile.contacts[0].location}
                  onChange={handleChangesContact}
                  className="outline-none border border-gray-400 px-3 rounded-sm py-1"
                  placeholder="Location"
                />
              </div>
              <div className="">
                <input
                  type="text"
                  name="facebook"
                  value={userProfile.socalLinks[0].facebook}
                  onChange={handleChangesSocal}
                  className="outline-none border border-gray-400 px-3 rounded-sm py-1"
                  placeholder="Facebook"
                />
              </div>
              <div className="">
                <input
                  type="text"
                  name="twitter"
                  value={userProfile.socalLinks[0].twitter}
                  onChange={handleChangesSocal}
                  className="outline-none border border-gray-400 px-3 rounded-sm py-1"
                  placeholder="Twitter"
                />
              </div>
              <div className="">
                <input
                  type="text"
                  name="github"
                  value={userProfile.socalLinks[0].github}
                  onChange={handleChangesSocal}
                  className="outline-none border border-gray-400 px-3 rounded-sm py-1"
                  placeholder="Github"
                />
              </div>
              <div className="">
                <input
                  type="text"
                  name="linkedin"
                  value={userProfile.socalLinks[0].linkedin}
                  onChange={handleChangesSocal}
                  className="outline-none border border-gray-400 px-3 rounded-sm py-1"
                  placeholder="Linkedin"
                />
              </div>
              <div className="textArea col-span-2 lg:col-span-1">
                <textarea
                  type="text"
                  name="shortDescription"
                  value={userProfile.shortDescription}
                  onChange={handleChanges}
                  className="outline-none border border-gray-400 px-3 rounded-sm py-1 w-full col-span-2"
                  placeholder="Short Description"
                />
              </div>
              <br />
              <div className=" gap-3 flex">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-8 w-fit"
                  onClick={hanldeSubmit}
                >
                  Update Profile
                </button>
                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mb-8 w-fit"
                  onClick={handleEdit}
                >
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            <div className="gap-3 grid">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-5 w-fit"
                onClick={handleEdit}
              >
                Edit Profile
              </button>
              <div className="break-all flex gap-3 flex-col">
                <p className="">
                  <span className="dashboard-profile-data-view">Name:</span>{" "}
                  {userProfile.fullName}
                </p>
                <p className="">
                  <span className="dashboard-profile-data-view">Role:</span>{" "}
                  {userProfile.role}
                </p>
                <p className="">
                  {" "}
                  <span className="dashboard-profile-data-view">
                    Image Url:
                  </span>{" "}
                  {userProfile.imageUrl}
                </p>
                <p className=" ">
                  <span className="dashboard-profile-data-view">
                    Short Description:
                  </span>{" "}
                  {userProfile.shortDescription}
                </p>
                <p className="">
                  <span className="dashboard-profile-data-view">Phone:</span>{" "}
                  {userProfile.contacts[0].phone}
                </p>
                <p className="">
                  <span className="dashboard-profile-data-view">Email:</span>{" "}
                  {userProfile.contacts[0].email}
                </p>
                <p className="">
                  <span className="dashboard-profile-data-view">Location:</span>{" "}
                  {userProfile.contacts[0].location}
                </p>
                <p className="">
                  <span className="dashboard-profile-data-view">Facebook:</span>{" "}
                  {userProfile.socalLinks[0].facebook}
                </p>
                <p className="">
                  <span className="dashboard-profile-data-view">Twitter:</span>{" "}
                  {userProfile.socalLinks[0].twitter}
                </p>
                <p className="">
                  <span className="dashboard-profile-data-view">Github:</span>{" "}
                  {userProfile.socalLinks[0].github}
                </p>
                <p className="">
                  <span className="dashboard-profile-data-view">Linkedin:</span>{" "}
                  {userProfile.socalLinks[0].linkedin}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
