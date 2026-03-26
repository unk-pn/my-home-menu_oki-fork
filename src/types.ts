export const foodTypes = [
  "Ужины",
  "Мясо",
  "Салаты",
  "Гарниры",
  "Доп",
  "Супы",
  "Десерты",
  "Каши",
] as const;

export type FoodType = (typeof foodTypes)[number];

export type Recipe = {
  id: number;
  type: FoodType;
  photo: string;
  title: string;
  time: string;
  price: number;
  ingredients: string[];
  steps: string[];
};
