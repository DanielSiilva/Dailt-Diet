import {View, Text} from 'react-native'

import {Container, MelContainer} from './styles'

interface DietProps {
    name: string;
    time: string;
    isInDiet: boolean;
}

export function MelCard ({time, name, isInDiet}:DietProps){

     return (
        <Container>
            <View>
                <Text>{name}</Text>
            </View>
        </Container>
     )
}