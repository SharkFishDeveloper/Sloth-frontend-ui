import React from 'react'

const Signinerror = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
  <div className="bg-white p-8 rounded-lg shadow-md max-w-sm w-full text-center">
    <svg className="w-12 h-12 mx-auto text-red-500 mb-4" fill="currentColor" viewBox="0 0 20 20">
      <path d="M10 2a1 1 0 00-1 1v2.586a4.992 4.992 0 00-3.5 4.672V11a1 1 0 00.883.993C7.99 12.748 8.993 13 10 13s2.01-.252 3.117-.007A1 1 0 0014 11v-.742a4.992 4.992 0 00-3.5-4.672V3a1 1 0 00-1-1zM5 14h10a1 1 0 011 1v1a1 1 0 01-1 1H5a1 1 0 01-1-1v-1a1 1 0 011-1z" />
    </svg>
    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Sign In Required</h2>
    <p className="text-gray-600 mb-6">Please sign in to access this page.</p>
  </div>
</div>
  )
}

export default Signinerror