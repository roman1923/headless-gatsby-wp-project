import React, { useState, useMemo, useEffect } from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import DeveloperFilters from "../components/DeveloperFilters"
import DeveloperCard from "../components/DeveloperCard"

const DevelopersPage = ({ data, location }) => {
  const [filterSkill, setFilterSkill] = useState("")
  const [filterLocation, setFilterLocation] = useState("")
  const [filterRating, setFilterRating] = useState("")

  // Parse URL parameters on component mount
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search)
    const skill = searchParams.get('skill')
    const locationParam = searchParams.get('location')
    const rating = searchParams.get('rating')
    
    if (skill) setFilterSkill(skill)
    if (locationParam) setFilterLocation(locationParam)
    if (rating) setFilterRating(rating)
  }, [location.search])

  // Get developers data from WordPress GraphQL
  const allDevelopers = data?.allWpDeveloper?.nodes || []

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
      developers = developers.filter((dev) => {
        const skillLower = filterSkill.toLowerCase()
        
        // Check if developer title matches skill (e.g., "Back" matches "backend")
        const titleMatch = dev.title?.toLowerCase().includes(skillLower) ||
                          skillLower.includes(dev.title?.toLowerCase())
        
        // Check if any tech stack technology matches skill
        const techMatch = dev.developerInfo?.techStack?.some((tech) =>
          tech.technology?.toLowerCase().includes(skillLower) ||
          skillLower.includes(tech.technology?.toLowerCase())
        )
        
        // Check if any skill level matches
        const skillLevelMatch = dev.developerInfo?.techStack?.some((tech) =>
          tech.skillLevel?.some((level) =>
            level?.toLowerCase().includes(skillLower) ||
            skillLower.includes(level?.toLowerCase())
          )
        )
        
        return titleMatch || techMatch || skillLevelMatch
      })
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
      <div className="container py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            WordPress Developers
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find and connect with talented WordPress developers from around the world
          </p>
        </div>
        
        {/* Filters */}
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

        {/* Results count */}
        <div className="text-center text-gray-600 mb-8">
          <span className="text-lg font-medium">
            Showing {filteredDevelopers.length} of {allDevelopers.length} developers
          </span>
        </div>

        {/* Developers grid */}
        {filteredDevelopers.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDevelopers.map((developer) => (
              <DeveloperCard key={developer.id} developer={developer} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">
              No developers found
            </h3>
            <p className="text-gray-600 mb-6">
              Try adjusting your filters to see more results
            </p>
            <button
              onClick={clearFilters}
              className="btn btn-primary clear-filters"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </Layout>
  )
}

export default DevelopersPage

export const query = graphql`
  query GetDevelopers {
    allWpDeveloper {
      nodes {
        id
        uri
        slug
        title
        content
        developerInfo {
          fullName
          location
          rating
          avatar {
            node {
              altText
              sourceUrl
              localFile {
                childImageSharp {
                  gatsbyImageData(
                    width: 300
                    height: 300
                    placeholder: BLURRED
                    formats: [AUTO, WEBP, AVIF]
                  )
                }
              }
            }
          }
          techStack {
            technology
            skillLevel
          }
        }
      }
    }
  }
`
