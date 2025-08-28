import React from "react"
import projectItemStyles from "./project-item.module.css"
import { Link } from "gatsby"

export default function ProjectItem(props) {
  const formatAuthors = (authors) => {
    return authors.split(', ').map((author, index) => {
      if (author.trim() === "Vasudev Vikram" || author.trim() === "Vasudev Vikram*") {
        return <strong key={index}>{author}</strong>;
      }
      return author;
    }).reduce((prev, curr) => [prev, ', ', curr]);
  };

  var titleElem;
  if (props.titlenolink !== undefined) {
    titleElem = <p className="titlenolink-text"> {props.titlenolink} </p>;
  } else {
    titleElem = <Link to={props.link}> {props.title} </Link>;
  }

  return (
    <li className={projectItemStyles.projectitem}>
      <img className="project" src={props.img} alt={props.alt}/>
      <div className="project-item-text">
        {titleElem}
        <p className="authors-text">{formatAuthors(props.authors)}</p>
        <p className="event-text">{props.event}</p>
        {props.children}
      </div>
    </li>
  );
}
