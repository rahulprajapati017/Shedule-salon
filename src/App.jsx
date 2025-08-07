import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout.jsx'
import Salon from './pages/salon.jsx'
import Home from './pages/home.jsx'
import { LoginPage, SignUpPage} from './index.js'


function App() {
  return (
    <div >
      <Routes >
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
        <Route path="/salon" element={<Salon />} />
        </Route>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      </Routes>
      
    </div>
  )
}

export default App