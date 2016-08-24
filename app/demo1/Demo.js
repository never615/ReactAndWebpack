/**
 * Created by never615 on 8/24/16.
 */
import React from 'react';

export default class Demo extends React.Component {


    constructor(props, context) {
        super(props, context);

        this.state={
            opacity: 1.0
        }
    }

    componentDidMount() {
        this.timer = setInterval(function () {
            var opacity=this.state.opacity;
            opacity-=.05;
            if(opacity<0.1){
                opacity=1.0;
            }
            this.setState({
               opacity:opacity
            });
        }.bind(this), 100);
    }


    render() {
        return (
            <div style={{opacity:this.state.opacity}}>
                Hello {this.props.name}
            </div>
        );
    }

}
