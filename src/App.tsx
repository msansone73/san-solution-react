import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Navbar from "./components/NavBar"
import Login from "./pages/Login"
import Users from "./pages/Users"

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About/> } />
      <Route path="login" element={<Login />} />
      <Route path="user" element={<Users/>} />
    </Routes>
    </>
  )
}

export default App
