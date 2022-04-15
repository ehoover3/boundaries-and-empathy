import React from "react";
import { MdQuiz } from "react-icons/md";
import { BsBookFill, BsPersonFill } from "react-icons/bs";
import { FaChartPie } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function NavBar() {
  // styles
  const styleContainer = {
    width: "100vw",
    display: "flex",
    justifyContent: "space-around",
    outline: "1px solid black",
  };

  const styleItem = { fontSize: "2rem", padding: "1rem" };

  return (
    <div style={styleContainer}>
      <div>LOGO</div>
      <div>
        <Link to='./' style={styleItem}>
          <MdQuiz />
        </Link>

        <Link to='./adventure' style={styleItem}>
          <BsBookFill />
        </Link>

        <Link to='./player' style={styleItem}>
          <BsPersonFill />
        </Link>

        <Link to='./statistics' style={styleItem}>
          <FaChartPie />
        </Link>
      </div>
      <div>USER NAME</div>
    </div>
  );
}
