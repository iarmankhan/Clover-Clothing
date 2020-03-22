import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import {connect} from 'react-redux';

import CollectionsOverview from '../../components/collections-overview/Collections-Overview.component';
import Collection from '../collection/Collection.component';
import {firestore, convertCollectionSnapshotToMap} from "../../firebase/firebase.utils";
import {updateCollections} from "../../redux/shop/shop.actions";

class Shop extends Component{
    unsubscribeFromSnapshot = null;

    componentDidMount() {
        const {updateCollections} = this.props;
        const collectionRef = firestore.collection('collections');

        collectionRef.onSnapshot(async snapshot => {
            const collectionsMap = convertCollectionSnapshotToMap(snapshot);
            updateCollections(collectionsMap)
        })
    }

    render(){
        const {match} = this.props;
        return (
            <div className="shop-page">
                <Route exact path={`${match.path}`} component={CollectionsOverview} />
                <Route path={`${match.path}/:collectionId`} component={Collection} />
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
    }
};

export default connect(null, mapDispatchToProps)(Shop);
