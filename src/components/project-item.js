import React from "react"
import projectItemStyles from "./project-item.module.css"
import { Link } from "gatsby"

export default function ProjectItem(props) {
  var titleElem;
  if (props.titlenolink !== undefined) {
    titleElem = <p className="titlenolink-text"> {props.titlenolink}> </p>
  } else {
    titleElem = <Link to={props.link}> {props.title} </Link>
  }
  return (
    <li className={projectItemStyles.projectitem}>
        <img className="project" src={props.img} alt={props.alt}/>
        <div className="project-item-text">
            {titleElem}
            <p className="authors-text">{props.authors}</p>
            <p className="event-text">{props.event}</p>
            {props.children}
        </div>
    </li>
  )
}
