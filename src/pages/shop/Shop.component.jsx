import React, {Component} from 'react';
import {Route} from 'react-router-dom';

import CollectionsOverview from '../../components/collections-overview/Collections-Overview.component';
import Collection from '../collection/Collection.component';
import {firestore, convertCollectionSnapshotToMap} from "../../firebase/firebase.utils";

class Shop extends Component{
    unsubscribeFromSnapshot = null;

    componentDidMount() {
        const collectionRef = firestore.collection('collections');

        collectionRef.onSnapshot(async snapshot => {
            convertCollectionSnapshotToMap(snapshot)
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

export default Shop;
