import React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Chip from "@mui/material/Chip";
import FaceIcon from "@mui/icons-material/Face";
import "../JobCards/JobCards.css";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "40%",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const JobCards = () => {
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <Card sx={{ maxWidth: 345, height: "fit-content" }}>
      <Chip icon={<FaceIcon />} label="With Icon" variant="outlined" />
      <div className="company-content">
        <FaceIcon />
        <div>
          <p style={{ color: "darkgrey" }}>Company Name</p>
          <p style={{ fontSize: "1.5em" }}>Role</p>
          <p style={{ fontSize: "0.9em" }}>place</p>
        </div>
      </div>
      <CardContent>
        <p style={{ fontWeight: "400", color: "grey" }}>Estimated Salary....</p>
        <div className="card-content">
          <div className="about-content">
            <p>About Company</p>
            <p style={{ fontWeight: "600" }}>About Us</p>
          </div>
        </div>
      </CardContent>
      {/* <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton> */}
      <Collapse in={expanded} collapsedSize={200}>
        <CardContent>
          <p paragraph>Method:</p>
          <p paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and
            set aside for 10 minutes.
          </p>
          <p paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet
            over medium-high heat. Add chicken, shrimp and chorizo, and cook,
            stirring occasionally until lightly browned, 6 to 8 minutes.
            Transfer shrimp to a large plate and set aside, leaving chicken and
            chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes,
            onion, salt and pepper, and cook, stirring often until thickened and
            fragrant, about 10 minutes. Add saffron broth and remaining 4 1/2
            cups chicken broth; bring to a boil.
          </p>
          <p paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and
            peppers, and cook without stirring, until most of the liquid is
            absorbed, 15 to 18 minutes. Reduce heat to medium-low, add reserved
            shrimp and mussels, tucking them down into the rice, and cook again
            without stirring, until mussels have opened and rice is just tender,
            5 to 7 minutes more. (Discard any mussels that don&apos;t open.)
          </p>
          <p>
            Set aside off of the heat to let rest for 10 minutes, and then
            serve.
          </p>
        </CardContent>
      </Collapse>
      <ExpandMore
        expand={expanded}
        onClick={handleExpandClick}
        aria-expanded={expanded}
        aria-label="show more"
      >
        <ExpandMoreIcon />
      </ExpandMore>
      <CardActions sx={{ display: "flex", flexDirection: "column" }}>
        <Button variant="contained" sx={{marginTop:"10px", width:"75%"}}>
          Easy Apply
        </Button>
        <Button variant="contained" sx={{marginTop:"10px", width:"75%"}}>
          Unlock referral asks
        </Button>
      </CardActions>
    </Card>
  );
};

export default JobCards;
