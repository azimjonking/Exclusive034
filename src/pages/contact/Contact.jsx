import "./Contact.css";
import { IoCallOutline } from "react-icons/io5";
import { FaRegEnvelope } from "react-icons/fa6";

const Contact = () => {
  return (
    <div className="container contact">
      <div className="contact-connect">
        <div className="call">
          <div className="call-header">
            <div className="icon">
              <IoCallOutline />
            </div>
            <h3>Call To Us</h3>
          </div>
          <p>We are available 24/7, 7 days a week.</p>
          <a href="tel:1122">Phone: +8801611112222</a>
        </div>

        <div className="line"></div>

        <div className="write">
          <div className="write-header">
            <div className="icon">
              <FaRegEnvelope />
            </div>
            <h3>Write To Us</h3>
          </div>
          <p>Fill out our form and we will contact you within 24 hours.</p>
          <a href="mailto:example@gmail.com">Emails: customer@exclusive.com</a>
          <a href="mailto:example@gmail.com">Emails: support@exclusive.com</a>
        </div>
      </div>

      <form>
        <div className="form-group">
          <input type="text" className="name" placeholder="Your Name *" />
          <input type="email" className="email" placeholder="Your Email *" />
          <input type="tel" className="tel" placeholder="Your Phone *" />
        </div>
        <textarea
          name="message"
          id="message"
          placeholder="Your Massage"
        ></textarea>
        <button>Send Massage</button>
      </form>
    </div>
  );
};

export default Contact;
