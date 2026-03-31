import { Recipe } from "@/types";
import { FoodImage } from "./FoodImage";
import { recipes as allRecipes } from "@/data/recipes.json";
import { RecipeIngredients } from "./RecipeIngredients";
import { RecipeSteps } from "./RecipeSteps";
import { useRouter } from "next/navigation";
import Image from "next/image";

const recipes = allRecipes as Recipe[];

interface FoodPageProps {
  id: number;
}

export const FoodPage = ({ id }: FoodPageProps) => {
  const recipe = recipes.find((r) => r.id === id)!;
  const router = useRouter()

  return (
    <div>
      <button className="back-button" onClick={() => router.back()}>
        <Image
          src="images/icons/left.svg"
          alt="clock"
          className="tag-icon"
          width="20"
          height="20"
        />
        <span style={{ fontWeight: 400 }}>Назад</span>
      </button>

      <FoodImage {...recipe} />

      <h1 className="recipe-title">{recipe.title}</h1>

      <RecipeIngredients ingredients={recipe.ingredients} />

      <RecipeSteps steps={recipe.steps} />
    </div>
  );
};
