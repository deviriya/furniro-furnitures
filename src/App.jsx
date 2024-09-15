import { Fragment, useEffect } from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import PageLayout from './components/Layout/pageLayout'
import Home from './pages/Home'
import AddtoCart from './pages/Cart/addtoCart'

function App() {

  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<PageLayout />}>
        <Route index element={<Home />} />
        <Route path='/addtocart' element={<AddtoCart />} />
      </Route>
    )
  )

  return (
    <Fragment>
      <RouterProvider router={routes} />
    </Fragment>
  )
}

export default App
