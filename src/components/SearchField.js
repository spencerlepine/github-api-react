import React, { Component } from "react"

class SearchField extends Component { 
    render() { 
        return (
            <div style={{height: 'min-content', margin: 'auto'}}>
                {/* Github username may only contain alphanumeric characters or hyphens.
                Github username cannot have multiple consecutive hyphens.
                Github username cannot begin or end with a hyphen.
                Maximum is 39 characters. */}
                <input type="text" name="user" required minLength="1" 
                    maxLength="39" size="14" placeholder={'exampleuser321'} value={this.props.value} 
                    onChange={this.props.handleChange} style={{fontSize: "1.1em"}}>
                </input>
            </div>
        )
    }
}

export default SearchField