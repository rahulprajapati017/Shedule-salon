import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const OtpVerification = () => {
  const [otp, setOtp] = useState(['', '', '', '']);
  const [timer, setTimer] = useState(60); // 60 seconds
  const navigate = useNavigate();

  // Countdown Timer
  useEffect(() => {
    if (timer === 0) return;
    const interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
    return () => clearInterval(interval);
  }, [timer]);

  const handleChange = (index, value) => {
    if (!/^\d?$/.test(value)) return; // allow only digits

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus next input
    if (value && index < 3) {
      document.getElementById(`otp-${index + 1}`).focus();
    }
  };

  const handleVerify = (e) => {
    e.preventDefault();
    const finalOtp = otp.join('');
    console.log("Entered OTP:", finalOtp);

    if (finalOtp.length !== 4) {
      alert("Please enter all 4 digits of the OTP");
      return;
    }

    // Here, you would verify OTP using API
    alert("OTP Verified Successfully ✅");
    navigate("/reset-password"); // Optional step after verifying
  };

  const handleResend = () => {
    setTimer(60);
    alert("OTP resent to your email 📧");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-pink-100 px-4">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md text-center">
        <h2 className="text-2xl font-bold text-pink-600 mb-4">OTP Verification</h2>
        <p className="text-gray-600 mb-6">Enter the 4-digit code sent to your email</p>

        <form onSubmit={handleVerify} className="space-y-6">
          <div className="flex justify-center space-x-4">
            {otp.map((digit, index) => (
              <input
                key={index}
                id={`otp-${index}`}
                type="text"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                className="w-12 h-12 text-center text-xl border border-gray-300 rounded focus:outline-pink-400"
              />
            ))}
          </div>

          <NavLink
            to="/ResetPassword"
            className="w-full bg-pink-600 hover:bg-pink-700 text-white py-2 rounded"
            
          >
            Verify OTP

            </NavLink>  
          <button
            type="submit"
          >
          </button>
        </form>

        {timer > 0 ? (
          <p className="text-sm mt-4 text-gray-500">Resend OTP in {timer}s</p>
        ) : (
          <button onClick={handleResend} className="mt-4 text-pink-600 underline text-sm">
            Resend OTP
          </button>
        )}

        <p className="mt-4 text-sm">
          Go back to{' '}
          <Link to="/forgot-password" className="text-pink-600 underline">
            Forgot Password
          </Link>
        </p>
      </div>
    </div>
  );
};

export default OtpVerification;
