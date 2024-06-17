
import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Layout.jsx'
import { Suspense } from 'react'
import WatchPageShimmer from './components/WatchPageShimmer.jsx'
import HomePageShimmer from './components/HomePageShimmer.jsx'
import { ImSpinner8 } from 'react-icons/im'
import { lazy } from "react";

const MainContainer= lazy(()=>import("./components/MainContainer.jsx"))
const WatchPage=lazy(()=>import("./components/WatchPage.jsx"))
const SearchContainer=lazy(()=>import("./components/SearchContainer.jsx"))
const ExploreComponent=lazy(()=>import("./components/ExploreComponent.jsx"))


const router=createBrowserRouter([{
    path:"/",
    element:<Layout/>,
    children:[
      {
        path:"/",
        element:(
          <Suspense fallback={<HomePageShimmer/>}>
            <MainContainer/> 
          </Suspense>
        )
      },{
        path:"/watch",
        element:(
          <Suspense fallback={<WatchPageShimmer/>}> 
          <WatchPage/>
          </Suspense>
        )
      },{
        path:"/result",
        element:(
          <Suspense fallback={<div className=" flex flex-wrap justify-center items-center h-screen w-screen">
          <ImSpinner8 className="w-16 h-16 text-gray-600 animate-spin fill-blue-600" />
        </div>}>
        <SearchContainer/> 
          </Suspense>
        )
       
      },{
        path:"/explore/:keyword",
        element:(
          <Suspense fallback={<HomePageShimmer/>}>
            <ExploreComponent/>
          </Suspense>
        )
      }
    ]
  }])
  

export default function App(){
    return  <RouterProvider router={router}/>
}
