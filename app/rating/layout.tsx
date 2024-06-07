import React from 'react'

interface LayoutProps {
  // Add your prop types here
}

const Layout = ({ children,}: { children: React.ReactNode }) => {
  return (
    <div className="max-w-screen-lg h-auto py-12 mx-auto flex justify-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
        {children}
    </div>
  )
}

export default Layout