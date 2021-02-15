import React, { Component } from "react"

import SearchField from "./SearchField"

class SelectUser extends Component {
    constructor(props) {
        super();
        this.state = {
            user: '',
            showMe: true
        }
    }

    handleChange = ({ target }) => {
        this.setState({ user: target.value});
    }
    
    openSearch = () => {
        this.setState({
            user: '',
            showMe: true
        });

        this.props.resetResult()
    }
    
    render() {
        return (
            <div>
                <div className="searchIcon" style={{display: this.state.showMe ? "none" : "block"}}>
                    <button onClick={this.openSearch}>🔎</button>
                </div>
                <div className="inputForm"
                    style={{display: this.state.showMe ? "flex" : "none"}}
                    onKeyDown={(e) => { 
                        if (e.key === 'Enter') { 
                            this.props.githubCall(this.state.user);
                            this.setState({showMe: false})
                    }}}
                >

                    <SearchField handleChange={ this.handleChange } value={this.state.user} />
                
                    <button onClick={() => {
                        this.props.githubCall(this.state.user)
                        this.setState({showMe: false})
                    }}>
                        Go
                    </button>
                </div>
            </div>
        )
    }
}

export default SelectUser