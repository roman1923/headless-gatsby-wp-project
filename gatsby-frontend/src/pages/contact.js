import React, { useState } from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import { initialFormData, handleFormChange, handleFormSubmit, contactInfo } from "../utils/contact"
import "../styles/templates/contact.css"

const ContactPage = () => {
  const [formData, setFormData] = useState(initialFormData)

  return (
    <Layout>
      <Seo title="Contact Us" description="Get in touch with us" />
      <div className="contact-container">
        <h1 className="contact-title">Contact Us</h1>
        
        <div className="contact-grid">
          <div className="contact-card">
            <h2 className="contact-card-title">Get in Touch</h2>
            <p className="contact-info">
              Have a question about our developers or need help finding the right person for your project? 
              We&apos;re here to help!
            </p>
            
            <div className="contact-info">
              <strong>Email:</strong> 
              <a href={`mailto:${contactInfo.email}`} className="contact-link">{contactInfo.email}</a>
            </div>
            
            <div className="contact-info">
              <strong>Phone:</strong> 
              <a href={`tel:${contactInfo.phone}`} className="contact-link">{contactInfo.phone}</a>
            </div>
            
            <div className="contact-info">
              <strong>Address:</strong> 
              <span className="contact-link">
                {contactInfo.address.street}<br />
                {contactInfo.address.city}
              </span>
            </div>
          </div>

          <div className="contact-card">
            <h2 className="contact-card-title">Send us a Message</h2>
            
            <form onSubmit={(e) => handleFormSubmit(e, formData, setFormData)}>
              <div className="contact-info">
                <label className="contact-label">
                  Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={(e) => handleFormChange(e, formData, setFormData)}
                  required
                  className="contact-input"
                />
              </div>

              <div className="contact-info">
                <label className="contact-label">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={(e) => handleFormChange(e, formData, setFormData)}
                  required
                  className="contact-input"
                />
              </div>

              <div className="contact-info">
                <label className="contact-label">
                  Subject *
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={(e) => handleFormChange(e, formData, setFormData)}
                  required
                  className="contact-input"
                />
              </div>

              <div className="contact-info">
                <label className="contact-label">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={(e) => handleFormChange(e, formData, setFormData)}
                  required
                  rows="4"
                  className="contact-textarea"
                />
              </div>

              <button
                type="submit"
                className="contact-submit"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ContactPage
