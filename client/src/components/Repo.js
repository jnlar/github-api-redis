import React from 'react';

const Repo = ({ repoData }) => {
    return <div>
        <h2>{repoData.repoName}</h2>
        <p>{repoData.repoDesc !== 'null' ? repoData.repoDesc : "No description provided for this repo."}</p>
        <a href={repoData.repoURL}>View</a>
    </div>
}

export default Repo;