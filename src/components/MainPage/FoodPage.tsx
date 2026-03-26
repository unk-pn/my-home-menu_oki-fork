import { Recipe, foodTypes } from "@/types";
import { recipes as allRecipes } from "@/data/recipes.json";
import { FoodSection } from "./FoodSection";
import { Footer } from "./Footer";
import { Header } from "./Header/Header";

const recipes = allRecipes as Recipe[];

export const FoodPage = () => {
  return (
    <div>
      <Header />

      <div>
        {foodTypes.map((type) => {
          const filteredRecipes = recipes.filter((r) => r.type === type);

          return (
            <FoodSection key={type} title={type} foods={filteredRecipes} />
          );
        })}
      </div>

      <Footer />
    </div>
  );
};
