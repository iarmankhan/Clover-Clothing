import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CollectionPreview from '../../components/collection-preview/Collection-Preview.component';

import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';
import {CollectionsOverviewContainer} from "./Collections-Overview.styles";

const CollectionsOverview = ({ collections, history, match }) => {
    return (
        <CollectionsOverviewContainer>
            {
                collections.map(({ id, ...otherCollectionProps }) => (
                    <CollectionPreview key={id} match={match} history={history} {...otherCollectionProps} />
                ))
            }
        </CollectionsOverviewContainer>
    );
};

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionsOverview);
