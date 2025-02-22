import Home from './components/Home/home'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.scss'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/entry' />
      </Routes>
    </BrowserRouter>
  )
}

export default App
