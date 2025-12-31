import React, { useState, useMemo } from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import DeveloperFilters from "../components/DeveloperFilters"

const DevelopersPage = () => {
  const [filterSkill, setFilterSkill] = useState("")
  const [filterLocation, setFilterLocation] = useState("")
  const [filterRating, setFilterRating] = useState("")

  // Mock data for testing
  const allDevelopers = [
    {
      id: "1",
      title: "John Doe",
      developerInfo: {
        fullName: "John Doe",
        location: "New York, USA",
        rating: 5,
        techStack: [
          { technology: "WordPress", skillLevel: ["Expert"] },
          { technology: "PHP", skillLevel: ["Advanced"] },
          { technology: "JavaScript", skillLevel: ["Intermediate"] }
        ]
      }
    },
    {
      id: "2", 
      title: "Jane Smith",
      developerInfo: {
        fullName: "Jane Smith",
        location: "London, UK",
        rating: 4,
        techStack: [
          { technology: "WordPress", skillLevel: ["Advanced"] },
          { technology: "React", skillLevel: ["Expert"] },
          { technology: "Node.js", skillLevel: ["Intermediate"] }
        ]
      }
    },
    {
      id: "3",
      title: "Mike Johnson", 
      developerInfo: {
        fullName: "Mike Johnson",
        location: "Toronto, Canada",
        rating: 5,
        techStack: [
          { technology: "WordPress", skillLevel: ["Expert"] },
          { technology: "Vue.js", skillLevel: ["Advanced"] },
          { technology: "Python", skillLevel: ["Intermediate"] }
        ]
      }
    }
  ]

  // Extract available skills and locations
  const availableSkills = useMemo(() => {
    const skills = new Set()
    allDevelopers.forEach((dev) => {
      dev.developerInfo?.techStack?.forEach((tech) => {
        tech.skillLevel?.forEach((level) => {
          if (level) skills.add(level)
        })
      })
    })
    return Array.from(skills).sort()
  }, [allDevelopers])

  const availableLocations = useMemo(() => {
    const locations = new Set()
    allDevelopers.forEach((dev) => {
      if (dev.developerInfo?.location) {
        locations.add(dev.developerInfo.location)
      }
    })
    return Array.from(locations).sort()
  }, [allDevelopers])

  // Apply filters
  const filteredDevelopers = useMemo(() => {
    let developers = allDevelopers

    if (filterSkill) {
      developers = developers.filter((dev) =>
        dev.developerInfo?.techStack?.some((tech) =>
          tech.skillLevel?.some((level) =>
            level?.toLowerCase() === filterSkill.toLowerCase()
          )
        )
      )
    }

    if (filterLocation) {
      developers = developers.filter((dev) =>
        dev.developerInfo?.location
          ?.toLowerCase()
          .includes(filterLocation.toLowerCase())
      )
    }

    if (filterRating) {
      const minRating = parseInt(filterRating)
      developers = developers.filter((dev) => {
        const rating = dev.developerInfo?.rating || 0
        return rating >= minRating
      })
    }

    return developers
  }, [allDevelopers, filterSkill, filterLocation, filterRating])

  const clearFilters = () => {
    setFilterSkill("")
    setFilterLocation("")
    setFilterRating("")
  }

  return (
    <Layout>
      <Seo title="Developers" description="Browse WordPress developers" />
      <div className="container py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            WordPress Developers
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find and connect with talented WordPress developers from around the world
          </p>
        </div>
        
        <DeveloperFilters
          filterSkill={filterSkill}
          setFilterSkill={setFilterSkill}
          filterLocation={filterLocation}
          setFilterLocation={setFilterLocation}
          filterRating={filterRating}
          setFilterRating={setFilterRating}
          availableSkills={availableSkills}
          availableLocations={availableLocations}
          onClearFilters={clearFilters}
        />

        <div className="text-center text-gray-600 mb-8">
          <span className="text-lg font-medium">
            Showing {filteredDevelopers.length} of {allDevelopers.length} developers
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDevelopers.map((developer) => (
            <Link 
              key={developer.id} 
              to={`/developer${developer.uri}`}
              style={{
                background: 'white',
                borderRadius: '8px',
                padding: '1.5rem',
                boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
                textDecoration: 'none',
                color: 'inherit',
                transition: 'transform 0.2s'
              }}
            >
              <div style={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                margin: '0 auto 1rem',
                overflow: 'hidden',
                background: '#f0f0f0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '2rem'
              }}>
                {developer.developerInfo?.avatar?.node?.sourceUrl ? (
                  <img
                    src={developer.developerInfo.avatar.node.sourceUrl}
                    alt={developer.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />
                ) : (
                  <div>👤</div>
                )}
              </div>
              <h3 style={{
                fontSize: '1.25rem',
                marginBottom: '0.5rem',
                textAlign: 'center'
              }}>{developer.developerInfo?.fullName || developer.title}</h3>
              <p style={{
                color: '#666',
                textAlign: 'center',
                marginBottom: '1rem'
              }}>{developer.developerInfo?.location || ""}</p>
              {developer.developerInfo?.techStack && (
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.5rem',
                  justifyContent: 'center'
                }}>
                  {developer.developerInfo.techStack.slice(0, 3).map((tech, index) => (
                    <span 
                      key={index}
                      style={{
                        background: '#e3f2fd',
                        color: '#1976d2',
                        padding: '0.25rem 0.5rem',
                        borderRadius: '4px',
                        fontSize: '0.875rem'
                      }}
                    >
                      {tech.technology}
                    </span>
                  ))}
                  {developer.developerInfo.techStack.length > 3 && (
                    <span style={{
                      background: '#e3f2fd',
                      color: '#1976d2',
                      padding: '0.25rem 0.5rem',
                      borderRadius: '4px',
                      fontSize: '0.875rem'
                    }}>
                      +{developer.developerInfo.techStack.length - 3} more
                    </span>
                  )}
                </div>
              )}
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default DevelopersPage
