import { FETCH_STATS_BEGIN, FETCH_STATS_SUCCESS, FETCH_STATS_FAILURE } from '../Actions/statsActions';
import { FETCH_CHARTDATA_BEGIN, FETCH_CHARTDATA_SUCCESS, FETCH_CHARTDATA_FAILURE } from '../Actions/statsActions';

const initialState = {
    data: [],
    loadingStats: true,
    loadingChart: true,
    chartData: [],
    error: null
}

export default function(state = initialState, action) {
    switch(action.type) {
        case FETCH_STATS_BEGIN:
            return {
                ...state,
                loadingStats: true,
                error: null
            };
        case FETCH_STATS_SUCCESS:
            return {
                ...state,
                loadingStats: false,
                data: action.payload
            };
        case FETCH_STATS_FAILURE:
            return {
                ...state,
                loadingStats: false,
                data: [],
                error: action.payload
            };
        case FETCH_CHARTDATA_BEGIN:
            return {
                ...state,
                loadingChart: true,
                error: null
            };
        case FETCH_CHARTDATA_SUCCESS:
            return {
                ...state,
                loadingChart: false,
                chartData: action.payload
            };
        case FETCH_CHARTDATA_FAILURE:
            return {
                ...state,
                loadingChart: false,
                chartData: [],
                error: action.payload
            };
        default: 
            return state;
    }
}