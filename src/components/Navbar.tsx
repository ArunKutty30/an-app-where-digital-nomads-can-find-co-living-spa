import { Globe, Search, Menu, User } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Globe className="h-8 w-8 text-indigo-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">NomadNest</span>
          </div>
          
          <div className="hidden md:flex items-center flex-1 max-w-2xl mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search by city or country..."
                className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="hidden md:block px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900">
              List your space
            </button>
            <button className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 hover:shadow-md transition-all">
              <Menu className="h-4 w-4" />
              <User className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}