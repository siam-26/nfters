import React from 'react';
import Header from './Header';
import Transaction from './Transaction';
import TopCollections from './TopCollections/TopCollections';
import CollectionFeatured from './CollectionFeaturedSection/CollectionFeatured';


const HomePage = () => {
    return (
        <div>
            <Header/>
            <Transaction/>
            <TopCollections/>
            <CollectionFeatured/>
        </div>
    );
};

export default HomePage;