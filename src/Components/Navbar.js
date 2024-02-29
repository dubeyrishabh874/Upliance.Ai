import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        backgroundColor: "#ccc",
        color: "white",
        fontWeight: "bold",
        padding: "10px",
      }}
    >
      <Link to="/counter">Counter</Link>
      <Link to="/viewUserDeatls">Explor RichText Content</Link>
      <Link to="/richTextContent">See User Deatls</Link>
      <Link to="/form">User Form</Link>
    </div>
  );
};
export default Navbar;
