import { FETCH_STATS_BEGIN, FETCH_STATS_SUCCESS, FETCH_STATS_FAILURE } from '../Actions/statsActions';

const initialState = {
    data: [],
    loadingStats: true,
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
            }
        default: 
            return state;
    }
}