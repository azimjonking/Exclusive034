import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <section className="login">
      <div className="login-img">
        <img src="./src/assets/signup.png" alt="Login Up image" />
      </div>
      <form className="login-form">
        <h2>Log in to Exclusive</h2>
        <p>Enter your details below</p>
        <div className="form-group">
          <input type="text" id="email" />
          <label htmlFor="email">Email or Phone Number</label>
        </div>
        <div className="form-group">
          <input type="password" id="password" />
          <label htmlFor="password">Password</label>
        </div>
        <div className="form-btns">
          <button className="login-btn">Log in</button>
          <Link to="/forgetpassword">Forget Password?</Link>
        </div>
        <p className="signup-link">
          Don't you have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </form>
    </section>
  );
};

export default Login;
