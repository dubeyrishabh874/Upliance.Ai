import { Divider } from "@mui/material";
import "./App.css";
import { Counter } from "./Components/Counter";
import RichTextContent from "./Components/RichTextContent";
import UserFrom from "./Components/UserFrom";
import ViewUserDeatls from "./Components/ViewUserDeatls";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Dashboard from "./Components/Dashboard";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/form" element={<UserFrom />} />
          <Route path="/viewUserDeatls" element={<ViewUserDeatls />} />
          <Route path="/richTextContent" element={<RichTextContent />} />
          <Route path="/counter" element={<Counter />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
