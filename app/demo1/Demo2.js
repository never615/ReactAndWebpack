/**
 * Created by never615 on 8/24/16.
 */
import React from 'react';
import $ from 'jquery';

export default class Demo2 extends React.Component {



    constructor(props, context) {
        super(props, context);

        this.request;

        this.state = {
            username: '',
            lastGistUrl: ''
        }
    }

    componentDidMount() {
        this.request= $.get(this.props.source, function (result) {
            var lastGist = result[0];
                this.setState({
                    username: lastGist.owner.login,
                    lastGistUrl: lastGist.html_url
                });
        }.bind(this));
    }

    componentWillUnmount() {
        this.request.abort();
    }


    render() {
        return (
            <div>
                {this.state.username}'s last gist is <a href={this.state.lastGistUrl}>here</a>
            </div>
        );
    }

}
