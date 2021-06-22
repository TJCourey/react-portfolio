import React from "react";
import profilePhoto from "../../images/profile.jpg";

function Bio() {
  return (
    <>
      <img src={profilePhoto} alt="TJ Courey" />
      <p>
        Full-Stack Software Engineer using a background in teaching and
        construction to build intuitive apps and break down complex problems
        into manageable tasks utilizing iterative development methodology.
        Recently, I earned a certificate in Full-Stack Web Development from the
        University of Denver, gaining skills in JavaScript, object-oriented
        programming, MySQL, NodeJS, and Bootstrap. I was able to excel in the
        fast paced environment due to my prior work experience, collaborating
        with dynamic teams and helping motivate and support my classmates.
        During my first month in the program, working as part of a team, I
        created, developed, and deployed an app called BeerMe. It received
        positive feedback both from peers and instructors, both for the
        usefulness of the concept as well as for functionality. During the
        project, I incorporated a language translator API and debugged other
        problematic external API calls. In my second month, I was responsible
        for creating the Handlebars Layout for another project as well as
        debugging and acting as the team’s Scrum-Master. Using what I already
        know about creative problem solving, forward thinking, and
        cross-functional collaboration will allow me to develop applications
        that fulfill client needs. I am excited to use my newly gained and
        existing skills as a Software Engineer!
      </p>
    </>
  );
}

export default Bio;
