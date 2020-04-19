import styled from 'styled-components'

export const MenuItemContainer = styled.div`
    min-width: 30%;
    height: 240px;
    flex: 1 1 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #0F1928;
    margin: 0 7.5px 15px;
    overflow: hidden;

    @media screen and (max-width: 768px) {
        min-width: 45%;
    }

    &:hover{
        cursor: pointer;

        & .bgImg{
            transform: scale(1.1);
        }
        &.content{
            opacity: 0.9;
        }
    }

    &:first-child {
        margin-right: 7.5px;
    }

    &:last-child {
        margin-left: 7.5px;
    }
`;

export const MenuItemBgImage = styled.div`
    width: 100%;
    height: 100%;
    background-position: center;
    background-size: cover;
    transition: transform .6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
`;

export const MenuItemContent = styled.div`
    height: 90px;
    padding: 0 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid #0F1928;
    background-color: #FFD563;
    opacity: 0.7;
    position: absolute;
    
    .title{
        font-weight: bold;
        margin-bottom: 6px;
        margin-top: 0;
        font-size: 22px;
        color: #0F1928;
    }
    
    .subtitle {
        font-weight: lighter;
        font-size: 16px;
    }
`;
