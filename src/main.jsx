import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'
import './index.css'
import App from './App.jsx'
import Instructions from './views/instructions/Instructions.jsx'
import Categories from './views/categories/Categories.jsx'
import Play from './views/play/Play.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}></Route>
        <Route path='/instructions' element={<Instructions />}></Route>
        <Route path='/categories' element={<Categories />}></Route>
        <Route path='/play/:category' element={<Play />}></Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
