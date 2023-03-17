
import {
    Container, 
    Name, 
    Time, 
    IsDiet, 
    Content
} from './styles'

import { Circle } from "phosphor-react-native";

interface DietProps {
    name: string;
    time: string;
    isInDiet: boolean;
}

export function MelCard ({time, name, isInDiet}:DietProps){

     return (
        <Container>
            <Content>
                <Time>{time}</Time>
                <Name>{name}</Name>
            </Content>
            <IsDiet>
                {isInDiet ? 
                    <Circle 
                        size={14}
                        weight='fill'
                        color='#CBE4B4'
                    /> 
                    : 
                    <Circle 
                        size={14}
                        weight='fill'
                        color='#F3BABD'
                    />
                }
            </IsDiet>
        </Container>
     )
}