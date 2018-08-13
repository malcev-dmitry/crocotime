import {Route} from 'react-router';

import {ConnectedWikiSearch} from './containers/CustomWikiSearch/CustomWikiSearch';

export const wikiSearchRoute = function() {
    return <Route key="wikiSearch" path="/wiki_search" component={ConnectedWikiSearch}/>
};

