import React from "react"
import Layout from "../components/layout"
import Container from "../components/container"
import headshot from "../../images/me.png"
import { Link } from "gatsby"
import "./index.css"

const ListLink = props => (
  <li style={{ fontSize: `x-large`, display: `inline-block`, marginRight: `2rem` }}>
    <a href={props.to}>{props.children}</a>
  </li>
)

export default function Index() {
  return (
    <Layout>
        <h1> Vasu Vikram </h1>
        <Container>
            <div id="about-img" width="300px">
                <img src={headshot} alt="Vasu Vikram picture"/>
            </div>
            <div id="about-text">
                <p>
                  Hi! I'm Vasu, a full time employee working at Cruise Automation on the Vision team. I recently
                  finished my undergraduate degree in Electrical Engineering and Computer Science
                  from U.C. Berkeley.
                </p>
                <br/>
                <p>
                  I've spent summers interning at <Link to="https://www.getcruise.com/">Cruise</Link>, where I have worked on projects improving emergency vehicles
                  traffic light detection.
                </p>
                <br/>
                <p>
                  My research interests include automatic test generation,
                  fuzz-testing, and program analysis. I have worked with <Link to="https://rohan.padhye.org">
                  Prof. Rohan Padhye</Link> and <Link to="https://people.eecs.berkeley.edu/~ksen/">Prof. Koushik
                  Sen</Link>.
                </p>
            </div>
        </Container>
        <hr/>
        <Container>
          <ul style={{ listStyle: `none`, float: `center` }}>
            <ListLink to="https://github.com/vasumv">Github</ListLink>
            <ListLink to="mailto:vasumvikram@gmail.com">Email</ListLink>
            <ListLink to="/pdfs/cv.pdf">CV</ListLink>
          </ul>
        </Container>
    </Layout>
  )
}

