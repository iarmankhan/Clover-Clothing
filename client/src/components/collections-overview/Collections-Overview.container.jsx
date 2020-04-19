import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect'
import {compose} from 'redux'

import {selectIsCollectionFetching} from '../../redux/shop/shop.selectors'
import withSpinner from "../with-spinner/With-Spinner.component";
import CollectionsOverview from "./Collections-Overview.component";

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsCollectionFetching
});

const CollectionsOverviewContainer = compose(
    connect(mapStateToProps),
    withSpinner
)(CollectionsOverview);

export default CollectionsOverviewContainer
