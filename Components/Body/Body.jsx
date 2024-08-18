import React from 'react'
import Login from '../Login/Login'
import Browser from '../Browser/Browser'
import{RouterProvider, createBrowserRouter} from 'react-router-dom'
 const Body = () => {
  const appRout=createBrowserRouter([
    {
        path:"/",
        element:<Login/>
    },
    {
        path:"/Browser",
        element:<Browser/>
    },
  ])
  return (
    <div>
        <RouterProvider router={appRout}/>
    </div>
  )
}
export default Body