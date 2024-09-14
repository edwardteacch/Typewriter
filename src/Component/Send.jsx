import React from 'react'

export const Send = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Main content of the Send component */}
      <div className="p-4 text-center flex-grow">
        {/* Title */}
        <h1 className="pt-7 mb-6 text-3xl font-mono font-bold">Send </h1>
        {/* Description */}
        <p className="mb-4 text-lg font-mono">
          Now that you have created the letter, how about sending it across to the people you love?
        </p>
        {/* Send button */}
        <button
          onClick={() => window.location.href = 'mailto:'}
          className="bg-black text-white px-6 py-3 font-mono text-amber-50 rounded-md hover:scale-105 transition-transform duration-200"
        >
          Send Letter
        </button>
      </div>
      {/* Footer */}
      <footer className="bg-black text-amber-50 p-4 font-mono text-center">
        <p>&copy; 2023 Typewriter. All rights reserved.</p>
      </footer>
    </div>
  )
}
