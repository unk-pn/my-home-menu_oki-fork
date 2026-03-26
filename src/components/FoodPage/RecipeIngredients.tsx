interface RecipeIngredientsProps {
  ingredients: string[];
}

export const RecipeIngredients = ({ ingredients }: RecipeIngredientsProps) => {
  return (
    <section className="ingredients-section">
      <p className="ingredients-title">Ингредиенты</p>
      <ul className="ingredients-list">
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
    </section>
  );
};
