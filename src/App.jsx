import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import { ToastContainer } from 'react-toastify'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <ToastContainer/>
    </>
  )
}

export default App
