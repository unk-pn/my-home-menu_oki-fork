import { Recipe } from "@/types";
import { FoodComponent } from "./FoodComponent";

interface FoodSectionProps {
  title: string;
  foods: Recipe[];
}

export const FoodSection = ({ title, foods }: FoodSectionProps) => {
  return (
    <section className="section" id={`${title}`}>
      <div className="title">
        <div className="full-width-div"></div>
        <h1 style={{ color: "#822E2E" }}>{title}</h1>
        <div className="full-width-div"></div>
      </div>

      <div className="foods">
        {foods.map((recipe) => (
          <FoodComponent key={recipe.id} {...recipe} />
        ))}
      </div>
    </section>
  );
};
