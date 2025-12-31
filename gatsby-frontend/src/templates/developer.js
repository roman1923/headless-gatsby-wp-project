import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import Seo from "../components/Seo"

const DeveloperPage = ({ pageContext }) => {
  const developer = pageContext.developer

  if (!developer) {
    return (
      <Layout>
        <Seo title="Developer Not Found" description="Developer profile not found" />
        <div style={{ textAlign: 'center', padding: '2rem' }}>
          <h1>Developer Not Found</h1>
          <p>The developer you&apos;re looking for doesn&apos;t exist.</p>
          <Link to="/developers">← Back to Developers</Link>
        </div>
      </Layout>
    )
  }

  return (
    <Layout>
      <Seo 
        title={developer.developerInfo?.fullName || developer.title} 
        description={`Profile of ${developer.developerInfo?.fullName || developer.title}`} 
      />
      <div style={{
        maxWidth: '800px',
        margin: '0 auto',
        padding: '2rem'
      }}>
        <Link 
          to="/developers"
          style={{
            display: 'inline-block',
            marginBottom: '2rem',
            color: '#1976d2',
            textDecoration: 'none'
          }}
        >
          ← Back to Developers
        </Link>
        
        <div style={{
          background: 'white',
          borderRadius: '8px',
          padding: '2rem',
          boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '2rem',
            gap: '2rem'
          }}>
            <div style={{
              width: '120px',
              height: '120px',
              borderRadius: '50%',
              overflow: 'hidden',
              background: '#f0f0f0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '4rem'
            }}>
              👤
            </div>
            <div style={{ flex: 1 }}>
              <h1 style={{
                fontSize: '2rem',
                marginBottom: '0.5rem'
              }}>{developer.developerInfo?.fullName || developer.title}</h1>
              <p style={{
                color: '#666',
                fontSize: '1.1rem',
                marginBottom: '0.5rem'
              }}>{developer.developerInfo?.location || ""}</p>
              {developer.developerInfo?.rating && (
                <p style={{
                  color: '#666',
                  fontSize: '1.1rem',
                  marginBottom: '0.5rem'
                }}>Rating: {developer.developerInfo.rating}/10</p>
              )}
            </div>
          </div>

          <div style={{ marginBottom: '2rem' }}>
            {developer.content && (
              <div dangerouslySetInnerHTML={{ __html: developer.content }} />
            )}

            {developer.developerInfo?.techStack && developer.developerInfo.techStack.length > 0 && (
              <>
                <h2 style={{
                  marginBottom: '1rem',
                  color: '#333'
                }}>Tech Stack</h2>
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.5rem'
                }}>
                  {developer.developerInfo.techStack.map((tech, index) => (
                    <span 
                      key={index}
                      style={{
                        background: '#e3f2fd',
                        color: '#1976d2',
                        padding: '0.5rem 1rem',
                        borderRadius: '20px',
                        fontSize: '0.9rem'
                      }}
                    >
                      {tech.technology}
                      {tech.skillLevel && tech.skillLevel.length > 0 && ` (${tech.skillLevel.join(', ')})`}
                    </span>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default DeveloperPage