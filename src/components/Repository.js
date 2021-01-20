import React, { useState, useEffect } from "react";
import axios from "axios";

const Repository = ({ color, repository }) => {
  const [commits, setCommits] = useState([]);

  const getCommits = async () => {
    const baseURL = `https://api.github.com/repos/gerrgg/floodlight-design-react/commits`;

    const response = await axios.get(baseURL);

    if (response.data) {
      setCommits(response.data);
    }
  };

  console.log(commits);

  useEffect(() => {
    getCommits();
  }, []);

  return (
    <div className="repository">
      <header>
        <h5>
          <b>API:</b>

          <a
            href="https://api.github.com/repos/gerrgg/floodlight-design-react"
            style={{ color: color, borderColor: color }}
          >
            https://api.github.com/repos/gerrgg/floodlight-design-react
          </a>
        </h5>
      </header>
      <div class="inner">
        {repository ? (
          <RepositoryHeader
            repository={repository}
            color={color}
            commitCount={commits.length}
          />
        ) : (
          "Loading"
        )}
      </div>
      <Commits commits={commits} />
    </div>
  );
};

const Commits = ({ commits }) => {
  return (
    <ul className="commits">
      <h2 className="header">Commits</h2>
      {commits.map((commit) => (
        <li>
          <div>
            <a href={commit.html_url} className="message">
              {commit.commit.message}
            </a>
            <a href={commit.author.html_url} className="author">
              <img
                src={commit.author.avatar_url}
                alt="commit author avatar"
                style={{ height: 32, width: 32 }}
              />
              <b>{commit.commit.author.name}</b>
              <time>
                {timeDifference(
                  Date.now(),
                  new Date(commit.commit.author.date).getTime()
                )}
              </time>
            </a>
          </div>
          <div>
            <a href={commit.html_url} className="button">
              {commit.commit.tree.sha.substring(0, 7)}
            </a>
          </div>
        </li>
      ))}
    </ul>
  );
};

const RepositoryHeader = ({ repository, color, commitCount }) => {
  const createdAt = new Date(repository.created_at);
  const updatedAt = new Date(repository.updated_at);
  return (
    <div className="details">
      <p>
        <label>Project: </label>
        {repository.full_name}
      </p>
      <p>
        <label>Created</label> {createdAt.toDateString()}
      </p>
      <p>
        <label>Last Push:</label>{" "}
        {timeDifference(Date.now(), updatedAt.getTime())}
      </p>
      <p>
        <label>Commits:</label>{" "}
        <a href="https://github.com/gerrgg/floodlight-design-react/commits/main">
          {commitCount}
        </a>
      </p>
      <p style={{ flexDirection: "row-reverse", marginTop: "2rem" }}>
        <a class="source" href={repository.html_url} style={{ color }}>
          Source Code
        </a>
      </p>
    </div>
  );
};

//https://stackoverflow.com/a/6109105/3247137
function timeDifference(current, previous) {
  var msPerMinute = 60 * 1000;
  var msPerHour = msPerMinute * 60;
  var msPerDay = msPerHour * 24;
  var msPerMonth = msPerDay * 30;
  var msPerYear = msPerDay * 365;

  var elapsed = current - previous;

  if (elapsed < msPerMinute) {
    return Math.round(elapsed / 1000) + " seconds ago";
  } else if (elapsed < msPerHour) {
    return Math.round(elapsed / msPerMinute) + " minutes ago";
  } else if (elapsed < msPerDay) {
    return Math.round(elapsed / msPerHour) + " hours ago";
  } else if (elapsed < msPerMonth) {
    return "like " + Math.round(elapsed / msPerDay) + " days ago";
  } else if (elapsed < msPerYear) {
    return "like " + Math.round(elapsed / msPerMonth) + " months ago";
  } else {
    return "like " + Math.round(elapsed / msPerYear) + " years ago";
  }
}

export default Repository;
