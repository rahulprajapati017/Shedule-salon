import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout.jsx'
import Salon from './pages/salon.jsx'
import Home from './pages/home.jsx'
import { Login } from './index.js'


function App() {
  return (
    <div >
      <Routes >
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
        <Route path="/salon" element={<Salon />} />
        </Route>
      <Route path="/login" element={<Login />} />
      </Routes>
      
    </div>
  )
}

export default App