import "./App.css";
import NavBar from "./components/navBar";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import useLoginStore from "./stores/login";

const App = () => {
  const loadLogin = useLoginStore((state) => state.loadLogin);
  useEffect(() => {
    loadLogin();
  }, [loadLogin]);
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
};

export default App;
