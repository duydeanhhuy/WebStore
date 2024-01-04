import Button from 'react-bootstrap/Button'
import React, { Fragment } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './redux/slides/counterSlice'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { routes } from './routes'
import HeaderComponent from './components/Header/HeaderComponent'
import DefaultComponent from './components/DefaultComponent/DefaultComponent'
function App () {
  return (
    <div>
      <Router>
        <Routes>
          {routes.map((route, index) => {
             const Page = route.page
             const Layout = !route.isShowHeader ? Fragment : DefaultComponent
             return (
               <Route key={index} path={route.path} element={<Layout>
                                                           <Page/>
                                                         </Layout>} />
             )
           })}
        </Routes>
      </Router>
    </div>
  )
}

export default App
