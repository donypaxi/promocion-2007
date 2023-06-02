import React from 'react'
import ReactDOM from 'react-dom/client'
import './App.css';
import { AppRouter } from './routes/AppRouter.jsx';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <BrowserRouter>
    <React.StrictMode>
      <AppRouter />
    </React.StrictMode>,
  </BrowserRouter>
)
