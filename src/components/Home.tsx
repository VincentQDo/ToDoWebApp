import React from "react";
import Link from 'next/link';

function Home() {
  return (
    <div>
      <h1>Welcome to the To-Do List App</h1>
      <p>
        <Link href="/signin">
          <button>Sign In</button>
        </Link>{' '}
        or{' '}
        <Link href="/signup">
          <button>Sign Up</button>
        </Link>{' '}
        to start managing your tasks.
      </p>
    </div>
  );
}

export default Home;
