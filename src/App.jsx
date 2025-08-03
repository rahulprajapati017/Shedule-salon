import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout.jsx'
import { About, Services, TopSalon } from './index.js'
import Home from './pages/Home.jsx'


function App() {
  return (
    <div >
      <Routes >
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
        </Route>
      </Routes>
      
    </div>
  )
}

export default App