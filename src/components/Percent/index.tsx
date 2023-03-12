
import { View } from 'react-native'
import {Container, TextContent, TextPercent, Icon} from './styles'


export function Percent(){


    return (
        <Container>
            <TextPercent>90,86%</TextPercent>
            <TextContent>das refeições dentro da dieta</TextContent>
          <View>
            <Icon />
          </View>
        </Container>
    )
}