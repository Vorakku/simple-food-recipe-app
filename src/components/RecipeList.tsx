import React from "react";
import ReceipeCard from "./RecipeCard";
import { ReceipeCardProps } from "./RecipeCard";


interface RecipeListProps {
    recipes: ReceipeCardProps[];
}

const RecipeList: React.FC<RecipeListProps> = ({
    recipes
}) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid:cols-3 lg:grid-cols-4 gap-6">
            {recipes.map((recipe) => (
                <ReceipeCard key={recipe.id} {...recipe} />
            ))}
        </div>
    )
}

export default RecipeList;


{/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid:cols-3 lg:grid-cols-4 gap-6">
{recipes.map((index , recipe) => (
    <ReceipeCard id={1} title="heloo" description="des" image="image" />
))}
</div> */}