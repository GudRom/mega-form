import { Outlet } from "react-router-dom";
import Header from "./components/Header/Haeder";

function App() {
  return (
    <>
      <Header />
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}

export default App;
