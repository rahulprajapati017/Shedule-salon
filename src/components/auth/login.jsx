    // src/components/LoginForm.jsx
    import React, { useState } from 'react';

    function LoginForm() {
      const [username, setUsername] = useState('');
      const [password, setPassword] = useState('');

      const handleSubmit = (e) => {
        e.preventDefault();
        // Handle login logic here (e.g., send data to an API)
        console.log('Username:', username);
        console.log('Password:', password);
        alert('Login attempt!');
      };

      return (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit">Login</button>
        </form>
      );
    }

    export default LoginForm;