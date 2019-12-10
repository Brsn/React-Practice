import React from 'react';


export class Home extends React.Component {
    render() {
        var text = "blah";
        console.log(this.props);
        return (
            <div>
                <p>In a new Component!</p>
                <p>{text}</p>
                <p>Your name is {this.props.name}</p>
            </div>
        );
    }
}