import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { AuthContextProvider } from './Context/AuthContext'
import { RouterProvider } from 'react-router-dom'
import router from './routes'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <AuthContextProvider>
    <RouterProvider router={router}>
     
          <App />
      
    </RouterProvider>
    </AuthContextProvider>
  </React.StrictMode>,
)
