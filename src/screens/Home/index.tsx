import { useState } from 'react'
import {FlatList, Text} from 'react-native'


import {Container, Content, NewMeal, Title} from './styles'

import { Header } from '@components/Header'
import { Percent } from '@components/Percent'
import { ButtonNewMel } from '@components/ButtonNewMel'
import {EmptyListComponent} from '@components/EmptyListComponent'
import { Loading } from '@components/Loading'
import { MelCard } from '@components/MealCard'


import { Data, DietGroupProps } from '@storage/diets/DietStorageDTO'






export function Home (){
    const [isLoading, setIsLoading] = useState(true)
    const [dietList, setDietList] = useState<DietGroupProps[]>(Data)


    return(

        <Container>
            <Header />
            <Percent />

            <Content>
                <NewMeal>
                    <Title>Refeições</Title>
                    <ButtonNewMel 
                        title='Nova refeição'
                        icon = 'plus'
                    />
                </NewMeal>
                
                {isLoading ? 
                    (
                        <FlatList
                            data={dietList}
                            keyExtractor={(item) => item.date}
                            ListEmptyComponent ={()=> (
                                <EmptyListComponent 
                                    title='Você ainda não tem refeições cadastradas'
                                />
                            )}
                            renderItem={(item) => (
                                <>
                                    <Text>{item.item.date}</Text>
                                    <FlatList 
                                        data={item.item.meals}
                                        keyExtractor ={(meal) => meal.id.toString()}
                                        renderItem={(meal) => (
                                            <MelCard 
                                                name={meal.item.name}
                                                time={meal.item.time}
                                                isInDiet={meal.item.isInDiet}
                                            />
                                        )}
                                    />
                                </>
                            )}
                        />
                    )
                    : 
                    <Loading/>
                }
            

            </Content>
        </Container>
    )
}