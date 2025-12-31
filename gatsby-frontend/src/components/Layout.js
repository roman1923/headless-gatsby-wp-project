import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import "../styles/global.css"

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pb-16">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout