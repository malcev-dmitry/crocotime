export const SEARCH_WIKI = 'SEARCH_WIKI';
export const RECEIVE_WIKI_SEARCH = 'RECEIVE_WIKI_SEARCH';
export const CHECKED_URL = 'CHECKED_URL';

export const searchWiki = (text) => ({
    type: SEARCH_WIKI,
    text
});

export const receiveWikiSearch = ({data}) => ({
    type: RECEIVE_WIKI_SEARCH,
    data
});

export const checkUrl = ({data}) => ({
    type: CHECKED_URL,
    data
});