import {TouchableOpacityProps} from 'react-native'

import {
    Container,
    Title, 
    ButtonTypeStyleProps,
    PencilIcon,
    PlusIcon,
    TrashIcon
} from './styles'


type Props = TouchableOpacityProps & {
    title: string;
    icon?: 'plus' | 'trash' | 'pencil' ;
    type?: ButtonTypeStyleProps
}

export function ButtonNewMel ({title, type = 'primary', icon, ...rest}: Props){
    
    const IconColor = type === 'primary' ? "#EFF0F0" : "#1B1D1E";

    return (
        <Container {...rest} type={type}>
            {icon === "plus" && <PlusIcon color={IconColor} />}
            {icon === "trash" && <TrashIcon color={IconColor} />}
            {icon === "pencil" && <PencilIcon color={IconColor} />}

            <Title>
                {title}
            </Title>
        </Container>
    )
}