import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Welcome to the To-Do List App</h1>
      <Link to="/signin">Sign In</Link>
      <br />
      <Link to="/signup">Sign Up</Link>
    </div>
  );
};

export default Home;
