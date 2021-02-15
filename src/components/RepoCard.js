import React, { useState } from "react"

function RepoCard(props) {
    const [repoObj] = useState(props.repoInfo)
    
    return (
        <div className="repoCard">
                <p>
                    {repoObj.full_name} - 
                    <a href={`https://github.com/${repoObj.owner.login}/${repoObj.name}`} target="_blank">
                        Source
                    </a>
                </p>

                <hr/>
                <p><b>Description: </b> {repoObj.description}</p>
               
                <p><b>Created: </b> {repoObj.created_at}</p>   

                <div className="stats">
                    <p>Forks: {repoObj.forks}</p>
                    <p>Updated at: {repoObj.updated_at}</p>
                    <p>Open issues count: {repoObj.open_issues_count}</p>
                    <p>Watchers count: {repoObj.watchers_count}</p>
                    <p>Size: {repoObj.size}</p>
                    <p>Stargazers: {repoObj.stargazers_count}</p>
                </div>
        </div>
    )
}

export default RepoCard