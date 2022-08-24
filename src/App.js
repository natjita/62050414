import React, { useEffect, useState } from "react";
import axios from "axios";
import Table from "./Components/Table";

export const App = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const response = await axios.get("https://api.covid19api.com/summary/");

    console.log(response.data.products);

    setData(response.data.products);
  };

  useEffect(() => {
    getData();
  }, []);

  console.log("data :", data);
  return (
    <div className="container-lg py-2">
      <Table products={data} />
    </div>
  );
};

export default App;
