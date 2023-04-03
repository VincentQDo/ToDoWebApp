import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { signIn } from '../shared/authService';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleSignIn = async () => {
    const isAuthenticated = await signIn(email, password);
    if (isAuthenticated) {
      history.push('/tasks');
    } else {
      alert('Invalid email or password');
    }
  };

  return (
    <div>
      <h1>Sign In</h1>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <br />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <br />
      <button onClick={handleSignIn}>Sign In</button>
    </div>
  );
};

export default SignIn;