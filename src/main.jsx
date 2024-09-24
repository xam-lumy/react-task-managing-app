import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from '@mui/material'
import App from './App.jsx'
import './index.css'
import theme from './theme'
import { BrowserRouter } from 'react-router-dom'
import { UserProvider } from './Context/UserContext.jsx'
import { Provider } from 'react-redux'
import { persistor, store } from './Redux/store.js'
import { PersistGate } from 'redux-persist/integration/react'


createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </PersistGate>
  </Provider>
)
