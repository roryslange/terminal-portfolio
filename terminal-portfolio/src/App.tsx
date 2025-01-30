import Home from './components/Home/home'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/enter' />
      </Routes>
    </BrowserRouter>
  )
}

export default App
