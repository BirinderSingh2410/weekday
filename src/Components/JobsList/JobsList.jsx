import React, { useEffect, useState } from "react";
import JobCards from "../JobCards/JobCards";
import { useSelector, useDispatch } from "react-redux";
import { setData } from "../../features/dataSlice";
import "../JobsList/JobsList.css";

const JobsList = () => {
  const dispatch = useDispatch();
  const jobList = useSelector((state) => state.data.value);

  useEffect(() => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const body = JSON.stringify({
      limit: 20,
      offset: 0,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body,
    };

    fetch(
      "https://api.weekday.technology/adhoc/getSampleJdJSON",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        dispatch(setData(result.jdList));
      })
      .catch((error) => console.error(error));
  }, []);
  return (
    <div className="list-box">
      {jobList.length> 0 ?
        jobList.map((data,index)=>(
          <JobCards data={data} key={index}/>
        )):null
      }
      <JobCards />
    </div>
  );
};

export default JobsList;
