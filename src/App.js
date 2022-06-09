import { Route, Routes } from "react-router-dom";
import Revenue from "./components/Revenue";
import Sidebar from "./components/Sidebar";
import Charts from "./pages/Charts";
import Home from "./pages/Home";
import Member from "./pages/Member";
import Settings from "./pages/Settings";
import Stats from "./pages/Stats";

function App() {
  return (
    <div className="flex justify-between font-poppins">
      <Sidebar />
      <Routes>
        <Route path="/home" exact element={<Home />} />
        <Route path="/member" element={<Member />} />
        <Route path="/stats" element={<Stats />} />
        <Route path="/charts" element={<Charts />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
      <Revenue />
    </div>
  );
}

export default App;
