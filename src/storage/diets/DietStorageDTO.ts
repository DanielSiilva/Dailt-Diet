
export type DietProps = {
  name: string;
  description: string;
  date: string;
  time: string;
  id: string | number[];
  isInDiet: boolean;
};

export type DietGroupProps = {
  date: string;
  meals: DietProps[];
};