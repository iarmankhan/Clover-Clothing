import styled, {css} from "styled-components";

const button = css`
    cursor: pointer;
    padding: 8px 15px;
    border-radius: 8px;
    font-size: 18px;
    transition: 0.4s ease;
    display: flex;
    justify-content: center;
    font-family: 'Poppins',serif;
    letter-spacing: 1px;
`;

const secondary = css`
    background-color: transparent;
    color: #0F1928;
    font-weight: lighter;
    border: 2px solid #F8B500;

    &:hover {
        color: #F8B500;
        border: 2px solid #F8B500;
    }
`;

const primary = css`
    background-color: #0F1928;
    color: #FDFDFC;
    border: 1px solid transparent;   
    font-weight: 500;
    
    &:hover {
        background-color: #f8b500;
        border: 1px solid transparent;
        color: #0F1928;
    }
`;

export const CustomButtonContainer = styled.button`
    ${button};
    ${({isSecondary}) => isSecondary ? secondary : primary};

    &:focus{
        outline: none;
    }
`;
