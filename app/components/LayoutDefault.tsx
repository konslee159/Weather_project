'use client';


export default function DefaultLayout() {
    return (
        <header className="bg-gray-900 flex items-center justify-between h-24 px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl font-extrabold text-white tracking-tight">WWT</h1>
            <div className="flex items-center space-x-4">
                <a href="#" className="text-white font-semibold px-4 py-2 rounded-md hover:bg-gray-700 transition duration-300">Login</a>
                <a href="#" className="bg-white text-gray-900 font-semibold px-4 py-2 rounded-md hover:bg-gray-200 transition duration-300">Sign Up</a>
            </div>
      </header>
    )
    
}