import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Navbar from "./components/NavBar"
import Login from "./pages/Login"

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About/> } />
      <Route path="login" element={<Login />} />
    </Routes>
    </>
  )
}

export default App
