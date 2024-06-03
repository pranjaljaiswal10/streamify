import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import SideBar from "./components/SideBar";
import { lazy } from "react";


export const MainContainer= lazy(()=>import("./components/MainContainer.jsx"))
export const WatchPage=lazy(()=>import("./components/WatchPage.jsx"))
export const SearchContainer=lazy(()=>import("./components/SearchContainer.jsx"))
export const ExploreComponent=lazy(()=>import("./components/ExploreComponent.jsx"))



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
