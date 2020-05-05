import { combineReducers } from 'redux';
import statsReducer from './statsReducer';
import newsReducer from './newsReducer';
import countryReducer from './countryReducer';

export default combineReducers({
    info: statsReducer,
    newsapi: newsReducer,
    currentCountry: countryReducer,
});