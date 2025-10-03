import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from "@gravity-ui/uikit";
import "@gravity-ui/uikit/styles/styles.css";
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme="light">
      <App />
    </ThemeProvider>
  </StrictMode>,
)
