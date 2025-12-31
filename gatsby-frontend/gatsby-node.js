const path = require(`path`)

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const developerTemplate = path.resolve(`./src/templates/developer.js`)

  const result = await graphql(`
    query GetDevelopersForPages {
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
  `)

  if (result.errors) {
    reporter.panicOnBuild(`There was an error loading your developers`, result.errors)
    return
  }

  const developers = result.data.allWpDeveloper.nodes

  developers.forEach((developer) => {
    createPage({
      path: `/developer/${developer.slug}/`,
      component: developerTemplate,
      context: { 
        developer: developer,
        id: developer.id,
        slug: developer.slug 
      },
    })
  })
}
