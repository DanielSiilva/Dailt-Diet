
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
  date: '20.02.22',
  meals: [
    {
      date: '20.02.22',
      description: 'Comida',
      id: '1',
      name: 'X-Tudo',
      isInDiet: true,
      time: '11:00'
    },
    {
      date: '22.02.22',
      description: 'Comida',
      id: '2',
      name: 'X-Tudo',
      isInDiet: true,
      time: '11:00'
    }
  ]
 },
 {
  date: '21.02.22',
  meals: [
    {
      date: '21/02/22',
      description: 'Comida',
      id: '2',
      name: 'Vitamina da banana com leite',
      isInDiet: true,
      time: '20:00'
    }
  ]
 },

]