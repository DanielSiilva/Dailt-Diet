import { ArrowUpRight } from "phosphor-react-native";
import styled, {css} from "styled-components/native";



export const Container = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: center;

    padding: 16px 16px;
   
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
export const ContainerPercent = styled.View`

    justify-content: center;
    align-items: center;

`
export const Icon = styled(ArrowUpRight).attrs(({theme}) =>({
    size: 24,
    color: theme.COLORS.GREEN_DARK,

}))`
    position: absolute;
    width: 24px;
    height: 24px;
    right: 8px;
    top: 8px;
`