import React from 'react';
import { throwStatement } from '@babel/types';

class Home extends React.Component
{
    constructor(props) 
    {
        super(props);
        this.state = {
            jobTitle: ''
        }
    //if we don't bind this, it will reference the class
     this.handleOnClickButton = this.handleOnClickButton.bind(this);
    }
    //or use an arrow function that won't bind
    // handleOnClickButton () => {}
    handleOnClickButton() {
        this.setState({jobTitle: "Web Developer"});
    }
    render() {
        return (
        <div>
        This is Home {this.props.name}
        <a href={this.props.myData.url}>
        Go to Google</a>
        <p>My job title: {this.state.jobTitle}</p>
        <button onClick={this.handleOnClickButton}>Set Job Title</button>
        </div>
        );
    }
}

export default Home;