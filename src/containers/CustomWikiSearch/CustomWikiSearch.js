import * as React from 'react';
import * as PropTypes from 'react/lib/ReactPropTypes';
import {connect} from 'react-redux';
import * as _ from 'lodash';

import {UrlComponent} from "../../components/UrlComponent/urlComponent";
import {ConnectedSearchForm} from '../../components/SearchForm/SearchForm';
import {searchWiki} from '../../actions/wikiSearch';
import {ButtonComponent} from "../../components/Button/click";
import {CheckoffComponent} from "../../components/Button/checkOff";

export class CustomWikiSearch extends React.Component {
    static propTypes = {
        searchResults: PropTypes.arrayOf(PropTypes.object),
        checkResult: PropTypes.arrayOf(PropTypes.object),
        fetchData: PropTypes.func
    };

    constructor(...args) {
        super(...args);
        this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
    }

    render() {
        let items = [];
        if (this.props.searchResults) {
            let pageLinks = _.map(this.props.searchResults, pageDescription =>
                <div style={{width: '40%', border: '2px solid grey', marginTop: '15px', padding: '5px'}}>
                    <ButtonComponent pageDescription={pageDescription} />
                    <UrlComponent pageDescription={pageDescription} />
                </div>
            );
            items.push(
                <div key="searchResults" style={{marginTop: '30px'}}>
                    <label style={{display: 'block', width: '40%', textAlign: 'center'}}>
                        Search result
                    </label>
                    {pageLinks}
                </div>);
        }
        if (this.props.checkResult) {
            let pageLinksChecked = _.map(this.props.checkResult, pageDescription =>
                <div style={{width: '100%',
                            border: '2px solid grey',
                            padding: '5px',
                            marginTop: '15px'}}>
                    <CheckoffComponent pageDescription={pageDescription} />
                    <UrlComponent pageDescription={pageDescription} />
                </div>
            );
            items.push(
                <div key="checkedResults" style={{position: 'absolute', right: '20px', top: '60px', width: '40%'}}>
                    <label style={{display: 'block',
                                    width: '100%',
                                    textAlign: 'center',
                                    right: '10px',
                                    top: '59px'}}>
                        Checked result
                    </label>
                    {pageLinksChecked}
                </div>);
        }

        return <div><ConnectedSearchForm style={{width: '100%'}}
                                         form="wikiSearch"
                                         onSubmit={this.handleSearchSubmit}/>{items}</div>;
    }

    handleSearchSubmit(values) {
        if (values.search) {
            this.props.fetchData(values.search);
        }
    }
}

const mapStateToProps = state => ({
    checkResult: state.checkedUrl && state.checkedUrl.data,
    searchResults: state.wikiSearch && state.wikiSearch.data,
});

const mapDispatchToProps = dispatch => ({
    fetchData(text) {
        dispatch(searchWiki(text));
    }
});

export const ConnectedWikiSearch = connect(mapStateToProps, mapDispatchToProps)(CustomWikiSearch);