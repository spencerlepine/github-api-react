import React, { Component } from "react"

class RepoCard extends Component {
    constructor() {
        super();
        this.state = {
            repoInfo: {},
            owner: null
        }
    }

    componentDidMount() {
        // After the component mounts, save the prop data
        this.setState({ repoInfo: this.props.repoInfo, owner: this.props.repoInfo.owner.login});
    }

    render() {
        let repoObj = this.state.repoInfo;
        return (
            // This component is never created until server data is found

            // Rank the repo. Give it a score based on forks, watchers, SIZE, stargazers, issues (overall activity)
            // Commits since creation?
            <div className="repoCard">
                <p>{repoObj.full_name} - <a href={`https://github.com/${this.state.owner}/${repoObj.name}`} target="_blank">Source</a></p>
                <hr/>
                <p><b>Description: </b> {repoObj.description}</p>
                <p><b>Created: </b> {repoObj.created_at}</p>    
                <div className="stats">
                    <p>Forks: {repoObj.forks}</p>
                    <p>Updated at: {repoObj.updated_at}</p>
                    <p>Open issues count: {repoObj.open_issues_count}</p>
                    <p>Watchers count: {repoObj.watchers_count}</p>
                    <p>Size: {repoObj.size}</p>{/* Expressed in kilobytes */}
                    <p>Stargazers: {repoObj.stargazers_count}</p>
                </div>
            </div>
        )
    }
}

export default RepoCard