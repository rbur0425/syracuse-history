import * as React from "react"

export default function Nav() {
return (
  <nav id="header" className="w-full z-30 text-white bg-orange-600">
    <div className="w-3/4 container mx-auto flex flex-wrap items-center justify-center p-6">
      <div className="pl-4 flex items-center">
        <span className="text-white font-bold text-2xl lg:text-4xl bg-orange-600 -rotate-3 p-6">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mr-4 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
        </svg>
          SYRACUSE HISTORY
        </span>
      </div>
    </div>
  </nav>
  )
}

