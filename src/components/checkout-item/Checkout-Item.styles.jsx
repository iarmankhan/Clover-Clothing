import styled from 'styled-components'

export const CheckoutItemContainer = styled.tr`
    width: 100%;

    td{
        text-align: center;
    }

    .quantity{
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 24px;
    
        .arrow{
            cursor: pointer;
            margin: 10px;
        }
    }

    .image-container {
      width: 20%;
    
      img {
          width: 100%;
      }
    }
`;
