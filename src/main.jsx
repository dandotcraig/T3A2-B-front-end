import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from "@/components/theme-provider"
import { UserContextProvider } from "./context/UserContext"
import { TotalContextProvider } from './context/TotalContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <UserContextProvider>
        <TotalContextProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
          </TotalContextProvider>
        </UserContextProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
