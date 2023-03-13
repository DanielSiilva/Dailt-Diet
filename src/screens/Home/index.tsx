
import { Header } from '@components/Header'
import { Percent } from '@components/Percent'
import { ButtonNewMel } from '@components/ButtonNewMel'

import {Container, Content, NewMeal, Title} from './styles'


export function Home (){



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
            </Content>
        </Container>
    )
}