import React from "react";
import { Button } from "@mui/material";
import catdj from "../assets/images/cat_dj.png";
import meditation from "../assets/images/meditation.png";
import heart from "../assets/images/heart.png";
import superhero from "../assets/images/superhero.png";
import apple from "../assets/images/apple.png";
import emotions from "../assets/images/emotions.png";
import thinking from "../assets/images/thinking.png";
import lightbulb from "../assets/images/lightbulb.png";

import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    blue: { main: "rgba(70,11,218,255)", contrastText: "white" },
    green: { main: "rgba(58,151,9,255)", contrastText: "white" },
    orange: { main: "rgba(229,97,9,255)", contrastText: "white" },
    purple: { main: "rgba(205,15,254,255)", contrastText: "white" },
    red: { main: "rgba(254,26,97,255)", contrastText: "white" },
    yellow: { main: "#6aa7a4", contrastText: "white" },
  },
});

export default function Training() {
  const styleButton = {
    display: "flex",
    flexDirection: "column",
    margin: ".25rem",
    width: "150px",
  };

  return (
    <div style={{ backgroundColor: "black", height: "95vh" }}>
      <div> Training</div>
      {/* Image */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <img src={catdj} alt='cat dj' style={{ width: "250px", height: "250px" }} />
      </div>
      {/* Buttons */}

      {/* Row 1 */}
      <ThemeProvider theme={theme}>
        <div style={{ width: "100vw", display: "flex", justifyContent: "center" }}>
          <Button variant='contained' style={styleButton}>
            <img src={apple} alt='cat dj' />
            <span>Needs</span>
          </Button>
          <Button variant='contained' style={styleButton}>
            <img src={emotions} alt='emotions' />
            <span>Emotions</span>
          </Button>
          <Button variant='contained' style={styleButton}>
            <img src={lightbulb} alt='cat dj' />
            <span>Thoughts</span>
          </Button>
        </div>
        {/* Row 2 */}
        <div style={{ width: "100vw", display: "flex", justifyContent: "center" }}>
          <Button variant='contained' style={styleButton} color='green'>
            <img src={superhero} alt='cat dj' />
            <span>Body Language</span>
          </Button>
          <Button variant='contained' style={styleButton} color='green'>
            <img src={heart} alt='emotions' />
            <span>Empathy</span>
            <span> </span>
          </Button>
          <Button variant='contained' style={styleButton} color='green'>
            <img src={meditation} alt='cat dj' />
            <span>Boundaries</span>
            <span> </span>
          </Button>
        </div>
      </ThemeProvider>
    </div>
  );
}
