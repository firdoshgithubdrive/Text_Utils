// import React from "react";

function About(props) {
  let styles = {
    backgroundColor: props.theme === "dark" ? "#2c2b2b" : "#eeeeee",
    color: props.theme === "dark" ? "white" : "black",
  };

  return (

    <div className="container mt-lg-5" style={styles}>
      <div className="accordion mt-lg-5 pb-4" id="accordionExample">
        <h2 style={{ padding: "20px" }}>Frequently Asked Questions</h2>
        <div className="accordion-item" style={styles}>
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={styles}
            >
              Who we are ?
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>Hello, This is Firdosh Alam</strong> .The
              developer of this page I developed this page to perform some text
              related modifications which we can get in instance while making
              them in accordance will be very time consuming.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={styles}>
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={styles}
            >
              What is this app?
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>This is the text-utils app.</strong>With TextUtils app you
              can perform many operations on text like converting to uppercase
              ,lowercase,synthsizing voice over text etc... Features:-
              1)conversion to uppercase   2)conversion to lowercase   3)conversion to
              alternativeCase   4)Reverse text   5)Flip text   6)Copy text   7)Speach Synthesis
              8)Dark/Light Mode
            </div>
          </div>
        </div>
        <div className="accordion-item" style={styles}>
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={styles}
            >
              What are the Tech Stacks Used ?
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>Techs used are:- React , Bootstrap</strong> 
              . As it is my first react app so i made it simple and featuristic
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default About;
