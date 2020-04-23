import React from 'react';
import './Filters.scss';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import ButtonSubmit from '../Buttons/ButtonSubmit';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Search from "@material-ui/icons/Search";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import { Checkbox } from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';

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
        fontSize: 13
        , fontFamily: [
            'Helvetica Neue',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
    }
});

export default function Benefits() {

    // The first commit of Material-UI
    const [selectedDate, setSelectedDate] = React.useState<Date | null>(
        new Date('2014-08-18T21:11:54'),
    );

    const handleDateChange = (date: Date | null) => {
        setSelectedDate(date);
    };

    return (
        <ThemeProvider theme={theme}>
            <div className="filterContainer">
                <div className="filterLabel">
                    Filter <i className="material-icons">keyboard_arrow_down</i>
                </div>

                {/* This is where filters will start */}

                <div className="filterList">
                    <div className="filter">
                        <Grid container spacing={1} alignItems="flex-end">
                            <Grid item>
                                <Search className="searchIcon" />
                            </Grid>
                            <Grid item className="textField">
                                <TextField id="input-with-icon-grid" label="With a grid" />
                            </Grid>
                        </Grid>
                    </div>
                    <div className="filter">
                        <FormControl>
                            <InputLabel id="demo-simple-select-label">Select Filter</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                // value={age}
                                // onChange={handleChange}
                                className="selectField"
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    <div className="filter">
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <KeyboardDatePicker
                                disableToolbar
                                variant="inline"
                                format="MM/dd/yyyy"
                                margin="normal"
                                id="date-picker-inline"
                                label="Date picker inline"
                                value={selectedDate}
                                onChange={handleDateChange}
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }}
                            />
                        </MuiPickersUtilsProvider>
                    </div>
                    <div className="filter">
                        <FormControlLabel
                            control={
                                <Checkbox
                                    // checked={state.checkedB}
                                    // onChange={handleChange}
                                    name="checkedB"
                                    color="primary"
                                />
                            }
                            label="Primary"
                        />
                    </div>
                </div>
            </div>
        </ThemeProvider>
    );
}

