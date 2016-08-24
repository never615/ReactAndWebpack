/**
 * Created by never615 on 8/24/16.
 */
import React from 'react';
import $ from 'jquery';

export default class Demo3 extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            loading: true,
            error: null,
            data: null
        }
    }

    componentDidMount() {
        this.props.promise.then(
            value=>this.setState({loading: false, data: value}),
            error=>this.setState({loading: false, error: error})
        );
    }


    render() {

        if (this.state.loading) {
            return <span>Loading...</span>
        } else if (this.state.error !== null) {
            return <span>Error:{this.state.error.message}</span>
        } else {
            var repos = this.state.data.items;
            var repoList = repos.map(function (repo,index) {
                return (
                    <li  key={'item'+index}>
                        <a href={repo.html_url}>{repo.name}</a> ({repo.stargazers_count} stars) <br/> {repo.description}
                    </li>
                );
            });
        }
        return (
            <main>
                <h1>Most Popular JavaScript Projects in Github</h1>
                <ol>{repoList}</ol>
            </main>
        );
    }
}
