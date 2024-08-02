import * as React from "react"
import { ThemeProvider } from "@/components/theme-provider"
import {Routes, Route} from "react-router-dom"
import Layout from "./components/layout"
import IndexPage from "./components/pages/IndexPage"
import Dashboard from "./components/pages/Dashboard"

function App() {

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Routes>
        <Route path="/" element={<Layout/>} >
          <Route index element={<IndexPage/>} />
          <Route path={'/dashboard'} element={<Dashboard/>} />
        </Route>
      </Routes>
    </ThemeProvider>
  )
}

export default App
