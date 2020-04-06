import React from 'react';

import {connect} from 'react-redux'

import { addItem } from '../../redux/cart/cart.actions';
import {
    CollectionItemButton,
    CollectionItemContainer,
    CollectionItemFooter,
    CollectionItemImage
} from "./Collection-Item.styles";

const CollectionItem = ({item, addItem}) => {
    const { name, price, imageUrl } = item;
    return (
        <CollectionItemContainer>
            <CollectionItemImage
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}
            />
            <CollectionItemFooter>
                <span className="name">{name}</span>
                <span className="price">${price}</span>
            </CollectionItemFooter>
            <CollectionItemButton onClick={() => addItem(item)} isSecondary>Add to Cart</CollectionItemButton>
        </CollectionItemContainer>
    );
};

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);
