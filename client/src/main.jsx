import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { AuthContextProvider } from './Context/AuthContext'
import { RouterProvider } from 'react-router-dom'
import { QueryClient,QueryClientProvider } from '@tanstack/react-query'
import router from './routes'
import './index.css'


const queryclient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryclient}>
     <AuthContextProvider>
    <RouterProvider router={router}>
     
          <App />
      
    </RouterProvider>
    </AuthContextProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
