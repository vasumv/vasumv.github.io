import React from "react"
import workItemStyles from "./work-item.module.css"

export default function WorkItem(props) {
  return (
    <li className={workItemStyles.workitem}>
        <img className="work" src={props.img} alt={props.alt}/>
        <div className="work-item-text">
            <h4>{props.company}</h4>
            <p className="text-position">{props.position}</p>
            <p className="work-time">{props.time}</p>
            <div className="work-description">
                {props.children}
            </div>
        </div>
    </li>
  )
}
