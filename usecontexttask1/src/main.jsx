import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import UsersProvider from './provider/UsersProvider.jsx'

createRoot(document.getElementById('root')).render(
  <UsersProvider>
    <App />
  </UsersProvider>
)
