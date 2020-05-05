import { UPDATE_CURRENT_COUNTRY } from '../Actions/countryActions';

const initialState = {
    current: "Global"
}

export default function(state = initialState, action) {
    switch(action.type) {
        case UPDATE_CURRENT_COUNTRY:
            return {
                ...state,
                current: action.payload
            };
        default: 
            return state;
    }
}