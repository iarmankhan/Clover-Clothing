import React from 'react';
import { connect } from 'react-redux';

import CollectionItem from '../../components/collection-item/Collection-Item.component';
import { selectCollection } from '../../redux/shop/shop.selectors';

import {CollectionItems, CollectionPage} from "./Collection.styles";

const Collection = ({collection}) => {
    const {title, items} = collection;

    return (
        <CollectionPage>
            <h2 className='title'>{title}</h2>
            <CollectionItems>
                {
                    items.map(item => <CollectionItem key={item.id} item={item} />)
                }
            </CollectionItems>
        </CollectionPage>
    );
};


const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
});


export default connect(mapStateToProps)(Collection);
