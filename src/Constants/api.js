import axios from "axios";
import { useState, useEffect } from "react";

const HallofFame = () => {
  const [cont, setCont] = useState([]);

  useEffect(() => {
      fetch('https://api.cseatheeye.com/ping', {
        method: 'GET',
        mode: 'cors',
        credentials: 'same-origin'
      })
        .then(response => response.json())
        .then(data => {
          setCont(data);
        })
        .catch(error => {
          console.error("Error fetching data:", error);
        });
  }, []);
  return cont;
  
};

export { HallofFame };













