import React from 'react';

import CollectionItem from '../collection-item/Collection-Item.component';
import CustomButton from '../custom-button/CustomButton.component';
import {
    CollectionPreviewContainer,
    CollectionPreviewList,
    CollectionPreviewShowMore
} from "./Collection-Preview.styles";

const CollectionPreview = ({title, routeName, items, history, match}) => {
    return (
        <CollectionPreviewContainer>
            <h1 className="title">{title.toUpperCase()}</h1>
            <CollectionPreviewList>
                {
                    items
                        .filter((item, idx) => idx < 4)
                        .map(item => (<CollectionItem key={item.id} item={item} />))
                }
            </CollectionPreviewList>
            <CollectionPreviewShowMore>
                <CustomButton onClick={() => {history.push(`${match.path}/${routeName}`)}}>Show More</CustomButton>
            </CollectionPreviewShowMore>
        </CollectionPreviewContainer>
    );
};

export default CollectionPreview;
