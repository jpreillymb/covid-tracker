import { FETCH_NEWS_BEGIN, FETCH_NEWS_SUCCESS, FETCH_NEWS_FAILURE } from '../Actions/newsActions';

const initialState = {
    news: [],
    loadingNews: true,
    error: null
}

export default function(state = initialState, action) {
    switch(action.type) {
        case FETCH_NEWS_BEGIN:
            return {
                ...state,
                loadingNews: true,
                error: null
            };
        case FETCH_NEWS_SUCCESS:
            return {
                ...state,
                loadingNews: false,
                news: action.payload
            };
        case FETCH_NEWS_FAILURE:
            return {
                ...state,
                loadingNews: false,
                news: [],
                error: action.payload
            }
        default: 
            return state;
    }
}