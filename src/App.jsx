import * as React from "react"
import {Routes, Route} from "react-router-dom"
import Layout from "./components/layout"
import IndexPage from "./components/pages/IndexPage"
import Dashboard from "./components/pages/Dashboard"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout/>} >
        <Route index element={<IndexPage/>} />
        <Route path={'/dashboard'} element={<Dashboard/>} />
      </Route>
    </Routes>
  )
}

export default App
