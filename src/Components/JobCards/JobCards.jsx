import React, { useEffect } from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Chip from "@mui/material/Chip";
import "../JobCards/JobCards.css";
import { useDispatch, useSelector } from "react-redux";
import { changeLimit } from "../../features/limitSlice";
import HourglassTopIcon from "@mui/icons-material/HourglassTop";


const JobCards = ({ data }) => {
  const limit = useSelector((state) => state.limit.value);
  const dispatch = useDispatch();
  
  
  return (
    <div className="card-box">
      <Card
        sx={{
          maxWidth: 345,
          height: "fit-content",
          padding: "2vh",
          borderRadius: "5%",
        }}
      >
        <Chip
          icon={<HourglassTopIcon />}
          label="Posted 6 days ago"
          variant="outlined"
        />
        <div className="company-content">
          <img style={{ width: "35px", height: "50px" }} src={data?.logoUrl} />
          <div style={{ lineHeight: "0.5px" }}>
            <p style={{ color: "darkgrey" }}>{data?.companyName}</p>
            <p style={{ fontSize: "1.5em" }}>{data?.jobRole}</p>
            <p style={{ fontSize: "0.9em" }}>{data?.location}</p>
          </div>
        </div>
        <CardContent>
          <p style={{ fontWeight: "400", color: "grey" }}>
            Estimated Salary: &#x20B9;{data?.maxJdSalary}
            {data?.minJdSalary == null ? null : (
              <span>-&#x20B9;{data?.minJdSalary}LPA</span>
            )}
          </p>
          <div className="card-content">
            <div className="about-content">
              <p>About Company</p>
              <p style={{ fontWeight: "600" }}>About Us</p>
            </div>
          </div>
        </CardContent>
        <div style={{display:"flex", justifyContent:"center", flexDirection:"column"}}>
          <Collapse collapsedSize={200}>
            <CardContent>
              <p>{data?.jobDetailsFromCompany}</p>
            </CardContent>
          </Collapse>
        <div className="view-job-box"></div>
          <a className="load-btn" href={data.jdLink}>View Job</a>
        </div>
        {data?.minExp ? (
          <div>
            <p style={{ color: "darkgrey" }}>Minimum Experience</p>
            <p style={{ fontSize: "0.9em" }}>{data?.minExp} years</p>
          </div>
        ) : null}
        <CardActions sx={{ display: "flex", flexDirection: "column",justifyContent: "center" }}>
          <Button
            variant="contained"
            sx={{
              marginTop: "10px",
              width: "75%",
              backgroundColor: "mediumaquamarine",
              color: "black",
              fontWeight: "750",
            }}
          >
            Easy Apply
          </Button>
          <Button variant="contained" sx={{ marginTop: "10px", width: "75%" }}>
            Unlock referral asks
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default JobCards;
