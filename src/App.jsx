import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home/Home"
import MainLayout from "./components/layouts/MainLayout"
import Login from "./pages/auth/Login"
import Register from "./pages/auth/Register"
import Blog from "./pages/Blog/Blog"
import Location from "./pages/Location/Location"
import Services from "./pages/Services/Services"
import ForgotPassword from "./pages/auth/ForgotPassword"
import Consultation from "./pages/Consultation/Consultation"

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/consultation" element={<Consultation />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/location" element={<Location />} />
          <Route path="/sign-in" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
