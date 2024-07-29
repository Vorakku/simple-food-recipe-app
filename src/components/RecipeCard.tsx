import React from "react";

export interface ReceipeCardProps {
  id: number;
  title: string;
  description: string;
  image: string;
} //Decalre the property for the ReceipeCard component

//Create the ReceipeCard component
const ReceipeCard: React.FC<ReceipeCardProps> = ({
  id,
  title,
  description,
  image,
}) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img src={image} alt={title} className="w-full" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <a
          href={`/recipe/${id}`}
          className="text-indigo-500 hover:text-indigo-600"
        ></a>
      </div>
    </div>
  );
};

export default ReceipeCard;
