import * as React from 'react';

export class UrlComponent extends React.Component {
    render() {
        return <div>
                    <a style={{textAlign: 'left'}}
                       href={this.props.pageDescription.fullurl}>{this.props.pageDescription.title}
                    </a>
                </div>
    }
}