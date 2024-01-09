import { Component } from "react";
import './Quizpage.css'
export default class quizpage extends Component{
    render(){
        return(
            <div id="question">

                <h1>
                    QUESTION
                </h1>

                <h2 id="quiz-num">
                    1 of 15
                </h2>

                <h3 id="question1">
                    Which is the only mammal that can jump
                </h3>

                <div id="options">
                    <button id="one1st ans">DOG</button>
                    <button id="two2nd ans">ELEPHANT</button>
                    <button id="three3rd ans">GOAT</button>
                    <button id="four4th ans">LION</button>
                </div>

                <div id="extraoptions">
                    <button id="con previous">PREVIOUS</button>
                    <button id="con next">NEXT</button>
                    <button id="con quit">QUIT</button>
                </div>
                
            </div>
        )
    }
}