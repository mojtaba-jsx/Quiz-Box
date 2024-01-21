import React, { Component } from "react";
import "./App.css";
class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="quiz-box">
          <div className="quiz-box__top">
            <div className="quiz-box__top-logo">Quiz Box</div>
            <div className="quiz-box__top-true-value">
              <span className="quiz-box__top-true-value-logo">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m4.5 12.75 6 6 9-13.5"
                  />
                </svg>
              </span>
              <span className="quiz-box__top-true-value-text">4</span>
            </div>
          </div>

          <div className="quiz-box-question">
            <p className="quiz-box-question-text">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta, hic.
            </p>
          </div>

          <div className="quiz-box-answers">
            <div className="quiz-box-answer">
              <img src="" alt="" className="quiz-box-answer-image"/>
              <span className="quiz-box-answer-text">
                Lorem ipsum dolor sit amet.
              </span>
            </div>

          </div>

          <div className="quiz-box__bottom">
            <span className="quiz-box__bottom-qustion-number">4/10</span>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
