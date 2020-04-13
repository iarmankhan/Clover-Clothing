import React, {Component, useEffect} from 'react';
import {Route} from 'react-router-dom';
import {connect} from 'react-redux';

import {fetchCollectionsStart} from "../../redux/shop/shop.actions";

import CollectionsOverviewContainer from "../../components/collections-overview/Collections-Overview.container";
import CollectionPageContainer from "../collection/Collection.container";

const Shop = ({fetchCollectionsStart, match}) => {
    useEffect(() => {
        fetchCollectionsStart()
    }, [fetchCollectionsStart]);

    return (
        <div className="shop-page">
            <Route
                exact
                path={`${match.path}`}
                component={CollectionsOverviewContainer}
            />
            <Route
                path={`${match.path}/:collectionId`}
                component={CollectionPageContainer}
            />
        </div>
    );
};


const mapDispatchToProps = dispatch => {
    return {
        fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
    }
};

export default connect(null, mapDispatchToProps)(Shop);
