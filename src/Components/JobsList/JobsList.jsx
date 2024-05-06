import React, { useEffect, useState } from "react";
import JobCards from "../JobCards/JobCards";
import { useSelector, useDispatch } from "react-redux";
import { setData } from "../../features/dataSlice";
import "../JobsList/JobsList.css";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Loader from "../Loader/Loader";

const JobsList = () => {
  const dispatch = useDispatch();
  const jobList = useSelector((state) => state.data.value);
  const [loader, setLoader] = useState(false);
  const [roles, setRoles] = useState(new Set());
  const [exp, setExp] = useState(new Set());
  const [msb, setMsb] = useState(new Set());
  const [companySet, setCompanySet] = useState(new Set());
  const [selectRole, setSelectRole] = useState("");
  const [selectExp, setSelectExp] = useState("");
  const [selectMsb, setSelectMsb] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [remote, setRemote] = React.useState(false);
  const [orgJdList, setOrgJdList] = useState([]);

  useEffect(() => {
    setLoader(true);
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const body = JSON.stringify({
      limit: 10,
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
        setOrgJdList(result.jdList);
        setTimeout(() => setLoader(false), 1000);
      })
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    if (jobList.length > 0) {
      jobList.map((item) => {
        if (!roles.has(item.jobRole) && item.jobRole != null) {
          setRoles((pre) => {
            const newValue = new Set(pre);
            newValue.add(item.jobRole);
            return newValue;
          });
          if (!exp.has(item.maxExp) && item.maxExp != null) {
            setExp((pre) => {
              const newExp = new Set(pre);
              newExp.add(item.maxExp);
              return newExp;
            });
          }
          if (!msb.has(item.minExp) && item.minExp != null) {
            setMsb((pre) => {
              const newMsb = new Set(pre);
              newMsb.add(item.minExp);
              return newMsb;
            });
          }
          if (!companySet.has(item.companyName) && item.companyName != null) {
            setCompanySet((pre) => {
              const newCompanyName = new Set(pre);
              newCompanyName.add(item.companyName);
              return newCompanyName;
            });
          }
        }
      });
    }
  }, [jobList]);

  useEffect(() => {
    if (orgJdList.length > 0) {
      let jdList = orgJdList;
      if(selectRole !== "" && selectRole !== null){
        jdList = jdList.filter((item) => item.jobRole === selectRole)
      }
      if(selectMsb !== "" && selectMsb !== null){
        jdList = jdList.filter((item) => item.jobRole === selectMsb)
      }
      if(selectExp !== "" && selectExp !== null){
        jdList = jdList.filter((item) => item.jobRole === selectExp)
      }
      console.log(jdList);
      dispatch(setData(jdList));
    }
  }, [selectRole, selectMsb, selectExp]);

  return (
    <div className="list-box">
      {!loader ? (
        <div>
          <div className="search-box">
            <FormControl sx={{ m: 1, minWidth: 80 }}>
              <InputLabel id="roles-label">Roles</InputLabel>
              <Select
                labelId="roles-label"
                id="demo-simple-select-autowidth"
                value={selectRole}
                onChange={(e) => setSelectRole(e.target.value)}
                autoWidth
                label="role"
              >
                <MenuItem value="">None</MenuItem>
                {Array.from(roles).map((item, index) => (
                  <MenuItem key={index} value={item}>
                    {item}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            {/* <FormControl sx={{ m: 1, minWidth: 80 }}>
              <InputLabel id="number-label">Number of Employees</InputLabel>
              <Select
                labelId="number-label"
                id="demo-simple-select-autowidth"
                value={age}
                onChange={handleChange}
                autoWidth
                label="Age"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Twenty</MenuItem>
                <MenuItem value={21}>Twenty one</MenuItem>
                <MenuItem value={22}>Twenty one and a half</MenuItem>
              </Select>
            </FormControl> */}
            <FormControl sx={{ m: 1, minWidth: 80 }}>
              <InputLabel id="experience-label">Experience</InputLabel>
              <Select
                labelId="experience-label"
                id="demo-simple-select-autowidth"
                value={selectExp}
                onChange={(e) => setSelectExp(e.target.value)}
                autoWidth
                label="exp"
              >
                <MenuItem value="">None</MenuItem>
                {Array.from(exp).map((item, index) => (
                  <MenuItem key={index} value={item}>
                    {item}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 80 }}>
              <InputLabel id="remote-label">Remote</InputLabel>
              <Select
                labelId="remote-label"
                id="demo-simple-select-autowidth"
                value={remote}
                onChange={(e) => setRemote(e.target.value)}
                autoWidth
                label="Age"
              >
                <MenuItem value={true}>Yes</MenuItem>
                <MenuItem value={false}>No</MenuItem>
              </Select>
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 80 }}>
              <InputLabel id="mbs-label">Minimum Base Salary</InputLabel>
              <Select
                labelId="mbs-label"
                id="demo-simple-select-autowidth"
                value={selectMsb}
                onChange={(e) => setSelectMsb(e.target.value)}
                autoWidth
                label="msb"
              >
                <MenuItem value="">None</MenuItem>
                {Array.from(msb).map((item, index) => (
                  <MenuItem key={index} value={item}>
                    {item}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 80 }}>
              <InputLabel id="mbs-label">Search Company Name</InputLabel>
              <Select
                labelId="mbs-label"
                id="demo-simple-select-autowidth"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                autoWidth
                label="msb"
              >
                <MenuItem value="">None</MenuItem>
                {Array.from(companySet).map((item, index) => (
                  <MenuItem key={index} value={item}>
                    {item}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
          <div className="list-content">
            {jobList.length > 0
              ? jobList.map((data, index) => (
                  <JobCards data={data} key={index} />
                ))
              : null}
            <JobCards />
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default JobsList;
