import React from 'react';

import './Collection-Preview.styles.scss'
import CollectionItem from '../collection-item/Collection-Item.component';

const CollectionPreview = ({title, items}) => {
    return (
        <div className="collection-preview">
            <h1 className="title">{title.toUpperCase()}</h1>
            <div className="preview">
                {
                    items
                        .filter((item, idx) => idx < 4)
                        .map(({id, ...otherItemProps}) => (<CollectionItem key={id} {...otherItemProps} />))
                }
            </div>
            <div className="show-more">
                <button>Show More</button>
            </div>
        </div>
    );
}
 
export default CollectionPreview;