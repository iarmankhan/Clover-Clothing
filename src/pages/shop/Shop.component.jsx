import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {fetchCollectionsStartAsync} from "../../redux/shop/shop.actions";

import CollectionsOverview from '../../components/collections-overview/Collections-Overview.component';
import Collection from '../collection/Collection.component';
import withSpinner from "../../components/with-spinner/With-Spinner.component";
import {selectIsCollectionFetching, selectIsCollectionsLoaded} from "../../redux/shop/shop.selectors";

const CollectionOverviewWithSpinner = withSpinner(CollectionsOverview);
const CollectionPageWithSpinner = withSpinner(Collection);

class Shop extends Component{
    componentDidMount() {
        const {fetchCollectionsStartAsync} = this.props
        fetchCollectionsStartAsync()
    }

    render(){
        const {match, isFetchingCollections, isCollectionsLoaded} = this.props;
        return (
            <div className="shop-page">
                <Route
                    exact
                    path={`${match.path}`}
                    render={(props) => <CollectionOverviewWithSpinner isLoading={isFetchingCollections} {...props} /> }
                />
                <Route
                    path={`${match.path}/:collectionId`}
                    component={(props) => <CollectionPageWithSpinner isLoading={!isCollectionsLoaded} {...props} />}
                />
            </div>
        );
    }
}

const mapStateToProps = createStructuredSelector({
    isFetchingCollections: selectIsCollectionFetching,
    isCollectionsLoaded: selectIsCollectionsLoaded
});

const mapDispatchToProps = dispatch => {
    return {
        fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
