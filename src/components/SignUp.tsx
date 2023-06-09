import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { signUp } from '../shared/authService';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useRouter();

  const handleSignUp = async () => {
    await signUp(email, password);
    history.push('/tasklist');
  };

  return (
    <div>
      <h1>Sign Up</h1>
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
      <button onClick={handleSignUp}>Sign Up</button>
    </div>
  );
};

export default SignUp;
