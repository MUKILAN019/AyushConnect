// src/api/api.js
export const searchNamaste = async (query, system = 'all') => {
  if (!query || query.trim() === '') return [];

  try {
    // Build the query URL
    const url = new URL('http://localhost:3000/api/search');
    url.searchParams.append('q', query);
    url.searchParams.append('system', system);

    const response = await fetch(url.toString());
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data; // Make sure your backend returns an array of mappings
  } catch (error) {
    console.error('API search error:', error);
    return [];
  }
};
