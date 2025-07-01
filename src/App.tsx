import { Outlet } from "react-router";
import Navbar from "./components/layouts/Navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default App;