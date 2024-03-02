import { Divider } from "@mui/material";
import { Counter } from "./Counter";
import RichTextContent from "./RichTextContent";
import UserFrom from "./UserFrom";
import ViewUserDeatls from "./ViewUserDeatls";
import Navbar from "./Navbar";
import AnimationContent from "./AnimationContent";
import { ChartContent } from "./ChartContent";

const style = {
  display: "flex",
  justifyContent: "space-around",
  height: "content-fit",
  padding: "20px",
  margin: "20px",
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
      <Divider />
      <div style={{ ...style }}>
        <ChartContent />
        <AnimationContent />
      </div>
    </>
  );
}

export default Dashboard;
