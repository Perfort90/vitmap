import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Profile from "./pages/Profile"
import Header from './components/ui/header';
import Auth from './pages/Auth';



import './App.css'

function App() {
 
  return (
 
        <Router>
          <Header/>
          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/profile" element={<Profile/>}/>
            <Route path='/Auth' element={<Auth/>}/>

           </Routes>
        </Router>

      
    
    
  )
}

export default App
