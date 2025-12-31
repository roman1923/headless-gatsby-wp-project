import React from 'react'
import { Link } from 'gatsby'
import Card from './Card'

const DeveloperCard = ({ developer }) => {
  const { title, developerInfo, slug } = developer
  
  return (
    <Link 
      to={`/developer/${slug}/`}
      className="block group"
    >
      <Card className="h-full hover-lift hover-glow group-hover:shadow-2xl transition-all duration-300">
        <div className="text-center">
          {/* Avatar */}
          <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
            {developerInfo?.avatar?.node?.sourceUrl ? (
              <img
                src={developerInfo.avatar.node.sourceUrl}
                alt={title}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="text-3xl">👤</div>
            )}
          </div>

          {/* Name */}
          <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
            {developerInfo?.fullName || title}
          </h3>

          {/* Location */}
          {developerInfo?.location && (
            <p className="text-gray-600 mb-3 flex items-center justify-center">
              <svg className="icon-sm mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {developerInfo.location}
            </p>
          )}

          {/* Rating */}
          {developerInfo?.rating && (
            <div className="flex items-center justify-center mb-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(developerInfo.rating / 2) 
                        ? 'text-yellow-400' 
                        : 'text-gray-300'
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="ml-2 text-sm text-gray-600">
                {developerInfo.rating}/10
              </span>
            </div>
          )}

          {/* Tech Stack */}
          {developerInfo?.techStack && developerInfo.techStack.length > 0 && (
            <div className="flex flex-wrap gap-2 justify-center">
              {developerInfo.techStack.slice(0, 3).map((tech, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full font-medium"
                >
                  {tech.technology}
                </span>
              ))}
              {developerInfo.techStack.length > 3 && (
                <span className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full font-medium">
                  +{developerInfo.techStack.length - 3} more
                </span>
              )}
            </div>
          )}
        </div>
      </Card>
    </Link>
  )
}

export default DeveloperCard
