import "./Team.css";
import { FiTwitter } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";

const Team = () => {
  return (
    <div className='container team'>

      <div className="worker">
        <div className="img">
          <img src="./src/assets/worker1.png" alt="Tom Cruise" />
        </div>
        <h3>Tom Cruise</h3>
        <p>Founder & Chairman</p>
        <ul>
          <li>
            <a href="https://x.com/" target="_blank">
              <FiTwitter />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/" target="_blank">
              <FaInstagram />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/" target="_blank">
              <FaLinkedinIn />
            </a>
          </li>
        </ul>
      </div>

      <div className="worker">
        <div className="img">
          <img src="./src/assets/worker2.png" alt="Emma Watson" />
        </div>
        <h3>Emma Watson</h3>
        <p>Managing Director</p>
        <ul>
          <li>
            <a href="https://x.com/" target="_blank">
              <FiTwitter />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/" target="_blank">
              <FaInstagram />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/" target="_blank">
              <FaLinkedinIn />
            </a>
          </li>
        </ul>
      </div>

      <div className="worker">
        <div className="img">
          <img src="./src/assets/worker3.png" alt="Will Smith" />
        </div>
        <h3>Will Smith</h3>
        <p>Product Designer</p>
        <ul>
          <li>
            <a href="https://x.com/" target="_blank">
              <FiTwitter />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/" target="_blank">
              <FaInstagram />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/" target="_blank">
              <FaLinkedinIn />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Team;
