
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

//Para Teste

export const Data: DietGroupProps[] = [
 {
  date: '20/02/22',
  meals: [
    {
      date: '20/02/22',
      description: 'Comida',
      id: '1',
      name: 'Jeijão',
      isInDiet: true,
      time: 'Nome'
    }
  ]
 },
 {
  date: '21/02/22',
  meals: [
    {
      date: '21/02/22',
      description: 'Comida',
      id: '2',
      name: 'Jeijão',
      isInDiet: true,
      time: 'Nome'
    }
  ]
 },

]