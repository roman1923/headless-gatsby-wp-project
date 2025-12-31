import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import Seo from "../components/Seo"

const IndexPage = () => {
  return (
    <Layout>
      <Seo title="Home" description="Find and connect with talented WordPress developers" />
      
      <section style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        padding: '4rem 2rem',
        textAlign: 'center'
      }}>
        <h1 style={{
          fontSize: '3rem',
          marginBottom: '1rem',
          fontWeight: 'bold'
        }}>WordPress Developers</h1>
        <p style={{
          fontSize: '1.2rem',
          marginBottom: '2rem',
          opacity: 0.9
        }}>
          Find and connect with talented WordPress developers from around the world
        </p>
        <Link 
          to="/developers"
          style={{
            background: '#007cba',
            color: 'white',
            padding: '1rem 2rem',
            borderRadius: '8px',
            textDecoration: 'none',
            fontWeight: '600',
            fontSize: '1.1rem',
            display: 'inline-block'
          }}
        >
          Browse Developers
        </Link>
      </section>

      <section style={{
        padding: '4rem 2rem',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <h2 style={{ 
          textAlign: "center", 
          marginBottom: "1rem", 
          fontSize: "2.5rem", 
          color: "#333" 
        }}>
          Why Choose Our Platform?
        </h2>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          marginTop: '2rem'
        }}>
          <div style={{
            textAlign: 'center',
            padding: '2rem',
            borderRadius: '8px',
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
            background: 'white'
          }}>
            <div style={{
              fontSize: '3rem',
              marginBottom: '1rem'
            }}>👥</div>
            <h3 style={{
              fontSize: '1.5rem',
              marginBottom: '1rem',
              color: '#333'
            }}>Verified Developers</h3>
            <p style={{
              color: '#666',
              lineHeight: '1.6'
            }}>
              All developers are verified and have proven experience with WordPress development.
            </p>
          </div>
          
          <div style={{
            textAlign: 'center',
            padding: '2rem',
            borderRadius: '8px',
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
            background: 'white'
          }}>
            <div style={{
              fontSize: '3rem',
              marginBottom: '1rem'
            }}>🔍</div>
            <h3 style={{
              fontSize: '1.5rem',
              marginBottom: '1rem',
              color: '#333'
            }}>Advanced Search</h3>
            <p style={{
              color: '#666',
              lineHeight: '1.6'
            }}>
              Filter by skills, location, rating, and more to find the perfect developer.
            </p>
          </div>
          
          <div style={{
            textAlign: 'center',
            padding: '2rem',
            borderRadius: '8px',
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
            background: 'white'
          }}>
            <div style={{
              fontSize: '3rem',
              marginBottom: '1rem'
            }}>⭐</div>
            <h3 style={{
              fontSize: '1.5rem',
              marginBottom: '1rem',
              color: '#333'
            }}>Quality Assurance</h3>
            <p style={{
              color: '#666',
              lineHeight: '1.6'
            }}>
              Our rating system ensures you work with the best WordPress developers.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage