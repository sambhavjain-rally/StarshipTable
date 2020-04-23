import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import TextFilter from '../Filters/TextFilter';
import SelectFilter from '../Filters/SelectFilter';
import CheckFilter from '../Filters/CheckFilter';
import DateFilter from '../Filters/DateFilter';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import ButtonSubmit from '../Buttons/ButtonSubmit';
const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#f4895e',
            main: '#F26C36',
            dark: '#a94b25',
            contrastText: '#333333',
        },
        secondary: {
            light: '#ff7961',
            main: '#f44336',
            dark: '#ba000d',
            contrastText: '#000',
        },
    }, typography: {
        fontFamily: [
            'Helvetica Neue Regular',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
    },
});

export default function Benefits() {
    return (
        <ThemeProvider theme={theme}>
            <React.Fragment>
                <div>Filter</div>
                <TextFilter></TextFilter>
                <SelectFilter></SelectFilter>
                <CheckFilter></CheckFilter>
                <DateFilter></DateFilter>
                <ButtonSubmit></ButtonSubmit>
            </React.Fragment >
        </ThemeProvider>
    );
}

