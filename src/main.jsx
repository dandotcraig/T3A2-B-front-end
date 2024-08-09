import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from "@/components/theme-provider"
import { UserContextProvider } from "./context/UserContext"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <UserContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
        </UserContextProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
