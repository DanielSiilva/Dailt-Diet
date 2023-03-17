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
            <Text>{time}</Text>
            <Text>{name}</Text>
            <Text>{isInDiet}</Text>
        </Container>
     )
}