import pho from "../../assets/stock-pho.jpg"

type Recipe = {
  name: string
  imageUrl: string
  allergens: string[]
}

type RecipeCardProps = {
  recipe: Recipe
}

export function RecipeCardOld(props: RecipeCardProps) {
  return (
    <>
      <div className="recipe-card-container">
        <img className="recipe-card-img" src={pho} alt="A bowl of pho bo vien." />
        <div className="recipe-card-details">
          <h2 className="recipe-card-title">Recipe Name</h2>
          <div className="recipe-card-allergens">
            <p>Contains: </p>
            <div className="recipe-card-allergen-tag">Soy</div>
          </div>
        </div>
      </div>
    </>
  );
}