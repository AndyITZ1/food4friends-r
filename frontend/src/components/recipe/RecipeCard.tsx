import pho from "../../assets/stock-pho.jpg"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import {
  Pill,
  PillContent
} from "@/components/custom-ui/pill";
import { Link } from "react-router";

import { cn } from "@/lib/utils";

type Recipe = {
  author: string
  name: string
  imageUrl: string
  allergens: string[]
  id: number
}

type RecipeCardProps = {
  className?: string
  recipe: Recipe
}

export function RecipeCard({className, recipe, ...props}: RecipeCardProps) {
  return (
    <>
      <Card
        className={cn(
          "flex flex-col pb-2 pt-0 gap-0 h-full w-[200px] md:w-[250px] 2xl:w-[300px] overflow-clip shadow-xl",
          className
        )}
      >
        <img
          className="recipe-card-img"
          src={pho}
          alt={`A picture of ${recipe.name}`}
        />
        <CardContent className="text-left mb-4 px-3 py-3">
          <Tooltip>
            <TooltipTrigger>
              <CardTitle className="text-left text-sm md:text-lg 2xl:text-xl text-ellipsis md:text-clip line-clamp-2 font-bold">
                <Link to={`/recipes/${recipe.id}`}>
                  {recipe.name}
                </Link>
              </CardTitle>
            </TooltipTrigger>
            <TooltipContent>
              <p>{recipe.name}</p>
            </TooltipContent>
            <CardDescription className="text-yellow-800 dark:text-yellow-200">By {recipe.author}</CardDescription>
          </Tooltip>
          
        </CardContent>
        <CardFooter className="mt-auto flex-wrap gap-1 pt-4 px-3">
          {recipe.allergens.map(allergen => {
            return (
              <Pill key={recipe.name} className="text-xs font-bold bg-white dark:bg-black hover:bg-neutral-200 dark:hover:bg-neutral-500">
                <PillContent className="px-3">{allergen}</PillContent>
              </Pill>
            )
          })}

        </CardFooter>
      </Card>
    </>
  );
}