import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import {connect} from 'react-redux';

import {fetchCollectionsStart} from "../../redux/shop/shop.actions";

import CollectionsOverviewContainer from "../../components/collections-overview/Collections-Overview.container";
import CollectionPageContainer from "../collection/Collection.container";

class Shop extends Component{
    componentDidMount() {
        const {fetchCollectionsStart} = this.props
        fetchCollectionsStart()
    }

    render(){
        const {match} = this.props;
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
    }
}


const mapDispatchToProps = dispatch => {
    return {
        fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
    }
};

export default connect(null, mapDispatchToProps)(Shop);
