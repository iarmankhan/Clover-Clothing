import styled from 'styled-components'

export const CollectionPreviewContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;

    .title {
        font-size: 28px;
        margin-bottom: 25px;
    }
`;

export const CollectionPreviewList = styled.div`
    display: flex;
    justify-content: space-between;
    
    @media screen and (max-width: 768px) {
        flex-wrap: wrap;
    }
`;

export const CollectionPreviewShowMore = styled.div`
    margin-top: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    
    button {
        padding-left: 25px;
        padding-right: 25px;
    }
`;
