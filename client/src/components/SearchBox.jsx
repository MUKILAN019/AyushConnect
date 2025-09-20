import React, { useState } from 'react';
import { Search } from 'lucide-react';

const SearchBox = ({ onSearch, isLoading, selectedSystem = 'siddha', onSystemChange }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query, selectedSystem);
    }
  };

  const system = selectedSystem || 'siddha';

  return (
    <div className="mb-8">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row gap-4">
          {/* System Filter */}
          <div className="md:w-48">
            <select
              value={system}
              onChange={(e) => onSystemChange(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            >
              <option value="siddha">Siddha Medicine</option>
              <option value="unani">Unani Medicine</option>
              <option value="ayurveda">Ayurveda Medicine</option>
            </select>
          </div>

          {/* Search Input */}
          <div className="relative flex-1 flex">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={`Search ${system.charAt(0).toUpperCase() + system.slice(1)} codes or descriptions...`}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              disabled={isLoading}
            />
            <button
              type="submit"
              className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={isLoading}
            >
              Search
            </button>
          </div>
        </div>
      </form>

      {/* System Info Badge */}
      <div className="mt-2 flex items-center space-x-2">
        <span className="text-sm text-gray-500">Currently searching:</span>
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
          system === 'siddha' ? 'bg-green-100 text-green-800' :
          system === 'unani' ? 'bg-purple-100 text-purple-800' :
          'bg-orange-100 text-orange-800'
        }`}>
          {system.charAt(0).toUpperCase() + system.slice(1)} Medicine
        </span>
      </div>
    </div>
  );
};

export default SearchBox;