import styled, {css} from "styled-components/native";

export const Container = styled.View`
    border: 1px solid red;

    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 14px 16px 14px 12px;
    gap: 12px;
    margin-bottom: 10px;

    border: 1px solid ${({theme}) => theme.COLORS.GRAY_5};
    border-radius: 6px;

`

export const Content = styled.View`
    flex-direction: row;
    align-items: center;
    gap: 5px;

`


export const Time = styled.Text`
  margin-right: 10px;
  padding-right: 10px;

  border-right-color: #dddedf;
  border-right-width: 1px;
    
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.MD}px;
        color: ${theme.COLORS.GRAY_1};
        font-family: ${theme.FONT_FAMILY.BOLD};
  `};



`

export const Name = styled.Text`
    width: 216px;
    
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.LG}px;
        color: ${theme.COLORS.GRAY_2};
        font-family: ${theme.FONT_FAMILY.REGULAR};
  `};

`

export const IsDiet = styled.View`
    align-items: center;
`