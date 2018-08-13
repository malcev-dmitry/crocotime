import * as React from 'react';

export class CheckedUrl extends React.Component {
    render() {
        return <div key={this.props.pageDescription.fullurl}
                    id={this.props.pageDescription.fullurl}
                    style={{width: '50%', marginTop: '15px', border: '2px solid grey', padding: '5px'}}>
            <div>
                <a style={{textAlign: 'left'}}
                   href={this.props.pageDescription.fullurl}>{this.props.pageDescription.title}
                </a>
                <button style={{float: 'right', marginTop: '-2px'}}>Check
                </button>
            </div>
        </div>
    }
}