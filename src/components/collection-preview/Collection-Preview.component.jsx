import React from 'react';

import './Collection-Preview.styles.scss'
import CollectionItem from '../collection-item/Collection-Item.component';
import CustomButton from '../custom-button/CustomButton.component';

const CollectionPreview = ({title, items}) => {
    return (
        <div className="collection-preview">
            <h1 className="title">{title.toUpperCase()}</h1>
            <div className="preview">
                {
                    items
                        .filter((item, idx) => idx < 4)
                        .map(item => (<CollectionItem key={item.id} item={item} />))
                }
            </div>
            <div className="show-more">
                <CustomButton>Show More</CustomButton>
            </div>
        </div>
    );
}
 
export default CollectionPreview;