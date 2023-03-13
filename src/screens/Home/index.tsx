import { useState } from 'react'
import {FlatList} from 'react-native'

import {DietListProps} from '@storage/diets/DietStorageDTO'

import { Header } from '@components/Header'
import { Percent } from '@components/Percent'
import { ButtonNewMel } from '@components/ButtonNewMel'

import {Container, Content, NewMeal, Title} from './styles'
import { MelCard } from '@components/MealCard'


/* 
    //Data : data => string (ordenar )
    // Hora : data => string
    // Title : string
    // dentro da dienta: bollean
*/

/* 
   Data: [ hora, title, dentro da dienta ]
*/

export function Home (){
    const [dietList, setDietList] = useState<DietListProps[]>([])


    return(

        <Container>
            <Header />
            <Percent />

            <Content>
                <NewMeal>
                    <Title>Refeições</Title>
                    <ButtonNewMel 
                        name='Nova refeição'
                    />
                </NewMeal>
                {/* FlatList ou SectionList */}
                
                <MelCard />

            </Content>
        </Container>
    )
}