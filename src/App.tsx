import { RouterProvider, Outlet, Route, Routes } from "react-router-dom";
import CMS from "./pages/cms/cms.page";
import Home from "./pages/home/home.page";
import router from './routers/router'
const App: React.FC = () => {
  return (
    <>
      <div className="w-full h-full">
        {/* <Routes>
          <Route path="/" element={<CMS />}></Route>
          <Route path="/cms" element={<CMS />}></Route>
          <Route path="/home" element={<Home />}></Route>
        </Routes>
        <Outlet></Outlet> */}
      </div>
    </>
  );
};

export default App;
