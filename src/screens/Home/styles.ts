import {SafeAreaView} from 'react-native-safe-area-context'

import styled, {css} from "styled-components/native";


export const Container = styled(SafeAreaView)`
    flex: 1;

    background-color: ${({theme}) => theme.COLORS.WHITE};
    color: ${({theme}) => theme.COLORS.GRAY_1};

    padding: 0px 30px;
    gap: 40px;
`
export const Content = styled.View`
    flex: 1;
    
`

export const NewMeal = styled.View`
    gap:10px;
    width: 100%;
    height: 100px;

`
export const Title = styled.Text`
   
   ${({theme}) => css`
        color: ${theme.COLORS.GRAY_1};
        font-family: ${theme.FONT_FAMILY.REGULAR};
        font-size: ${theme.FONT_SIZE.LG}px;
    `}

`