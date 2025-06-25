export function RecipePage() {
  return (
    <div>
      {/* Recipe image */}
      <div>Recipe Title</div>
      <div>Recipe Author</div>
      <div>
        <div>Prep Time</div>
        <div>Cook Time</div>
        <div>Serving Size</div>
      </div>

      <div>
        <div>Ingredients</div>
        {/* Ingredient relevant notes (substitutions or adjustments as needed)*/}
      </div>
      <div>
        <div>Instructions</div>
        {/* Each instruction step with a note included if it has one */}
      </div>
      <div>Other notes if any</div>
    </div>
  )
}