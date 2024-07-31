import "./Error.css";
import {Link} from "react-router-dom"

const Error = () => {
  return (
    <section className="error container">
      <h1>404 Not Found</h1>
      <p>Your visited page not found. You may go home page.</p>
      <Link to="/">Back to home page</Link>
    </section>
  );
};

export default Error;
