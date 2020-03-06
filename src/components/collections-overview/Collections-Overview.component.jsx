import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './Collections-Overview.styles.scss'

import CollectionPreview from '../../components/collection-preview/Collection-Preview.component';

import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';

const CollectionsOverview = ({ collections, history, match }) => {
    return (
        <div className="collections-overview">
            {
                collections.map(({ id, ...otherCollectionProps }) => (
                    <CollectionPreview key={id} match={match} history={history} {...otherCollectionProps} />
                ))
            }
        </div>
    );
}
 
const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionsOverview);