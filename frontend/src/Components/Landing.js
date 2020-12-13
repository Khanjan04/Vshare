import React from "react";
import Typography from "@material-ui/core/Typography";
import Cards from "./Cards";
import laptop from "../images/laptop.jpg";
const Landing = () => {
  return (
    <div className="hero">
      <div className="panel">
        <div className="hero-image">
          <img src={laptop} />{" "}
        </div>
        <div className="hero-text">
          <h2>Vshare</h2>
          <Typography variant="h5" color="textSecondary" component="p">
              is a one stop destination for VIT students and teachers. Here
            teachers can share notes with students and can make announcements.
          </Typography>
        </div>
      </div>
      <div>
      <>
      <Cards />
      </>
      </div>
    </div>
  );
};
export default Landing;
