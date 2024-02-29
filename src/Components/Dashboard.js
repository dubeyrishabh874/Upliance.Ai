import { Divider, Button, AppBar } from "@mui/material";
import { Counter } from "./Counter";
import RichTextContent from "./RichTextContent";
import UserFrom from "./UserFrom";
import ViewUserDeatls from "./ViewUserDeatls";
import Navbar from "./Navbar";

const style = {
  display: "flex",
  justifyContent: "space-around",
  height: "40vh",
  padding: "30px",
};

function Dashboard() {
  return (
    <>
      <Navbar />
      <div style={{ ...style }}>
        <Counter />
        <RichTextContent />
      </div>
      <Divider />
      <div style={{ ...style }}>
        <UserFrom />
        <ViewUserDeatls />
      </div>
    </>
  );
}

export default Dashboard;
