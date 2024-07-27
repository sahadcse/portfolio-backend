import {useEffect, useState} from 'react'
import { BASE_URL } from '../../utils/staticData';

const RegiserUrl = () => {
    const [register, setRegister] = useState(null);
  // console.log("reg: ",register)

  useEffect(() => {
    const fetchRegister = async () => {
      const response = await fetch(`${BASE_URL}/url-active`);
      const data = await response.json();
      // console.log("A1: ",data.register[0].activeStatus);
      setRegister(data.register[0].activeStatus);
      
    };
    fetchRegister();
  }, []);


  return register;
}

export default RegiserUrl