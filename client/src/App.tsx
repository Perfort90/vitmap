import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Profile from "./pages/Profile"

import './App.css'

function App() {
 
  return (
 
        <Router>
          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/profile" element={<Profile/>}/>

           </Routes>
        </Router>

      
    
    
  )
}

export default App
