import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Api.css";

export default function Api() {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function getData() {
      const res = await axios.get("https://brewmusepk.herokuapp.com/store");
      setData(res.data);
      console.log(data);
    }
    getData();
  }, []);
  return (
    <>
      <h1>Restaurant List & Address</h1>
      {data.map((e) => {
        return (
          <>
            <div className="main_div">
              <div className="name">{e.name}</div>
              <div className="add">{e.address}</div>
            </div>
          </>
        );
      })}
    </>
  );
}
