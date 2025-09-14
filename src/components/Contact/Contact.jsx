// src/components/Contact/Contact.jsx - Template
import './Contact.css';
import { motion } from "framer-motion";
const [loading, setLoading] = useState(false);

function Contact() {
  return (
    <section id="contact" className="contact section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">
          Have a project in mind? Let's work together!
        </p>
        {<motion.section
          id="contact"
          className="contact section"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="section-title"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            Get In Touch
          </motion.h2>
        </motion.section>}
        <div className="contact-placeholder">
          <p>Add contact form here</p>
        </div>
      </div>
    </section>
  );
}

const handleSubmit = (e) => {
  e.preventDefault();
  if (validate()) {
    setLoading(true);
    setTimeout(() => {
      console.log("Form submitted:", formData);
      setSubmitted(true);
      setLoading(false);
      setFormData({ name: "", email: "", message: "" });
    }, 2000); // จำลอง API call
  }
};

<button type="submit" className="btn-primary" disabled={loading}>
  {loading ? "Sending..." : "Send Message"}
</button>
export default Contact;