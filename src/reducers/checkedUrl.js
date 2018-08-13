import {CHECKED_URL} from "../actions/wikiSearch";

export const checkedUrl = (state = {data: []}, action) => {
    switch (action.type) {
        case CHECKED_URL:
            return {
                ...state,
                data: action.data
            };
        default:
            return state;
    }
};