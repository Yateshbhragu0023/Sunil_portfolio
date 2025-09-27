import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import WebsiteLayout from './website/WebsiteLayout'
import Home from './website/pages/Home'
import Faq from './website/pages/Faq'

export default function App() {

  const routes = createBrowserRouter(
    [
      {
        path: "/",
        element : <WebsiteLayout/>,
        children : [
          {
            path : "",
            element : <Home/>
          },
          {
            path : "/blog",
            element : <Faq/>
          }
        ]

      }
    ]
  )

  return (
    <>
    <RouterProvider router={routes}/>
    </>
  )
}
