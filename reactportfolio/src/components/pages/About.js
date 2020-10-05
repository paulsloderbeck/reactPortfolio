import React from "react";
import profile from "../../images/profileFull.JPG";
import "../styles/About.css";

const styles = {
  image: {
    width: "300px",
    height: "300px"
  }
};

function About() {
  return (
    <div className="container">
      <div className="row">
        <div className="col"></div>
        <div className="col-8">
          <div className="container-lg">
            <div className="row">
              <div className="col-lg-6">
                <img
                  className="mr-2"
                  src={profile}
                  alt="PaulSloderbeckimage"
                  style={styles.image}
                />
              </div>
              <div className="col-lg-6 text-white">
                <h3>About Me</h3>
                <p>
                  My name is Paul Sloderbeck. I'm from Tallahasee, FL, and live
                  in Raleigh, NC. I met my wife Sarah in Birmingham, AL. We were
                  married on August 30, 2014. We moved to Napa, CA in 2016. Our
                  son Michael Amos was born on October 18, 2017. We felt the
                  pull back East and moved to Raleigh, NC in 2018. Our daughter
                  Birdie Louise was born on April 23, 2019. I'm an Immigration
                  Attorney who is learning to code.{" "}
                </p>
                <br />
                <p>
                  After six years as a practicing Immigration Attorney, I've
                  decided to fulfill a life-long desire and learn to code. I
                  believe that my technical experience as an attorney will lend
                  itself to success as a web developer. I'm currently
                  experienced in HTML, CSS, JavaScript, jQuery, Node, Express,
                  MySQL, and MongoDB.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col"></div>
      </div>
    </div>
  );
}

export default About;
