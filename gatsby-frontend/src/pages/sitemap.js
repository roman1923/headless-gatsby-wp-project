import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

const SitemapPage = () => {
  return (
    <Layout>
      <Seo title="Sitemap" description="Site map and navigation" />
      <div style={{
        maxWidth: '800px',
        margin: '0 auto',
        padding: '2rem'
      }}>
        <h1 style={{
          fontSize: '2.5rem',
          marginBottom: '2rem',
          textAlign: 'center'
        }}>Sitemap</h1>
        
        <div style={{
          background: 'white',
          borderRadius: '8px',
          padding: '2rem',
          boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)'
        }}>
          <h2 style={{
            fontSize: '1.5rem',
            marginBottom: '1rem',
            color: '#333'
          }}>Main Pages</h2>
          <ul style={{
            listStyle: 'none',
            padding: 0
          }}>
            <li style={{ marginBottom: '0.5rem' }}>
              <a href="/" style={{
                color: '#1976d2',
                textDecoration: 'none',
                fontSize: '1.1rem'
              }}>Home</a>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <a href="/developers" style={{
                color: '#1976d2',
                textDecoration: 'none',
                fontSize: '1.1rem'
              }}>Developers</a>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <a href="/contact" style={{
                color: '#1976d2',
                textDecoration: 'none',
                fontSize: '1.1rem'
              }}>Contact</a>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <a href="/privacy" style={{
                color: '#1976d2',
                textDecoration: 'none',
                fontSize: '1.1rem'
              }}>Privacy Policy</a>
            </li>
          </ul>

          <h2 style={{
            fontSize: '1.5rem',
            marginBottom: '1rem',
            marginTop: '2rem',
            color: '#333'
          }}>Developer Categories</h2>
          <ul style={{
            listStyle: 'none',
            padding: 0
          }}>
            <li style={{ marginBottom: '0.5rem' }}>
              <a href="/developers?skill=frontend" style={{
                color: '#1976d2',
                textDecoration: 'none',
                fontSize: '1.1rem'
              }}>Frontend Developers</a>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <a href="/developers?skill=backend" style={{
                color: '#1976d2',
                textDecoration: 'none',
                fontSize: '1.1rem'
              }}>Backend Developers</a>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <a href="/developers?skill=fullstack" style={{
                color: '#1976d2',
                textDecoration: 'none',
                fontSize: '1.1rem'
              }}>Full Stack Developers</a>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <a href="/developers?skill=wordpress" style={{
                color: '#1976d2',
                textDecoration: 'none',
                fontSize: '1.1rem'
              }}>WordPress Specialists</a>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <a href="/developers?skill=php" style={{
                color: '#1976d2',
                textDecoration: 'none',
                fontSize: '1.1rem'
              }}>PHP Developers</a>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <a href="/developers?skill=react" style={{
                color: '#1976d2',
                textDecoration: 'none',
                fontSize: '1.1rem'
              }}>React Developers</a>
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  )
}

export default SitemapPage
