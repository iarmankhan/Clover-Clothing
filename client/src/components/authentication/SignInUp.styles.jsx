import styled from 'styled-components'

export const AuthenticationFormContainer = styled.div`
    width: 30%;
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 900px){
        width: 70%;
        margin-bottom: 100px;
    }

    @media screen and (max-width: 767px){
        width: 85%;
        margin-bottom: 100px;
    }

    @media screen and (max-width: 452px){
        width: 100%;
        margin-bottom: 100px;
    }

    .title{
        margin: 10px 0;
    }

    .button-container{
        display: flex;
        justify-content: space-between;
    }
`;
