import React, { Component } from "react"
import RepoCard from "./RepoCard"

class DisplayCards extends Component {
    render() {   
        let cardList = (this.props.cardData && this.props.cardData.length > 0)
            ? this.props.cardData.map((item) => (<RepoCard key={item.id} repoInfo={item} />))
            : <p>No repositories found</p>

        return (
            <div className="cardList">
                 {cardList}
            </div>
        )
    }
}

export default DisplayCards