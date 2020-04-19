import React from 'react';
import { withRouter } from 'react-router-dom';

import {MenuItemBgImage, MenuItemContainer, MenuItemContent} from "./MenuItem.styles";

const MenuItem = ({title, imageUrl, size, history, linkUrl, match}) => {
    return (
        <MenuItemContainer onClick={() => history.push(`${match.url}${linkUrl}`)}>
            <MenuItemBgImage className='bgImg' style={{
                backgroundImage: `url(${imageUrl})`
            }} />
            <MenuItemContent className='content'>
                <h1 className="title">{title.toUpperCase()}</h1>
                <span className="subtitle">Shop Now</span>
            </MenuItemContent>
        </MenuItemContainer>
    );
};

export default withRouter(MenuItem);
