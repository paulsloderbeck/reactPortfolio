import React from "react";
import Card from "../Card/Card";
import coTracker from "../../images/coTracker.png";

import "../styles/About.css";
const projects = [
  {
    name: "coTracker",
    deployLink: "https://paulsloderbeck.github.io/coTracker/",
    githubLink: "https://github.com/paulsloderbeck/coTracker",
    image: coTracker
  }
];

function Portfolio() {
  return (
    <div className="container">
      <div className="row">
        <div className="col"></div>
        <div className="col-8">
          <div className="container-lg">
            <div className="row">
              <h1>Portfolio</h1>
            </div>
            <div className="row">
              <div className="col">
                <Card
                  name={projects[0].name}
                  deployLink={projects[0].deployLink}
                  githubLink={projects[0].githubLink}
                  image={projects[0].image}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col"></div>
      </div>
    </div>
  );
}

export default Portfolio;
