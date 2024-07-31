import "./Signup.css";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <section className="signup">
      <div className="signup-img">
        <img src="./src/assets/signup.png" alt="Sign Up image" />
      </div>
      <form className="signup-form">
        <h2>Create an account</h2>
        <p>Enter your details below</p>
        <div className="form-group">
          <input type="text" id="name" />
          <label htmlFor="name">Name</label>
        </div>
        <div className="form-group">
          <input type="text" id="email" />
          <label htmlFor="email">Email or Phone Number</label>
        </div>
        <div className="form-group">
          <input type="password" id="password" />
          <label htmlFor="password">Password</label>
        </div>
        <button className="create">Create Account</button>
        <a href="/">
          <img src="./src/assets/icon-google.png" alt="google icon" />
          <span>Sign up with Google</span>
        </a>

        <p className="login-link">
          Already have account? <Link to="/login">Log in</Link>
        </p>
      </form>
    </section>
  );
};

export default Signup;
