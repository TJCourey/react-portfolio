import React from "react";
import profilePhoto from "../../images/profile.jpg";
import "./bio.module.css";
import Media from "react-bootstrap/Media";

function Bio() {
  return (
    <Media>
      <img
        width="250rem"
        className="align-self-start mr-3"
        src={profilePhoto}
        alt="TJ Courey"
      />
      <Media.Body>
        <h4 style={{ textAlign: "end", paddingRight: "3rem" }}>My Story</h4>
        <p
          style={{
            textAlign: "end",
            paddingRight: "1rem",
            paddingBottom: "3rem",
          }}
        >
          Full-Stack Software Engineer using a background in teaching and
          construction to build intuitive apps and break down complex problems
          into manageable tasks utilizing iterative development methodology.
          <br></br>
          <br></br>
          Recently, I earned a certificate in Full-Stack Web Development from
          the University of Denver, gaining skills in JavaScript,
          object-oriented programming, MySQL, NodeJS, and Bootstrap. I was able
          to excel in the fast paced environment due to my prior work
          experience, collaborating with dynamic teams and helping motivate and
          support my classmates.
          <br></br>
          <br></br>
          During my first month in the program, working as part of a team, I
          created, developed, and deployed an app called BeerMe. It received
          positive feedback both from peers and instructors, both for the
          usefulness of the concept as well as for functionality. During the
          project, I incorporated a language translator API and debugged other
          problematic external API calls. In my second month, I was responsible
          for creating the Handlebars Layout for another project as well as
          debugging and acting as the team’s Scrum-Master.
          <br></br>
          <br></br>
          Using what I already know about creative problem solving, forward
          thinking, and cross-functional collaboration will allow me to develop
          applications that fulfill client needs. I am excited to use my newly
          gained and existing skills as a Software Engineer!
        </p>
      </Media.Body>
    </Media>
  );
}

export default Bio;
