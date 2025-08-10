import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { view } from '../../data/allapi';

const Forgotpasswordotpverification = () => {
  const location = useLocation();
  const { email } = location.state || {};
  const navigate = useNavigate();

  const [otp, setOtp] = useState(['', '', '', '']);
  const [timer, setTimer] = useState(60);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  // Redirect user if email is missing
  useEffect(() => {
    if (!email) {
      navigate("/forgotPassword");
    }
  }, [email, navigate]);

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

    // Auto-focus next field if value is entered
    if (value && index < 3) {
      document.getElementById(`otp-${index + 1}`)?.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && otp[index] === "" && index > 0) {
      document.getElementById(`otp-${index - 1}`)?.focus();
    }
  };

  const handleVerify = async (e) => {
    e.preventDefault();
    const finalOtp = otp.join('');

    if (finalOtp.length !== 4 || otp.includes('')) {
      setError("Please enter all 4 digits of the OTP");
      return;
    }

    try {
      const response = await fetch(view.USER_FORGOT_PASSWORD_VERIFICATION, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, otp: finalOtp })
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess(true);
        setError('');
        navigate("/ResetPassword", { state: { email } });
      } else {
        setSuccess(false);
        setError(data.message || "Invalid OTP");
      }
    } catch (err) {
      console.error("OTP verification failed:", err);
      setError("Something went wrong. Please try again.");
    }
  };

  const handleResend = async () => {
    setTimer(60); // Restart timer

    try {
      const response = await fetch(view.USER_RESEND_OTP, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email })
      });

      const data = await response.json();

      if (response.ok) {
        alert("OTP resent to your email 📧");
      } else {
        alert(data.message || "Failed to resend OTP");
      }
    } catch (error) {
      console.error("Error resending OTP:", error);
      alert("Something went wrong while resending OTP");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-pink-100 px-4">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md text-center">
        <h2 className="text-2xl font-bold text-pink-600 mb-4">OTP Verification</h2>
        <p className="text-gray-600 mb-6">
          Enter the 4-digit code sent to your email{" "}
          {email && <span className="font-semibold">({email})</span>}
        </p>

        {error && <p className="text-red-600 mb-4">{error}</p>}
        {success && <p className="text-green-600 mb-4 font-medium">OTP Verified Successfully ✅</p>}

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
                onKeyDown={(e) => handleKeyDown(index, e)}
                className="w-12 h-12 text-center text-xl border border-gray-300 rounded focus:outline-pink-400"
                required
              />
            ))}
          </div>

          <button
            type="submit"
            className="w-full bg-pink-600 hover:bg-pink-700 text-white py-2 rounded disabled:bg-gray-400 disabled:cursor-not-allowed"
            disabled={otp.join('').length !== 4 || otp.includes('')}
          >
            Verify OTP
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
          Go back to{" "}
          <Link to="/forgotPassword" className="text-pink-600 underline">
            Forgot Password
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Forgotpasswordotpverification;
