import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

export default function Dashboard() {
    return (
        <React.Fragment>
            <Header></Header>
            <h1>You were successfully able to route to dashboard</h1>
            <Footer></Footer>
        </React.Fragment>
    );
}

