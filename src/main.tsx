import { createRoot } from 'react-dom/client'

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.js"
import "@fortawesome/fontawesome-free/css/all.min.css"

import './index.css'
import App from './App.tsx'
import AuthContextProvider from './Components/Context/AuthContext.tsx'

createRoot(document.getElementById('root')!).render(

    <AuthContextProvider>
    <App />
    </AuthContextProvider>
    
  
)
