
import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Layout.jsx'
import { Suspense } from 'react'
import WatchPageShimmer from './components/WatchPageShimmer.jsx'
import HomePageShimmer from './components/HomePageShimmer.jsx'
import { ImSpinner8 } from 'react-icons/im'
import { lazy } from "react";
import MainContainer from './components/MainContainer.jsx';
import WatchPage from './components/WatchPage.jsx';
import SearchContainer from './components/SearchContainer.jsx';
import ExploreComponent from './components/ExploreComponent.jsx';


// const MainContainer= lazy(()=>import("./components/MainContainer.jsx"))
// const WatchPage=lazy(()=>import("./components/WatchPage.jsx"))
// const SearchContainer=lazy(()=>import("./components/SearchContainer.jsx"))
// const ExploreComponent=lazy(()=>import("./components/ExploreComponent.jsx"))


const router=createBrowserRouter([{
    path:"/",
    element:<Layout/>,
    children:[
      {
        path:"/",
        element:(
        //   <Suspense fallback={<HomePageShimmer/>}>
        //   </Suspense>
           <MainContainer/> 
        )
      },{
        path:"/watch",
        element:(
        //   <Suspense fallback={<WatchPageShimmer/>}> 
        //   </Suspense>
          <WatchPage/>
        )
      },{
        path:"/result",
        element:(
        //   <Suspense fallback={<div className=" flex flex-wrap justify-center items-center h-screen w-screen">
        //   <ImSpinner8 className="w-16 h-16 text-gray-600 animate-spin fill-blue-600" />
        // </div>}>
        //   </Suspense>
           <SearchContainer/> 
        )
       
      },{
        path:"/explore/:keyword",
        element:(
        //   <Suspense fallback={<HomePageShimmer/>}>
        //   </Suspense>
          <ExploreComponent/>
        )
      }
    ]
  }])
  

export default function App(){
    return  <RouterProvider router={router}/>
}
