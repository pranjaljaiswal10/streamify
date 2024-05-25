import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import SideBar from "./components/SideBar";


const Layout = () => {
  

  return (
    <Provider store={appStore}>
      <Header />
      <div className="md:flex">
      <SideBar/>
      <Outlet />
      </div>
    </Provider>
  );
};
export default Layout;
