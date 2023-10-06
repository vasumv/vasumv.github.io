import React from "react"
import { Link } from "gatsby"
const ListLink = props => (
  <li style={{ fontSize: `xx-large`, display: `inline-block`, marginRight: `2rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)
export default function Layout({ children }) {
  return (
    <div style={{ margin: `3rem auto`, maxWidth: 1000, padding: `0 1rem` }}>
      <header style={{ marginBottom: `1.5rem`, paddingBottom: `2rem` }}>
        <ul style={{ listStyle: `none`, float: `right` }}>
          <ListLink to="/">Home</ListLink>
          <ListLink to="/work/">Work</ListLink>
          <ListLink to="/projects/">Projects</ListLink>
        </ul>
      </header>
      {children}
    </div>
  )
}
