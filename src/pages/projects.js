import React from "react"
import Layout from "../components/layout"
import "./projects.css"

import ProjectItem from "../components/project-item"
import bonsaiImg from "../../images/bonsai_graph.png"
import mu2Img from "../../images/mu2.png"
import picassoImg from "../../images/picassoImg.png"

export default function Research() {
  return (
    <Layout>
      <h2>Projects</h2>
      <div id="project-container">
        <ul style={{ listStyle: `none`, float: `left`, display: `block` }}>
          <ProjectItem img={mu2Img}
                  alt="Mu2" title="Guiding Greybox Fuzzing with Mutation Testing"
                  link="/pdfs/mu2-issta23.pdf"
                  authors="Vasudev Vikram, Isabella Laybourn, Ao Li, Nicole Nair, Kelton OBrien, Rafaello Sanna, Rohan Padhye"
                  event="ISSTA 2023">
                <p className="project-summary">
                  In this paper, we develop and evaluate Mu2, a Java-based framework for incorporating mutation analysis in the greybox fuzzing loop, with the goal of producing a test-input corpus with a high mutation score.
                  Mu2 makes use of a differential oracle for identifying inputs that exercise interesting program behavior without causing crashes.
                  This paper describes several dynamic optimizations implemented in Mu2 to overcome the high cost of performing mutation analysis with every fuzzer-generated input.
                  These optimizations introduce trade-offs in fuzzing throughput and mutation killing ability, which we evaluate empirically on five real-world Java benchmarks.
                  Overall, variants of Mu2 are able to synthesize test-input corpora with a higher mutation score than state-of-the-art Java fuzzer Zest.
              </p>
          </ProjectItem>
          <ProjectItem img={bonsaiImg}
                  alt="Bonsai Graph" title="Growing a Test Corpus with Bonsai Fuzzing"
                  link="/pdfs/bonsai-icse21.pdf"
                  authors="Vasudev Vikram, Rohan Padhye, Koushik Sen"
                  event="ICSE 2021">
                <p className="project-summary">  This paper presents a coverage-guided grammar based fuzzing technique for automatically generating a corpus
                    of concise test inputs for programs such as compilers. We walk through a case study of a compiler designed for education and
                    the corresponding problem of generating meaningful test cases
                    to provide to students. Our key insight is that instead of
                    attempting to minimize convoluted fuzzer-generated test inputs,
                    we can instead grow concise test inputs by construction using
                    a form of iterative deepening. We call this approach bonsai
                    fuzzing.
              </p>
          </ProjectItem>
          <ProjectItem img={picassoImg}
                  alt="Take a Picasso Image" title="Take a Picasso"
                  link="https://devpost.com/software/take-a-picasso-6omuk1"
                  event="Cal Hacks 3.0">
                <p className="project-summary">
                    When the user enters the booth, all they have to say is “Take a Pic!” and our iOS app, using speech recognition,
                    is triggered and takes a picture. From there, we used OpenCV with Python for computer vision to blur the image,
                    find the edges of the photo, and extract the major features of the portrait to make the image look like a sketch.
                    The picture is then vectorized to be drawn into one continuous path of many small line segments.
                    These lines are then sent to the arduino behind the easel, which moves the motors accordingly to draw the picture!
                </p>
          </ProjectItem>
          <ProjectItem img="https://play.pokemonshowdown.com/favicon.ico"
                  alt="Pokemon Showdown Bot Image" title="Pokemon Showdown AI"
                  link="https://github.com/vasumv/pokemon_ai"
                  event="Greater San Diego Science and Engineering Fair (2015)">
                <p className="project-summary">
This project displayed an application of machine
learning to the minimax algorithm in the setting of an online Pokemon game, which has
hidden information. It focused on the problem of predicting the set of possible actions
an opponent might have. Relevant Pokemon game data was obtained and the minimax
algorithm was implemented to return the best action given a Pokemon game state.
    </p>
          </ProjectItem>
        </ul>
      </div>
    </Layout>
  )
}

