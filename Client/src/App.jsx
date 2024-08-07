import { Outlet } from "react-router-dom";
import "./App.css";
import SideBar from "./Components/Sidebar/SideBar";

function App() {
  return(
    <>
    <SideBar />
    <Outlet />
    </>
  )   
}

export default App;
