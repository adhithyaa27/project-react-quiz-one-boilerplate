import { Component } from 'react'
import './Resultpage.css'
export default class Result extends Component {
  render() {
    return (
    <>
      <h1 id='Results'>Results</h1>

      <div id='Resultblock'>
        <h3 id='feedback'>You need more practice!</h3>
        <h1 id='score'>Your score is 20%</h1>

        <div id='results'>

            <div id='resultblock'>

                <p id='result no-question'>
                    Total number of questions
                </p>

                <p id='count'>
                    15
                </p>

            </div>

            <div id='resultblock'>

                <p id='result no-question'>
                    Number of attempted questions
                </p>

                <p id='count'>
                    9
                </p>

            </div>

            <div id='resultblock'>

                <p id='result no-question'>
                    Number of correct answers
                </p>

                <p id='count'>
                    3
                </p>

            </div>
            <div id='resultblock'>

                <p id='result no-question'>
                    Number of wrong answers
                </p>

                <p id='count'>
                    6
                </p>

            </div>

        </div>
      </div>
      <div id='controls-back-play'>

        <button id='playagain'>
            PLAY AGAIN
        </button>

        <button id='backtohome'>
            BACK TO HOME
        </button>
        
      </div>
    </>
    )
  }
}