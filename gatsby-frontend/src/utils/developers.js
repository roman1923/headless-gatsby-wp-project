// Developers page utilities and logic
export const mockDevelopers = [
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

export const extractAvailableSkills = (developers) => {
  const skills = new Set()
  developers.forEach((dev) => {
    dev.developerInfo?.techStack?.forEach((tech) => {
      tech.skillLevel?.forEach((level) => {
        if (level) skills.add(level)
      })
    })
  })
  return Array.from(skills).sort()
}

export const extractAvailableLocations = (developers) => {
  const locations = new Set()
  developers.forEach((dev) => {
    if (dev.developerInfo?.location) {
      locations.add(dev.developerInfo.location)
    }
  })
  return Array.from(locations).sort()
}

export const filterDevelopers = (developers, filterSkill, filterLocation, filterRating) => {
  let filtered = developers

  if (filterSkill) {
    filtered = filtered.filter((dev) =>
      dev.developerInfo?.techStack?.some((tech) =>
        tech.skillLevel?.some((level) =>
          level?.toLowerCase() === filterSkill.toLowerCase()
        )
      )
    )
  }

  if (filterLocation) {
    filtered = filtered.filter((dev) =>
      dev.developerInfo?.location
        ?.toLowerCase()
        .includes(filterLocation.toLowerCase())
    )
  }

  if (filterRating) {
    const minRating = parseInt(filterRating)
    filtered = filtered.filter((dev) => {
      const rating = dev.developerInfo?.rating || 0
      return rating >= minRating
    })
  }

  return filtered
}