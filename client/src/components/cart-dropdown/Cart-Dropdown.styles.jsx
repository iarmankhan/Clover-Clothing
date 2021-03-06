import styled from 'styled-components'

export const CartDropdownContainer = styled.div`
    position: absolute;
    width: 270px;
    height: 340px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    border: 1px solid #0F1928;
    box-shadow: 0 0 10px 1px #ccc;;
    background-color: #fff;
    top: 80px;
    right: 0;
    z-index: 5;
    
    .empty-message {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: auto 0;
    }

    button{
        margin-top: auto;
    }
`;

export const CartDropdownItems = styled.div`
    height: 240px;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
`;
