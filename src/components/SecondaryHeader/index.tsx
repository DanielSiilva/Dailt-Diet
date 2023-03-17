

import {
    Container,
    ButtonReturn,
    Icon,
    Title
} from './styles'


type Props = {
    title: string
}

export function SecondaryHeader ({title}:Props){

    return (
        <Container>
            <ButtonReturn>
                <Icon />
            </ButtonReturn>

            <Title>
                {title}
            </Title>
        </Container>
    )
}