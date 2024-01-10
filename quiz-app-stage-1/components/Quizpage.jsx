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
                    WHICH IS THE ONLY MAMMAL THAT CAN JUMP
                </h3>

                <div id="options">
                    <button id="one1st ans">DOG</button>
                    <button id="two2nd ans">ELEPHANT</button>
                    <button id="three3rd ans">GOAT</button>
                    <button id="four4th ans">LION</button>
                </div>

                <div className="extraoptions">
                    <button className="previous" id="con">PREVIOUS</button>
                    <button className="con next">NEXT</button>
                    <button className="con quit">QUIT</button>
                </div>
                
            </div>
        )
    }
}