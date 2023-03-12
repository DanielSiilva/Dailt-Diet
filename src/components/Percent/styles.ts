import { UsersThree } from "phosphor-react-native";
import styled, {css} from "styled-components/native";


export const Container = styled.View`
    justify-content: center;
    align-items: center;

    padding: 20px 16px;
    gap: 2px;
    
    height: 115px;
    top: 30px;
    
    background: ${({theme}) => theme.COLORS.GREEN_LIGHT};
    border-radius: 8px;

`

export const TextPercent = styled.Text`

    width: 115px;
    height: 42px;

    ${({theme}) => css`
        color: ${theme.COLORS.GRAY_1};
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.XXL}px;
    `}

`

export const TextContent = styled.Text`
    ${({theme}) => css`
        color: ${theme.COLORS.GRAY_2};
        font-family: ${theme.FONT_FAMILY.REGULAR};
        font-size: ${theme.FONT_SIZE.MD}px;
    `}

`

export const Icon = styled(UsersThree).attrs(({theme}) =>({

}))`


`