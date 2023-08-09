import { useState } from 'react'

import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import Home from './Pages/Home/Home'
import Layout from './Components/LayoutElements/Layout/Layout'
import "./App.scss"

function App() {

  const router= createBrowserRouter(createRoutesFromElements(
    <Route element={<Layout/>}>
      <Route index element ={<Home/>}/>   
    </Route>
  ))

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
