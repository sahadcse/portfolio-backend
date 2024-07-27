import {
    BASE_URL
} from "./staticData";
import {
    useState,
    useEffect
} from "react";


const ProfileData = () => {
    const [profileInfoMain, setProfileInfoMain] = useState({});
    const [contactsMain, setContactsMain] = useState([]);
    const [socalLinksMain, setSocalLinksMain] = useState([]);

    useEffect(() => {
        try {
            const fetchData = async () => {
                const response = await fetch(`${BASE_URL}/profile`);
                const data = await response.json();
                console.log(data.profile[0]);
                setProfileInfoMain((prev) => ({
                    ...prev,
                    imageUrl: data.profile[0].imageUrl,
                    fullName: data.profile[0].fullName,
                    role: data.profile[0].role,
                    shortDescription: data.profile[0].shortDescription,
                }));
                setContactsMain(data.profile[0].contacts);
                setSocalLinksMain(data.profile[0].socalLinks);
            };
            fetchData();
        } catch (error) {
            console.log(error);
        }
    }, []);
    console.log("contacts", contactsMain)

    return ({
        profileInfoMain,
        contactsMain,
        socalLinksMain
    });
}

export default ProfileData;