import { gql } from 'gatsby'

// Developer fragment for reusable GraphQL queries
export const DEVELOPER_FRAGMENT = gql`
  fragment DeveloperFragment on WpDeveloper {
    id
    title
    slug
    content
    excerpt
    date
    modified
    status
    featuredImage {
      node {
        id
        altText
        sourceUrl
        mediaDetails {
          width
          height
        }
      }
    }
    developerInfo {
      fullName
      location
      rating
      techStack {
        technology
        skillLevel
      }
    }
    seo {
      title
      metaDesc
      canonical
    }
  }
`

// Developer card fragment for list views
export const DEVELOPER_CARD_FRAGMENT = gql`
  fragment DeveloperCardFragment on WpDeveloper {
    id
    title
    slug
    excerpt
    featuredImage {
      node {
        altText
        sourceUrl
        mediaDetails {
          width
          height
        }
      }
    }
    developerInfo {
      fullName
      location
      rating
      techStack {
        technology
        skillLevel
      }
    }
  }
`

// Developer profile fragment for detailed views
export const DEVELOPER_PROFILE_FRAGMENT = gql`
  fragment DeveloperProfileFragment on WpDeveloper {
    id
    title
    slug
    content
    excerpt
    date
    modified
    featuredImage {
      node {
        id
        altText
        sourceUrl
        mediaDetails {
          width
          height
        }
      }
    }
    developerInfo {
      fullName
      location
      rating
      techStack {
        technology
        skillLevel
      }
    }
    seo {
      title
      metaDesc
      canonical
      opengraphTitle
      opengraphDescription
      opengraphImage {
        altText
        sourceUrl
      }
    }
  }
`
