'use client'

import {useState} from 'react';
import RecipeList from '@/components/RecipeList';
import SearchBar from '@/components/SearchBar';
import recipesData from '@/data/recipes.json';

const Home: React.FC = () => {
    const [filteredRecipes, setFilteredRecipes] = useState(recipesData);

    const handleSearch = (query: string) => {
        const filtered = recipesData.filter(recipe => recipe.title.toLowerCase().includes(query.toLowerCase()));
        setFilteredRecipes(filtered);
    };

    return (
        <><SearchBar onSearch={handleSearch} /><RecipeList recipes={filteredRecipes} /></>
    )

}

export default Home;
