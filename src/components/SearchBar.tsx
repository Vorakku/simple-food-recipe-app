import React, { useState } from 'react';

interface SearchBarProps {
    onSearch: (query: string) => void;
}

const SearchBar : React.FC<SearchBarProps> = ({onSearch}) => {
    const [query, setQuery] = useState('');

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        onSearch(query);
    };
    
    return (
        <form action="" onSubmit={handleSearch} className='mb-6'>
            <input
             type="text" 
             className='w-full px-4 py-2 border rounded-lg focus:outline-none'
             value={query}
             onChange={e => setQuery(e.target.value)}
             />
             <button className='mt-2 w-full bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-600'>
                Search
             </button>
        </form>
    )
}

export default SearchBar; 