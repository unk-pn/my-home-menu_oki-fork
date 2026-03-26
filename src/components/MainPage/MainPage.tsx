import { Recipe, foodTypes } from "@/types";
import { recipes as allRecipes } from "@/data/recipes.json";
import { FoodSection } from "./FoodSection";
import { Nav } from "./Nav";

const recipes = allRecipes as Recipe[];

export const MainPage = () => {
  return (
    <div>
      <Nav />

      <div>
        {foodTypes.map((type) => {
          const filteredRecipes = recipes.filter((r) => r.type === type);

          return (
            <FoodSection key={type} title={type} foods={filteredRecipes} />
          );
        })}
      </div>

      <div className="bottom-cat">
        <img src="images/Cats.png" alt="Cats" />
      </div>
    </div>
  );
};
