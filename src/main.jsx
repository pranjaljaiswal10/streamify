import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout.jsx'
import Body from './components/Body.jsx'
import WatchPage from "./components/WatchPage.jsx"
import ExploreComponent from './components/ExploreComponent.jsx'


const router=createBrowserRouter([{
  path:"/",
  element:<Layout/>,
  children:[
    {
      path:"/",
      element:<Body/>
    },{
      path:"/watch",
      element:<WatchPage/>
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
