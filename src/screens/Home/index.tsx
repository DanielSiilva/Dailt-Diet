import { Header } from '@components/Header'
import { Percent } from '@components/Percent'

import {View, Text} from 'react-native'


import {Container, Content, NewMeal, Title} from './styles'


export function Home (){



    return(

        <Container>
            <Header />
            <Percent />

            <Content>
                <NewMeal>
                    <Title>Refeições</Title>
                </NewMeal>
            </Content>
        </Container>
    )
}