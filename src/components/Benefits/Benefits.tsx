import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import TextFilter from '../Filters/TextFilter';
import SelectFilter from '../Filters/SelectFilter';
import CheckFilter from '../Filters/CheckFilter';
import DateFilter from '../Filters/DateFilter';

export default function Benefits() {
    return (
        <React.Fragment>
            <Header></Header>
            <TextFilter></TextFilter>
            <SelectFilter></SelectFilter>
            <CheckFilter></CheckFilter>
            <DateFilter></DateFilter>
            <Footer></Footer>
        </React.Fragment >
    );
}

