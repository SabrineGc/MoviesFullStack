import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios.get("http://localhost:3001/api/movies")
      .then(res => setData(res.data))
      .catch(err => console.log(err));
  };

  console.log(data, "from context");

  return (
    <Context.Provider value={{ data, fetchData }}>
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
