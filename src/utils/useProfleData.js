// useProfileData.js
import { useState, useEffect, useCallback } from "react";
import { BASE_URL } from "./staticData";

const getProfleData = () => {
  const [profileInfoMain, setProfileInfoMain] = useState({});
  const [contactsMain, setContactsMain] = useState([]);
  const [socalLinksMain, setSocalLinksMain] = useState([]);

  const fetchDataNew = useCallback(async () => {
    try {
      const response = await fetch(`${BASE_URL}/profile`);
      const data = await response.json();

      console.log(data.profile[0]._id);

      setProfileInfoMain({
        id: data.profile[0]._id,
        imageUrl: data.profile[0].imageUrl,
        fullName: data.profile[0].fullName,
        role: data.profile[0].role,
        shortDescription: data.profile[0].shortDescription,
      });
      setContactsMain(data.profile[0].contacts);
      setSocalLinksMain(data.profile[0].socalLinks);
    } catch (error) {
      console.log(error);
    }
  }, []); 

  useEffect(() => {

    fetchDataNew();
  }, [ fetchDataNew ]);
  
  return { profileInfoMain, contactsMain, socalLinksMain, fetchDataNew };
};

export default getProfleData;
