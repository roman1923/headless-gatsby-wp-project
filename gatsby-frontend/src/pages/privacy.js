import React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"

const PrivacyPage = () => {
  return (
    <Layout>
      <Seo title="Privacy Policy" description="Privacy policy and data protection" />
      <div style={{
        maxWidth: '800px',
        margin: '0 auto',
        padding: '2rem'
      }}>
        <h1 style={{
          fontSize: '2.5rem',
          marginBottom: '2rem',
          textAlign: 'center'
        }}>Privacy Policy</h1>
        
        <div style={{
          background: 'white',
          borderRadius: '8px',
          padding: '2rem',
          boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
          lineHeight: '1.6'
        }}>
          <h2 style={{
            fontSize: '1.5rem',
            marginBottom: '1rem',
            color: '#333'
          }}>Information We Collect</h2>
          <p style={{ marginBottom: '1rem' }}>
            We collect information you provide directly to us, such as when you create an account, 
            update your profile, or contact us for support.
          </p>

          <h2 style={{
            fontSize: '1.5rem',
            marginBottom: '1rem',
            marginTop: '2rem',
            color: '#333'
          }}>How We Use Your Information</h2>
          <p style={{ marginBottom: '1rem' }}>
            We use the information we collect to provide, maintain, and improve our services, 
            process transactions, and communicate with you.
          </p>

          <h2 style={{
            fontSize: '1.5rem',
            marginBottom: '1rem',
            marginTop: '2rem',
            color: '#333'
          }}>Information Sharing</h2>
          <p style={{ marginBottom: '1rem' }}>
            We do not sell, trade, or otherwise transfer your personal information to third parties 
            without your consent, except as described in this privacy policy.
          </p>

          <h2 style={{
            fontSize: '1.5rem',
            marginBottom: '1rem',
            marginTop: '2rem',
            color: '#333'
          }}>Data Security</h2>
          <p style={{ marginBottom: '1rem' }}>
            We implement appropriate security measures to protect your personal information against 
            unauthorized access, alteration, disclosure, or destruction.
          </p>

          <h2 style={{
            fontSize: '1.5rem',
            marginBottom: '1rem',
            marginTop: '2rem',
            color: '#333'
          }}>Contact Us</h2>
          <p style={{ marginBottom: '1rem' }}>
            If you have any questions about this Privacy Policy, please contact us at 
            <a href="mailto:privacy@wordpressdevelopers.com" style={{
              color: '#1976d2',
              textDecoration: 'none'
            }}> privacy@wordpressdevelopers.com</a>
          </p>

          <p style={{
            fontSize: '0.9rem',
            color: '#666',
            marginTop: '2rem',
            fontStyle: 'italic'
          }}>
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default PrivacyPage
