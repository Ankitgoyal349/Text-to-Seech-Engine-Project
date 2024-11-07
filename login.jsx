import React from 'react';
import './Login.css';

const Login = () => {
  return (
    <section className="login-section">
      <div className="login-container">
        <h2>Login to Your Account</h2>
        <form action="/dashboard" method="post">
          <div className="input-group">
            <label htmlFor="username"><i className="fa fa-user"></i> Username</label>
            <input type="text" id="username" name="username" required />
          </div>
          <div className="input-group">
            <label htmlFor="password"><i className="fa fa-lock"></i> Password</label>
            <input type="password" id="password" name="password" required />
          </div>
          <button type="submit" className="btn" id="login">Login</button>
        </form>
        <p>Don't have an account? <a href="/register">Sign up</a></p>
      </div>
    </section>
  );
};

export default Login;
