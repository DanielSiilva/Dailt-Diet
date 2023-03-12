
import { View } from 'react-native'
import {Container, TextContent, TextPercent, ContainerPercent, Icon} from './styles'


export function Percent(){


    return (
        <Container>
            <ContainerPercent>
                <TextPercent>90,86%</TextPercent>
                <TextContent>das refeições dentro da dieta</TextContent>
            </ContainerPercent>

            <Icon />
        </Container>
    )
}