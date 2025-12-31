import React from 'react'
import { Link } from 'gatsby'

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.15'%3E%3Ccircle cx='40' cy='40' r='1.5'/%3E%3Ccircle cx='20' cy='20' r='1'/%3E%3Ccircle cx='60' cy='60' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>
      
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-purple-600/5 to-indigo-600/5 animate-pulse"></div>
      
      <div className="relative z-10">
        <div className="container py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-6 mb-8 group">
         
                <div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent group-hover:from-blue-300 group-hover:to-purple-300 transition-all duration-300">WordPress Devs</h3>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed mb-8 text-sm hover:text-gray-200 transition-colors duration-300">
                Connect with the world&apos;s best WordPress developers. 
                Find talent, showcase skills, and build amazing projects together.
              </p>
              <div className="flex space-x-6 social-links">
                <a href="#" className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-800 hover:from-blue-500 hover:to-blue-600 rounded-2xl flex items-center justify-center transition-all duration-500 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25 group border border-gray-600 hover:border-blue-400">
                  <svg className="w-6 h-6 text-gray-300 group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 rounded-2xl flex items-center justify-center transition-all duration-500 hover:scale-110 hover:shadow-lg hover:shadow-gray-500/25 group border border-gray-600 hover:border-gray-400">
                  <svg className="w-6 h-6 text-gray-300 group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a href="#" className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-800 hover:from-blue-600 hover:to-blue-700 rounded-2xl flex items-center justify-center transition-all duration-500 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25 group border border-gray-600 hover:border-blue-400">
                  <svg className="w-6 h-6 text-gray-300 group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold mb-8 text-white relative group">
                <span className="bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent group-hover:from-blue-300 group-hover:to-purple-300 transition-all duration-300">Quick Links</span>
                <div className="absolute -bottom-3 left-0 w-12 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 rounded-full group-hover:w-16 transition-all duration-300"></div>
              </h3>
              <ul className="space-y-4">
                <li>
                  <Link to="/" className="text-gray-300 hover:text-blue-400 transition-all duration-300 text-sm flex items-center group py-2 px-3 rounded-xl hover:bg-white/5 hover:shadow-md">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="font-medium">Home</span>
                  </Link>
                </li>
                <li>
                  <Link to="/developers" className="text-gray-300 hover:text-blue-400 transition-all duration-300 text-sm flex items-center group py-2 px-3 rounded-xl hover:bg-white/5 hover:shadow-md">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="font-medium">Browse Developers</span>
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-gray-300 hover:text-blue-400 transition-all duration-300 text-sm flex items-center group py-2 px-3 rounded-xl hover:bg-white/5 hover:shadow-md">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="font-medium">Contact Us</span>
                  </Link>
                </li>
                <li>
                  <Link to="/sitemap" className="text-gray-300 hover:text-blue-400 transition-all duration-300 text-sm flex items-center group py-2 px-3 rounded-xl hover:bg-white/5 hover:shadow-md">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="font-medium">Sitemap</span>
                  </Link>
                </li>
              </ul>
            </div>
            
            {/* Categories */}
            <div>
              <h3 className="text-xl font-bold mb-8 text-white relative group">
                <span className="bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent group-hover:from-blue-300 group-hover:to-purple-300 transition-all duration-300">Categories</span>
                <div className="absolute -bottom-3 left-0 w-12 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 rounded-full group-hover:w-16 transition-all duration-300"></div>
              </h3>
              <ul className="space-y-4">
                <li>
                  <Link to="/developers?skill=frontend" className="text-gray-300 hover:text-blue-400 transition-all duration-300 text-sm flex items-center group py-2 px-3 rounded-xl hover:bg-white/5 hover:shadow-md">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="font-medium">Frontend Developers</span>
                  </Link>
                </li>
                <li>
                  <Link to="/developers?skill=backend" className="text-gray-300 hover:text-blue-400 transition-all duration-300 text-sm flex items-center group py-2 px-3 rounded-xl hover:bg-white/5 hover:shadow-md">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="font-medium">Backend Developers</span>
                  </Link>
                </li>
                <li>
                  <Link to="/developers?skill=fullstack" className="text-gray-300 hover:text-blue-400 transition-all duration-300 text-sm flex items-center group py-2 px-3 rounded-xl hover:bg-white/5 hover:shadow-md">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="font-medium">Full Stack Developers</span>
                  </Link>
                </li>
                <li>
                  <Link to="/developers?skill=wordpress" className="text-gray-300 hover:text-blue-400 transition-all duration-300 text-sm flex items-center group py-2 px-3 rounded-xl hover:bg-white/5 hover:shadow-md">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="font-medium">WordPress Specialists</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-bold mb-8 text-white relative group">
                <span className="bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent group-hover:from-blue-300 group-hover:to-purple-300 transition-all duration-300">Contact</span>
                <div className="absolute -bottom-3 left-0 w-12 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 rounded-full group-hover:w-16 transition-all duration-300"></div>
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4 group">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl flex items-center justify-center group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-all duration-300">
                    <svg className="w-5 h-5 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm font-medium">Email</p>
                    <a href="mailto:info@wordpressdevelopers.com" className="text-blue-400 hover:text-blue-300 transition-colors text-sm hover:underline">
                      info@wordpressdevelopers.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-4 group">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl flex items-center justify-center group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-all duration-300">
                    <svg className="w-5 h-5 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm font-medium">Phone</p>
                    <a href="tel:+15551234567" className="text-blue-400 hover:text-blue-300 transition-colors text-sm hover:underline">
                      +1 (555) 123-4567
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-4 group">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl flex items-center justify-center group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-all duration-300">
                    <svg className="w-5 h-5 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm font-medium">Address</p>
                    <p className="text-gray-400 text-sm">123 Developer Street<br />Tech City, TC 12345</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-700/30 bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm">
          <div className="container py-8">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
              <div className="text-gray-400 text-sm flex items-center space-x-2">
                <span>&copy; {new Date().getFullYear()} WordPress Developers.</span>
                <span className="text-gray-500">All rights reserved.</span>
              </div>
              <div className="flex items-center space-x-10 text-sm footer-links">
                <Link to="/privacy" className="text-gray-400 hover:text-blue-400 transition-all duration-300 hover:underline font-medium">
                  Privacy Policy
                </Link>
                <Link to="/terms" className="text-gray-400 hover:text-blue-400 transition-all duration-300 hover:underline font-medium">
                  Terms of Service
                </Link>
                <div className="flex items-center space-x-2 text-gray-500">
                  <span>Made with</span>
                  <svg className="w-4 h-4 text-red-500 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                  </svg>
                  <span>by developers</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer