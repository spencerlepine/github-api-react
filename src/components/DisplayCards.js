import React, { Component } from "react"
import RepoCard from "./RepoCard"

class DisplayCards extends Component {
    render() {   
        // Fix: this will re-render when props changes, should it be only state instead?
        let cardList = <p>No repositories found</p>
        if (this.props.cardData && this.props.cardData.length > 0) {
            cardList = this.props.cardData.map((item) => (<RepoCard key={item.id} repoInfo={item} />))
        }

        return (
            <div className="cardList">
                 {cardList}
            </div>
        )
    }
}

export default DisplayCards