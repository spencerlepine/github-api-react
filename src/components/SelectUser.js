import React, { Component } from "react"

class SelectUser extends Component {
    constructor(props) {
        super();
        this.state = {
            user: undefined,
            showMe: true
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange({ target }) {
        // Update the state when the user types something
        this.setState({ user: target.value});
    }
    
    render() { 
        return (
            <div className="inputForm" style={{display: this.state.showMe ? "block" : "none"}}>
                <label htmlFor="user">Username:</label>
                {/* Github username may only contain alphanumeric characters or hyphens.
                Github username cannot have multiple consecutive hyphens.
                Github username cannot begin or end with a hyphen.
                Maximum is 39 characters. */}
                <input type="text" name="user" required minLength="1" 
                    maxLength="39" size="12" placeholder="username321" 
                    onChange={ this.handleChange }>
                </input>
            
                <button onClick={() => {
                    this.props.githubCall(this.state.user)
                    this.setState({showMe: false})
                }}>Go</button>
            </div>
        )
    }
}

export default SelectUser