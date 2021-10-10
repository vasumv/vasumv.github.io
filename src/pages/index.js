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
  return ( <Layout>
        <h1> Vasu Vikram </h1>
        <Container>
            <div id="about-img" width="300px">
                <img src={headshot} alt="Vasu Vikram picture"/>
            </div>
            <div id="about-text">
                <p>
                  Hi! I'm Vasu, a software engineering PhD student in the <Link to="https://www.isri.cmu.edu/"> Institute of Software Research </Link> at Carnegie Mellon University!
                  I finished my undergraduate degree in Electrical Engineering and Computer Science
                  from U.C. Berkeley.
                </p>
                <br/>
                <p>
                  My research interests include automatic test generation,
                  fuzz-testing, and program analysis. I have worked with <Link to="https://rohan.padhye.org">
                  Prof. Rohan Padhye</Link> and <Link to="https://people.eecs.berkeley.edu/~ksen/">Prof. Koushik
                  Sen</Link>, and am one of the contributors to <Link to="https://github.com/rohanpadhye/jqf">JQF</Link>,
                  a popular fuzz-testing platform. I am currently a part of the <Link to="https://cmu-pasta.github.io/"> PASTA Lab </Link>.
                </p>
                <br/>
                <p>
                  I've also spent time interning and working at <Link to="https://www.getcruise.com/">Cruise</Link>, where I have worked on projects improving emergency vehicle and
                  traffic light detection.
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

