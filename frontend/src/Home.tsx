import { useState } from 'react'
import './App.css'
// import { RecipeCardOld } from './components/recipe/RecipeCardOld';
import { RecipeCard } from './components/recipe/RecipeCard'
import type { Recipe } from './utils/types/RecipeType';
import recipeData from '@/assets/staged-data.json';
import { Button } from './components/ui/button';
import { SquarePen } from 'lucide-react';
import { AddRecipeFloatBtn } from '@/components/recipe/AddRecipeFloatBtn';
import { Link } from 'react-router';

const fakeRecipe = {
  imageUrl: "test",
  author: "Chef Test",
  allergens: ["Soy", "Toxic", "Test", "Extra", "Allergen"],
  name: "Pho Bo Vien",
  id: 11,
};


function Home() {
  const [recipes, setRecipes] = useState<Recipe[]>(recipeData);


  return (
    <>
      <AddRecipeFloatBtn />
      <div className="flex flex-col gap-4">
        <Button variant="secondary" className="mx-2 my-1 p-2 place-self-start">
          <Link className="flex gap-1 items-center" to="/recipes/new">
            <SquarePen />
            Add a recipe
          </Link>
        </Button>
        <div className="grid auto-rows-[1fr] grid-cols-1 md:grid-cols-4 2xl:grid-cols-5 gap-5 place-items-center">
          {recipes.map((recipe) => {
            return (
              <RecipeCard
                key={recipe.name}
                recipe={recipe}
                className="flex-1"
              />
            );
          })}
          <RecipeCard recipe={fakeRecipe} className="flex-1" />
        </div>
      </div>
    </>
  );
}

export default Home
