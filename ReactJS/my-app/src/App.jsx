import './App.css'
import Navbar from './component/Navbar'
import Home from './pages/Home';
import ProductPage from './pages/ProductPage'
import Projects from './pages/Projects';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import { BrowserRouter , Routes , Route } from "react-router-dom";
import Profile from './pages/Profile'
import Settings from './pages/Settings';
import NotFoundPage from './pages/NotFoundPage';
import { Chessboard } from 'react-chessboard';

function App() {

  return (
    // <BrowserRouter>
    // <Navbar />
    //   <Routes>
    //     <Route path="/" element={<Login />} />
    //     <Route path="/product" element={<ProductPage />} /> 
    //     <Route path="/dashboard" element={<Dashboard />} /> 
    //     <Route path="/profile" element={<Profile />} />
    //     <Route path="/settings" element={<Settings />} />
    //     <Route path="/projects" element={<Projects />} />
    //     <Route path="*" element={<NotFoundPage />} />
    //   </Routes>
    // </BrowserRouter>
    <Chessboard />
  )
}

export default App
