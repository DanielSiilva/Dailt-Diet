import { useState } from 'react'
import {FlatList, Text} from 'react-native'

import {useNavigation} from "@react-navigation/native"


import {Container, Content, NewMeal, Title, TitleMeals} from './styles'

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

    const navigation= useNavigation()

    function handleNewMel(){
       navigation.navigate('newMel')
    }

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
                        onPress={handleNewMel}
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
                            showsVerticalScrollIndicator={false}
                            renderItem={(item) => (
                                <>
                                    <TitleMeals>{item.item.date}</TitleMeals>
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