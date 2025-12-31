// Mock data for developers - this should be replaced with WordPress data later
export const developers = [
  {
    id: "cG9zdDoxMw==",
    slug: "mike-cook",
    title: "Mike Cook",
    content: "<p>Experienced backend developer with 5+ years of experience in PHP development. Specialized in WordPress backend development and database optimization.</p><p>I have worked with various clients ranging from small businesses to large enterprises, delivering high-quality backend solutions that meet their specific needs.</p>",
    developerInfo: {
      fullName: "Mike Cook",
      location: "Florida",
      rating: 6,
      techStack: [
        { technology: "PHP", skillLevel: ["advanced"] },
        { technology: "MySQL", skillLevel: ["expert"] },
        { technology: "WordPress", skillLevel: ["advanced"] }
      ]
    }
  },
  {
    id: "cG9zdDo4",
    slug: "john-doe",
    title: "John Doe",
    content: "<p>Frontend developer with 4+ years of experience in JavaScript development. Specialized in modern frontend frameworks and responsive design.</p><p>Passionate about creating beautiful and functional user interfaces that provide excellent user experience.</p>",
    developerInfo: {
      fullName: "John Doe",
      location: "New york",
      rating: 7,
      techStack: [
        { technology: "JS", skillLevel: ["advanced"] },
        { technology: "React", skillLevel: ["expert"] },
        { technology: "CSS", skillLevel: ["advanced"] }
      ]
    }
  },
  {
    id: "3",
    slug: "sarah-wilson",
    title: "Sarah Wilson",
    content: "<p>Full-stack developer with 6+ years of experience in WordPress development. Expert in both frontend and backend technologies.</p><p>I specialize in creating custom WordPress themes and plugins, and have a strong background in modern web development practices.</p>",
    developerInfo: {
      fullName: "Sarah Wilson",
      location: "Sydney, Australia",
      rating: 9,
      techStack: [
        { technology: "WordPress", skillLevel: ["expert"] },
        { technology: "CSS", skillLevel: ["expert"] },
        { technology: "Sass", skillLevel: ["advanced"] }
      ]
    }
  },
  {
    id: "4",
    slug: "david-brown",
    title: "David Brown",
    content: "<p>Backend developer with 7+ years of experience in PHP and WordPress development. Specialized in database optimization and API development.</p><p>I have extensive experience with WordPress multisite installations and custom plugin development.</p>",
    developerInfo: {
      fullName: "David Brown",
      location: "Berlin, Germany",
      rating: 8,
      techStack: [
        { technology: "WordPress", skillLevel: ["advanced"] },
        { technology: "PHP", skillLevel: ["expert"] },
        { technology: "MySQL", skillLevel: ["intermediate"] }
      ]
    }
  }
]

// Helper function to get developer by slug
export const getDeveloperBySlug = (slug) => {
  return developers.find(dev => dev.slug === slug)
}

// Helper function to get developer by id
export const getDeveloperById = (id) => {
  return developers.find(dev => dev.id === id)
}

// Helper function to get all developers
export const getAllDevelopers = () => {
  return developers
}
