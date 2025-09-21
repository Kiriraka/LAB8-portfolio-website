
import { useState } from "react";
import { Mail, Phone, MapPin, Github } from "lucide-react";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  // validate form
  const validate = () => {
    let tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = "จำเป็นต้องมีชื่อ";
    if (!formData.email.trim()) {
      tempErrors.email = "จำเป็นต้องมีอีเมล";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Invalid email format";
    }
    if (!formData.message.trim()) tempErrors.message = "จำเป็นต้องมีข้อความ";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form submitted:", formData);
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
    }
  };

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">
          มีโครงการอยู่ในใจหรือเปล่า? มาทำงานร่วมกันเถอะ!
        </p>

        <div className="contact-content">
          {/* Left: Contact Info */}
          <div className="contact-info">
            <h3>Contact Information</h3>
            <p>
              <Mail size={18} /> musicben100@gmail.com
            </p>
            <p>
              <Phone size={18} /> 0951358841
            </p>
            <p>
              <MapPin size={18} /> Chiang Mai, Thailand
            </p>

            <div className="social-links">
              <a href="https://github.com/Kiriraka/" target="_blank" rel="noopener noreferrer">
                <Github size={22} />
              </a>
            </div>
          </div>

          {/* Right: Contact Form */}
          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            {submitted && (
              <p className="success-message">✅ Your message has been sent!</p>
            )}

            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
              {errors.name && <span className="error">{errors.name}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
              {errors.email && <span className="error">{errors.email}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                rows="5"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              ></textarea>
              {errors.message && (
                <span className="error">{errors.message}</span>
              )}
            </div>

            <button type="submit" className="btn-primary">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
