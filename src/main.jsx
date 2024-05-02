import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout.jsx'
import WatchPage from "./components/WatchPage.jsx"
import SearchContainer from './components/SearchContainer.jsx'
import ExploreComponent from './components/ExploreComponent.jsx'
import MainContainer from './components/MainContainer.jsx'


const router=createBrowserRouter([{
  path:"/",
  element:<Layout/>,
  children:[
    {
      path:"/",
      element:<MainContainer/>
    },{
      path:"/watch",
      element:<WatchPage/>
    },{
      path:"/result",
      element:<SearchContainer/>
    },{
      path:"/explore/:keyword",
      element:<ExploreComponent/>
    }
  ]
}])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
  ,
)
