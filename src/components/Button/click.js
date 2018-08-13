import * as React from 'react';
import {checkUrl, receiveWikiSearch} from '../../actions/wikiSearch';
import {connect} from "react-redux";
import * as PropTypes from "react/lib/ReactPropTypes";

export class ButtonClass extends React.Component {

    static propTypes = {
        fetchData: PropTypes.func
    };

    constructor(props) {
        super(props);
        this.addDataResult = this.addDataResult.bind(this);
    }

    render() {
        return <button
                    onClick={this.addDataResult}
                    style={{float: 'right', marginTop: '-2px'}}>Check
                </button>
    }

    addDataResult() {
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
        if (this.checkResult) {
            items = [].concat(this.checkResult, data);
        }
        dispatch(checkUrl({data: items}));
        if (this.searchResults) {
            items = this.searchResults;
            items.splice(items.indexOf(data), 1);
            dispatch(receiveWikiSearch({data: items}));
        }
    }
});

export const ButtonComponent = connect(mapStateToProps, mapDispatchToProps)(ButtonClass);