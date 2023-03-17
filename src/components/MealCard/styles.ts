import styled from "styled-components/native";

export const Container = styled.View`
    border: 1px solid red;

    flex-direction: row;
    align-items: center;
    padding: 14px 16px 14px 12px;
    gap: 12px;
    margin-bottom: 10px;

    border: 1px solid ${({theme}) => theme.COLORS.GRAY_5};
    border-radius: 6px;

`

export const MelContainer = styled.View`


`