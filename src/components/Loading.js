import React, { Component } from "react"

class Loading extends Component {
    render() {
        let styles = {
            display: this.props.loadingState ? "block" : "none",
            width: "5vw",
            height: "5vw",
            borderRadius: "50%",
            borderBottom: "5px solid #97c4fe",
            borderLeft: "3px solid #fff0",
            borderTop: "5px solid #97c4fe",
            borderRight: "4px solid #97c4fe",
            animationName: "spin",
            animationDuration: "2s",
            animationIterationCount: "infinite",
            animationTimingFunction: "linear",
            margin: "auto",
            marginTop: "10%"
        }

        return (
            <div className="spinner" style={styles}></div>
        )
    }
}

export default Loading