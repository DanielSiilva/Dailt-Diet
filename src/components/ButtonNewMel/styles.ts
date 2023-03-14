import {TouchableOpacity} from 'react-native'
import {Plus} from 'phosphor-react-native'
import styled, {css} from "styled-components/native";


export const Container = styled(TouchableOpacity)`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 16px 24px;
    gap: 12px;

    width: 100%;
    height: 65px;

    background: ${({theme}) => theme.COLORS.GRAY_2};
    border-radius: 6px; 

`;

export const Icon = styled(Plus).attrs(({theme}) =>({
    color: theme.COLORS.WHITE,
    size:18
}))`
`;



export const Title = styled.Text`

    ${({theme}) => css`
        color: ${theme.COLORS.WHITE};
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.MD}px;
    `}
    
`;