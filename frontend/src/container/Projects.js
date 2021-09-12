import Amplify from "aws-amplify";
import awsconfig from "../aws-exports";
import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
import { API } from "aws-amplify";
import React, { useEffect, useState } from "react";
Amplify.configure(awsconfig);

function Projects() {
  const [projectName, setPetName] = useState("");
  const [projectContent, setPetContent] = useState("");
  const [projectRace, setPetRace] = useState("");
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    API.get("projectsapi", "/projects/name").then((projectRes) => {
      setProjects([...projects, ...projectRes]);
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    API.post("projectsapi", "/projects", {
      body: {
        name: projectName,
        content: projectContent,
        race: projectRace,
      },
    }).then(() => {
      setProjects([
        ...projects,
        { name: projectName, content: projectContent, race: projectRace },
      ]);
    });
  };
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href=" "
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <form onSubmit={handleSubmit}>
          <input
            value={projectName}
            placeholder="fiddo"
            onChange={(e) => setPetName(e.target.value)}
          />
          <input
            value={projectContent}
            placeholder="fiddoContent"
            onChange={(e) => setPetContent(e.target.value)}
          />
          <input
            value={projectRace}
            placeholder="fiddoRace"
            onChange={(e) => setPetRace(e.target.value)}
          />
          <button>Add Project</button>
        </form>
        <ul>
          {projects.map((project) => (
            <li>
              {project.name}
              {"  "}
              {project.content}
              {"  "}
              {project.race}
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default withAuthenticator(Projects);
