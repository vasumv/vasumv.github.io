import React from "react"
import Layout from "../components/layout"
import WorkItem from "../components/work-item"
import headshot from "../../images/me.png"
import cruiseLogo from "../../images/cruise.png"
import cubicLogo from "../../images/cubic.jpeg"
import "./work.css"

export default function Work() {
  return (
    <Layout>
      <h2>Work</h2>
      <div id="work-container">
        <ul style={{ listStyle: `none`, float: `left`, display: `block` }}>
          <WorkItem img={cruiseLogo}
                  alt="Cruise Logo" company="Cruise" position="Software Engineer"
                  time="August 2020 - September 2021 - San Francisco, CA">
                <p> - Worked on Understanding team to improve traffic lights and emergency vehicle detection
                </p>
          </WorkItem>
          <WorkItem img={cruiseLogo}
                  alt="Cruise Logo" company="Cruise (intern)" position="Computer Vision Software Engineering Intern"
                  time="Summer 2019 - San Francisco, CA">
                <p> - Implemented a system that detects whether objects are occluding traffic light bulb detections using
                    semantic segmentation, visual detections, and LIDAR camera projections as data sources, which was
                    pushed to production on the car.
                </p>
                <p>
                    - Designed and implemented an ML pipeline for flashing traffic light detection, including scripts for data
                    extraction, HTML / JS labeling and visualization tools, and experiments with various machine learning
                    methods (Bayesian modeling, HMM, RNN).
                </p>
          </WorkItem>
          <WorkItem img={cruiseLogo}
                  alt="Cruise Logo" company="Cruise (intern)" position="Computer Vision Software Engineering Intern"
                  time="Summer 2018 - San Francisco, CA">
                <p> - Architected and built a full ML pipeline for an RNN detector for flashing emergency vehicles, improving
over the original model in precision and recall. Utilized CNNs and LSTMs for the model.
                </p>
                <p> - Integrated the model into the Cruise emergency lights package using Tensorflow C++ API </p>
          </WorkItem>
          <WorkItem img={cubicLogo}
                  alt="Cubic Logo" company="Cubic (intern)" position="Software Engineering Intern"
                  time="Summer 2017 - San Diego, CA">
                  <p> - Implemented and deployed a Node JS/Express website that tracks soldier vests on Google Maps </p>
                  <p> - Added a Java API (using websockets) to integrate with the existing training app </p>
                  <p> - Presented to CEO and President of division </p>
          </WorkItem>
        </ul>
      </div>
    </Layout>
  )
}

