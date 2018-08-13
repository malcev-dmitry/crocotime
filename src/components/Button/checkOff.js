import * as React from 'react';
import {checkUrl, receiveWikiSearch} from '../../actions/wikiSearch';
import {connect} from "react-redux";
import * as PropTypes from "react/lib/ReactPropTypes";

export class CheckoffClass extends React.Component {

    static propTypes = {
        searchResults: PropTypes.arrayOf(PropTypes.object),
        fetchData: PropTypes.func
    };

    constructor(props) {
        super(props);
        this.cheackOff = this.cheackOff.bind(this);
    }

    render() {
        return <button
            onClick={this.cheackOff}
            style={{float: 'right', marginTop: '-2px'}}>Check
        </button>
    }

    cheackOff() {
        this.props.fetchData(this.props.pageDescription);
    }
}

const mapStateToProps = state => ({
    checkResult: state.checkedUrl && state.checkedUrl.data,
    searchResults: state.wikiSearch && state.wikiSearch.data
});

const mapDispatchToProps = dispatch => ({
    fetchData(data) {
        let items = data;
        if (this.searchResults) {
            items = [].concat(this.searchResults, data);
        }
        dispatch(receiveWikiSearch({data: items}));
        if (this.checkResult) {
            items = this.checkResult;
            items.splice(items.indexOf(data), 1);
            dispatch(checkUrl({data: items}));
        }
    }
});

export const CheckoffComponent = connect(mapStateToProps, mapDispatchToProps)(CheckoffClass);