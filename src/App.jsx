
import './App.css'
import Sidebar from './components/Sidebar.jsx'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from './pages/Dashboard.jsx'
import Report from './pages/Report.jsx'
import Navbar from './components/Navbar.jsx'

function App() {
  return (
    <Router>
      <div className="d-flex" style={{ minHeight: '100vh' }}>
        <Sidebar />
        <div className="flex-grow-1 d-flex flex-column" style={{width:'100%'}}> 
          <Navbar />
          <div className="flex-grow-1 p-3" style={{ overflowY: 'auto' }}>
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/report" element={<Report />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  )
}

export default App;
