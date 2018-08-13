import {RECEIVE_WIKI_SEARCH} from '../actions/wikiSearch';

export const wikiSearch = (state = {data: []}, action) => {
    switch (action.type) {
        case RECEIVE_WIKI_SEARCH:
            return {
                ...state,
                data: action.data
            };
        default:
            return state;
    }
};