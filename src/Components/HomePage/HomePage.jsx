import React from 'react';
import Header from './Header';
import Transaction from './Transaction';
import TopCollections from './TopCollections/TopCollections';

const HomePage = () => {
    return (
        <div>
            <Header/>
            <Transaction/>
            <TopCollections/>
        </div>
    );
};

export default HomePage;