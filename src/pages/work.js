import React from "react"
import Layout from "../components/layout"
import WorkItem from "../components/work-item"
import headshot from "../../images/me.png"
import "./work.css"

export default function Work() {
  return (
    <Layout>
      <h2>Work</h2>
      <div id="work-container">
        <ul style={{ listStyle: `none`, float: `left`, display: `block` }}>
          <WorkItem img="https://www.getcruise.com/static/logo@2x-cb38bfef587df4a4221e6e31e8af4473.png"
                  alt="Cruise Logo" company="Cruise" position="Software Engineer"
                  time="present - San Francisco, CA">
                <p> - Currently working on evaluation framework tool for traffic lights detection
                </p>
          </WorkItem>
          <WorkItem img="https://www.getcruise.com/static/logo@2x-cb38bfef587df4a4221e6e31e8af4473.png"
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
          <WorkItem img="https://www.getcruise.com/static/logo@2x-cb38bfef587df4a4221e6e31e8af4473.png"
                  alt="Cruise Logo" company="Cruise (intern)" position="Computer Vision Software Engineering Intern"
                  time="Summer 2018 - San Francisco, CA">
                <p> - Architected and built a full ML pipeline for an RNN detector for flashing emergency vehicles, improving
over the original model in precision and recall. Utilized CNNs and LSTMs for the model.
                </p>
                <p> - Integrated the model into the Cruise emergency lights package using Tensorflow C++ API </p>
          </WorkItem>
          <WorkItem img="https://img.masstransitmag.com/files/base/cygnus/mass/image/2019/11/cubic_logo_navy.5dd6f3ad4c04b.png?auto=format&fit=max&w=1200"
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

