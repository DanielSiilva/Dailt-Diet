import styled, {css} from "styled-components/native";

import { ArrowLeft } from "phosphor-react-native";
import { TouchableOpacity } from "react-native";



export const Container = styled.View`
    flex-direction: row;
    align-items: center;
    gap: 90px;

    width: 100%;
    padding: 30px;

    border: 1px solid red;


`

export const Title = styled.Text`

    ${({theme}) => css`
        color: ${theme.COLORS.GRAY_1};
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.LG}px;
    `}

`

export const ButtonReturn = styled(TouchableOpacity)``


export const Icon = styled(ArrowLeft).attrs(({ theme }) => ({
    size: 24,
    colo: theme.COLORS.GRAY_2,
}))``;


