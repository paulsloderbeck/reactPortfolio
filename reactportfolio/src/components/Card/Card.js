import React from "react";
import "./CardStyle.css";

function Card(props) {
  return (
    <div className="card">
      <a href={props.deployLink} target="_blank">
        <img
          src={props.image}
          className="card-img-top"
          alt="placeholder-image"
        />
      </a>
      <div className="card-body">
        <a href={props.deployLink} target="_blank">
          {props.name}
        </a>
        <br />
        <a href={props.githubLink} class="card-text" target="_blank">
          Github Repo
        </a>
      </div>
    </div>
  );
}

export default Card;
