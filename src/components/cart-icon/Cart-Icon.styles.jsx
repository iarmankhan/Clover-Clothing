import styled from 'styled-components'

export const CartIconContainer = styled.div`
    position: relative;
    width: 45px;
    height: 45px;
    display: flex;
    cursor: pointer;
    justify-content: center;
    align-items: center;
    
    .shopping-icon{
        width: 25px;
        height: 25px;
        fill: #0F1928
    }

    .item-count {
        position: absolute;
        font-size: 11px;
        font-weight: bold;
        bottom: 11px;
    }
`;
