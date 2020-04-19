import {connect} from 'react-redux'
import {compose} from 'redux'

import {createStructuredSelector} from 'reselect'
import {selectIsCollectionsLoaded} from '../../redux/shop/shop.selectors'
import Collection from '../collection/Collection.component';
import withSpinner from "../../components/with-spinner/With-Spinner.component";

const mapStateToProps = createStructuredSelector({
    isLoading: (state) => !selectIsCollectionsLoaded(state)
});

const CollectionPageContainer = compose(
    connect(mapStateToProps),
    withSpinner
)(Collection);

export default CollectionPageContainer
