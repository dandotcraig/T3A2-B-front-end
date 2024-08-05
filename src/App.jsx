import * as React from "react"
import {Routes, Route} from "react-router-dom"
import Layout from "./components/layout"
import IndexPage from "./components/pages/IndexPage"
import Dashboard from "./components/pages/Dashboard"
import CreateInvoiceModal from "./components/modals/CreateInvoiceModal"
import CreateClientModal from "./components/modals/CreateClientModal"


function App() {
  return (
    
    <Routes>
      <Route path="/" element={<Layout/>} >
        <Route index element={<IndexPage/>} />
        <Route path={'/dashboard'} element={<Dashboard/>} />
        <Route path={'/create/client'} element={<CreateClientModal/>} />
        <Route path={'/create/invoice'} element={<CreateInvoiceModal/>} />
      </Route>
    </Routes>
    
    
    
  )
}

export default App