interface RecipeStepsProps {
  steps: string[];
}

export const RecipeSteps = ({ steps }: RecipeStepsProps) => {
  return (
    <section className="steps-section">
      <p className="steps-title">Рецепт</p>
      <ol className="steps-list">
        {steps.map((step, index) => (
          <li key={index}>
            {step}
          </li>
        ))}
      </ol>
    </section>
  );
};
