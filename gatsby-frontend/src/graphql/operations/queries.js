import { gql } from 'gatsby'
import { DEVELOPER_CARD_FRAGMENT, DEVELOPER_PROFILE_FRAGMENT } from '../fragments/developer'

// Query to get all developers with pagination
export const GET_DEVELOPERS_QUERY = gql`
  query GetDevelopers($first: Int = 10, $after: String) {
    allWpDeveloper(
      first: $first
      after: $after
      sort: { fields: [date], order: DESC }
    ) {
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
      nodes {
        ...DeveloperCardFragment
      }
    }
  }
  ${DEVELOPER_CARD_FRAGMENT}
`

// Query to get developer by slug
export const GET_DEVELOPER_BY_SLUG_QUERY = gql`
  query GetDeveloperBySlug($slug: String!) {
    wpDeveloper(slug: { eq: $slug }) {
      ...DeveloperProfileFragment
    }
  }
  ${DEVELOPER_PROFILE_FRAGMENT}
`

// Query to get developer by ID
export const GET_DEVELOPER_BY_ID_QUERY = gql`
  query GetDeveloperById($id: String!) {
    wpDeveloper(id: { eq: $id }) {
      ...DeveloperProfileFragment
    }
  }
  ${DEVELOPER_PROFILE_FRAGMENT}
`

// Query to get developers by skill
export const GET_DEVELOPERS_BY_SKILL_QUERY = gql`
  query GetDevelopersBySkill($skill: String!, $first: Int = 10) {
    allWpDeveloper(
      filter: {
        developerInfo: {
          techStack: {
            technology: { eq: $skill }
          }
        }
      }
      first: $first
      sort: { fields: [date], order: DESC }
    ) {
      nodes {
        ...DeveloperCardFragment
      }
    }
  }
  ${DEVELOPER_CARD_FRAGMENT}
`

// Query to get developers by location
export const GET_DEVELOPERS_BY_LOCATION_QUERY = gql`
  query GetDevelopersByLocation($location: String!, $first: Int = 10) {
    allWpDeveloper(
      filter: {
        developerInfo: {
          location: { eq: $location }
        }
      }
      first: $first
      sort: { fields: [date], order: DESC }
    ) {
      nodes {
        ...DeveloperCardFragment
      }
    }
  }
  ${DEVELOPER_CARD_FRAGMENT}
`

// Query to get developers by rating
export const GET_DEVELOPERS_BY_RATING_QUERY = gql`
  query GetDevelopersByRating($minRating: Int!, $first: Int = 10) {
    allWpDeveloper(
      filter: {
        developerInfo: {
          rating: { gte: $minRating }
        }
      }
      first: $first
      sort: { fields: [date], order: DESC }
    ) {
      nodes {
        ...DeveloperCardFragment
      }
    }
  }
  ${DEVELOPER_CARD_FRAGMENT}
`

// Query to search developers
export const SEARCH_DEVELOPERS_QUERY = gql`
  query SearchDevelopers($searchTerm: String!, $first: Int = 10) {
    allWpDeveloper(
      filter: {
        title: { regex: $searchTerm }
      }
      first: $first
      sort: { fields: [date], order: DESC }
    ) {
      nodes {
        ...DeveloperCardFragment
      }
    }
  }
  ${DEVELOPER_CARD_FRAGMENT}
`
