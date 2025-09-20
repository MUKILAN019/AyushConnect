import React, { useState } from 'react';
import NavBar from './components/NavBar';
import SearchBox from './components/SearchBox';
import MappingList from './components/MappingList';
import ConditionEditor from './components/ConditionEditor';
import UploadBundle from './components/UploadBundle';
import { searchNamaste } from './api/api';
import './App.css'

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [selectedMapping, setSelectedMapping] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedSystem, setSelectedSystem] = useState('siddha');

  const handleSearch = async (query, system) => {
    if (!query.trim()) {
      setSearchResults([]);
      return;
    }
    setIsLoading(true);
    try {
      const results = await searchNamaste(query, system);

      // Transform API response to match frontend structure
      const transformed = results.map(item => ({
        id: item.NAMC_ID,
        namasteCode: item.NAMC_CODE,
        description: item.NAMC_TERM || item.NAMC_term || '',
        Tamil_term: item.Tamil_term || '',
        sub_description: item.Short_definition || '',
        system: system.charAt(0).toUpperCase() + system.slice(1), // 'Siddha', 'Unani', 'Ayurveda'
        icd11Mappings: [
          {
            code: '', // You can add real ICD-11 mapping if available
            display: '',
            equivalence: 'equivalent' // default
          }
        ]
      }));

      setSearchResults(transformed);
    } catch (error) {
      console.error('Search error:', error);
      setSearchResults([]);
    } finally {
      setIsLoading(false);
    }
  };


  const handleSelectMapping = (mapping) => {
    setSelectedMapping(mapping);
  };

  const handleSystemChange = (system) => {
    setSelectedSystem(system);
    // Clear results when system changes
    setSearchResults([]);
    setSelectedMapping(null);
  };

  return (
    <div className="min-h-screen bg-background text-text">
      <NavBar />
      <main className="container mx-auto px-4 py-8">
        <SearchBox 
          onSearch={handleSearch} 
          isLoading={isLoading}
          selectedSystem={selectedSystem}
          onSystemChange={handleSystemChange}
        />
        {searchResults.length > 0 ? (
          <MappingList mappings={searchResults} onSelect={handleSelectMapping} />
        ) : isLoading ? (
          <div className="animate-pulse space-y-4">
            <div className="h-4 bg-gray-200 rounded w-3/4 mx-auto"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto"></div>
            <div className="h-4 bg-gray-200 rounded w-2/3 mx-auto"></div>
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500">Search for NAMASTE codes to view ICD-11 mappings.</p>
          </div>
        )}
        {selectedMapping && (
          <ConditionEditor mapping={selectedMapping} />
        )}
        <UploadBundle />
      </main>
    </div>
  );
}

export default App;