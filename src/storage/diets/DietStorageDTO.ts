export type MealGroupProps = {
  date: string;
  meals: MealProps[];
};

export type MealProps = {
  name: string;
  description: string;
  date: string;
  time: string;
  id: string | number[];
  isInDiet: boolean;
};