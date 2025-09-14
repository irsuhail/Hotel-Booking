<<<<<<< HEAD
=======
import { StrictMode } from 'react'
>>>>>>> d07792d39304ee2987ae2083b0117e9192edd37f
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
<<<<<<< HEAD
import { AppProvider } from './context/AppContext.jsx'
=======
>>>>>>> d07792d39304ee2987ae2083b0117e9192edd37f
import { ClerkProvider } from '@clerk/clerk-react'

// Import your Publishable Key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error('Add your Clerk Publishable Key to the .env file')
}

createRoot(document.getElementById('root')).render(
  <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
<<<<<<< HEAD
    <BrowserRouter>
      <AppProvider>
        <App />
      </AppProvider>
    </BrowserRouter>
  </ClerkProvider>
)
=======
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </ClerkProvider>,
)
>>>>>>> d07792d39304ee2987ae2083b0117e9192edd37f
