
import { Header } from '@components/Header'
import { Percent } from '@components/Percent'
import { ButtonNewMel } from '@components/ButtonNewMel'

import {Container, Content, NewMeal, Title} from './styles'

/* 
    //Data : data => string (ordenar )
    // Hora : data => string
    // Title : string
    // dentro da dienta: bollean
*/

/* 
   Data: [ hora, title, dentro da dienta ]
*/



type Ola = {

}



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