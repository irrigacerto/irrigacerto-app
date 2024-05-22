import styled, { css } from "styled-components/native";


export const CultureContainer = styled.View`
  flex: 1;
`;

export const CultureContent = styled.View`
  display: flex;
  flex-direction: "column";
  gap: 10px;
`;

export const Label = styled.Text`
  ${({ theme }) => css`
    margin-top: 8px;
    color: ${theme.colors["neutral-4"]};
    font-family: "Poppins-bold";
  `}
`;

export const ContainerInput = styled.View`
  border: 1px solid black;
  ${({ theme }) => css`
    background-color: transparent;
    border-radius: 90px;
    border: 1.5px solid ${theme.colors["gray-3"]};
    padding: 10px;
    padding-left: 20px;
    font-size: ${theme.font.sizes.small}px;
    font-weight: ${theme.font.weight.medium};
    font-family: "Poppins-regular";
  `}
`;