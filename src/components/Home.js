import React from 'react';
//class based componenet

class Home extends React.Component {
    constructor(props) {
        {/* This constructor defines props */ }
        super(props);
        {/* This will define a state */ }
        this.state = {
            jobTitle: 'React Developer'
        }
    }

    handleOnClickButton() {
        this.setState({ jobTitle: 'Code Monkey' });
    }

    render() {
        return (
            <div>
                This is Home {this.props.name}
                <br></br>
                <a href={this.props.mySite.url} >React</a>
                <p>My job title : {this.state.jobTitle} </p>
                <button onClick={this.handleOnClickButton.bind(this)}>Set job title</button>
            </div >
        )
    }
}

export default Home;