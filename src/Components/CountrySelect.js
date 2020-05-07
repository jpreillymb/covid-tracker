import React from 'react';
import { connect } from 'react-redux';
import { MenuItem, FormHelperText, FormControl, Select, Paper } from '@material-ui/core';
import { updateCurrentCountry } from '../Actions/countryActions';
import '../App.css';

const CountrySelect = (props) => {

    const handleChange = (event) => {
        const country = event.target.value;
        props.updateCountry(country);
    }

    if (props.loadingStats) {
        return (
            <div className="country-select-container">
                <FormControl className="country-select">
                    <Select
                        id="country-picker"
                        value=""
                        onChange={handleChange}
                        label="Country"
                        >
                    </Select>
                    <FormHelperText>Loading countries...</FormHelperText>
                </FormControl>
            </div>
        );
    }

    return (
        <div className="country-select-container">
            <Paper className="select-margin">
                <FormControl className="country-select">
                    <Select
                        id="country-picker"
                        value={props.currentCountry}
                        onChange={handleChange}
                        label="Country"
                        >   
                            <MenuItem value="Global">Global Totals</MenuItem>
                            {props.data.Countries.map((country) =>
                                <MenuItem key={country.Slug} value={country.Slug}>{country.Country}</MenuItem>
                            )}
                    </Select>
                    <FormHelperText>Choose a country to view its data</FormHelperText>
                </FormControl>
            </Paper>
        </div>
    )
}

const mapStateToProps = state => ({
    data: state.info.data,
    loadingStats: state.info.loadingStats,
    currentCountry: state.currentCountry.current
})

const mapDispatchToProps = dispatch => {
    return {
        updateCountry: (country) => {
            dispatch(updateCurrentCountry(country))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CountrySelect)

