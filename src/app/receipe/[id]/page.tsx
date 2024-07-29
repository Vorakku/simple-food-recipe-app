'use client'

import React, {useState, useEffect} from 'react';
import { useRouter } from 'next/router';
import recipesData from '@/data/recipes.json';

const RecipePage: React.FC = () => {
    const router = useRouter();
    const { id } = router.query;
    const [recipe, setRecipe] = useState(null);

    useEffect(() => {
        if (id) {
            const recipe = recipesData.find(r => r.id === parseInt(id as string, 10));
            setRecipe(recipe || null);
        }
    }, [id]);

    if (!recipe) {
        return (
        <>
            <h1 className="text04xl font-bold mb-6">
                {recipe.title}
            </h1>
            <img className='w-full rounded-lg mb-6' src={recipe.image} alt={recipe.title} />
            <p className="text-lg">
                {recipe.description}
            </p>
        </>
        )
    } 
}

export default RecipePage;