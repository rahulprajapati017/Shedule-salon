import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout.jsx'
import Salon from './pages/salon.jsx'
import SalonListing from './pages/SalonListing.jsx'
import Home from './pages/Home.jsx'
import { LoginPage, SignUpPage, ForgotPassword,OTPverificaiton,ResetPassword} from './index.js'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchUser } from './components/Store/reducers/Authreducer.jsx';
import Forgotpasswordotpverification from './components/auth/forgotpasswordotpverification.jsx'
// import { fetchUser } from './components/Store/reducers/Authreducer.jsx'


function App() {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUser());
  });

  return (
    <div >
      <Routes >
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
        <Route path="/salon" element={<Salon />} />
        <Route path="/SalonListing" element={<SalonListing />} />
        </Route>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/forgotPassword" element={<ForgotPassword />} />
      <Route path='/forgototpverification' element={<Forgotpasswordotpverification/>}/>
      <Route path="/otpVerification" element={<OTPverificaiton />} />
      <Route path="/ResetPassword" element={<ResetPassword />} />
      </Routes>
    </div>
  )
}

export default App