import { RouterProvider, Outlet } from "react-router-dom";
import router from "./routes/route";

const App: React.FC = () => {
  return (
    <>
      <div className="w-full h-full">
          <RouterProvider router={router} />
          {/* <Routes>
            <Route path="/" element={<Root />}></Route>
            <Route path="/cms" element={<CMS />}></Route>
            <Route path="/home" element={<Home />}></Route>
          </Routes> */}
        <Outlet></Outlet>
      </div>
    </>
  );
};

export default App;
