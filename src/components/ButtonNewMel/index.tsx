import {
    Container,
    Title, 
    Icon
} from './styles'


type Props = {
    name: string
}

export function ButtonNewMel ({name}: Props){

    return (
        <Container>
            <Icon></Icon>
            <Title>{name}</Title>
        </Container>
    )
}