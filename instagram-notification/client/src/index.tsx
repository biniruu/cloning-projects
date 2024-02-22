import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { StoreProvider } from 'utils/context'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <StrictMode>
    <StoreProvider>
      <Router>
        <Routes>
          <Route path="/" />
        </Routes>
      </Router>
    </StoreProvider>
  </StrictMode>,
)
