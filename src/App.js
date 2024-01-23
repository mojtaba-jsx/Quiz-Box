import React, { Component } from "react";
import "./App.css";
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      questions: [
        {
          questionText: "What is the capital of France?",
          answerOptions: [
            {
              answerText: "New York",
              image: "./images/NewYork.jpg",
              isCorrect: false,
            },
            {
              answerText: "London",
              image: "./images/London.jpg",
              isCorrect: false,
            },
            {
              answerText: "Paris",
              image: "./images/paris.jpg",
              isCorrect: true,
            },
            {
              answerText: "Dubai",
              image: "./images/dubai.jpg",
              isCorrect: false,
            },
          ],
        },
        {
          questionText: "Who is CEO of Tesla?",
          answerOptions: [
            {
              answerText: "Jeff Bezos",
              image: "./images/jeffBezos.jpg",
              isCorrect: false,
            },
            {
              answerText: "Elon Musk",
              image: "./images/elon-musk.jpg",
              isCorrect: true,
            },
            {
              answerText: "Mark Zuckerberg",
              image: "./images/mark zackerberg.jpg",
              isCorrect: false,
            },
            {
              answerText: "Tony Stark",
              image: "./images/tony stark.jpg",
              isCorrect: false,
            },
          ],
        },
        {
          questionText: "The iPhone was created by which company?",
          answerOptions: [
            {
              answerText: "Apple",
              image: "./images/apple.jpg",
              isCorrect: true,
            },
            {
              answerText: "Intel",
              image: "./images/intel.jpg",
              isCorrect: false,
            },
            {
              answerText: "Amazon",
              image: "./images/amazon.jpg",
              isCorrect: false,
            },
            {
              answerText: "Microsoft",
              image: "./images/microsoft.jpg",
              isCorrect: false,
            },
          ],
        },
        {
          questionText: "How many Harry Potter books are there?",
          answerOptions: [
            {
              answerText: "1",
              image: "./images/harry-potter-1.jpg",
              isCorrect: false,
            },
            {
              answerText: "4",
              image: "./images/harry-potter-2.jpg",
              isCorrect: false,
            },
            {
              answerText: "6",
              image: "./images/harry-potter-3.jpg",
              isCorrect: false,
            },
            {
              answerText: "7",
              image: "./images/harry-potter-4.jpg",
              isCorrect: true,
            },
          ],
        },
      ],
      currentQuestion: 0,
      showScore: false,
      score: 0,
    };
  }

  render() {
    return (
      <div className="app">
        <div className="quiz-box">
          <div className="quiz-box__top">
            <div className="quiz-box__top-logo">
              <span className="quiz-box__top-logo-text">Quiz Box</span>
              <span className="quiz-box__top-logo-icon">
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
                    d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
                  />
                </svg>
              </span>
            </div>

            <div className="quiz-box__top-values">
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

              <div className="quiz-box__top-false-value">
                <span className="quiz-box__top-false-value-icon">
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
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>
                </span>
                <span className="quiz-box__top-false-value-text">2</span>
              </div>
            </div>
          </div>

          <div className="quiz-box-question">
            <p className="quiz-box-question-text">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta,
              hic.
            </p>
          </div>

          <div className="quiz-box-answers">
            <div className="quiz-box-answer">
              <img
                src="./images/elon-musk-4k-rq-1920x1080.jpg"
                alt=""
                className="quiz-box-answer-image"
              />
              <span className="quiz-box-answer-text">
                Lorem ipsum dolor sit amet.
              </span>
            </div>

            <div className="quiz-box-answer">
              <img
                src="./images/elon-musk-4k-rq-1920x1080.jpg"
                alt=""
                className="quiz-box-answer-image"
              />
              <span className="quiz-box-answer-text">
                Lorem ipsum dolor sit amet.
              </span>
            </div>

            <div className="quiz-box-answer">
              <img
                src="./images/elon-musk-4k-rq-1920x1080.jpg"
                alt=""
                className="quiz-box-answer-image"
              />
              <span className="quiz-box-answer-text">
                Lorem ipsum dolor sit amet.
              </span>
            </div>

            <div className="quiz-box-answer">
              <img
                src="./images/elon-musk-4k-rq-1920x1080.jpg"
                alt=""
                className="quiz-box-answer-image"
              />
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
