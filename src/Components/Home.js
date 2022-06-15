import React, { Component, createRef } from 'react';
import './Home.css';
import Result from "./Result";

class Home extends Component {

    operation = ["+", "-", "*","/"];
    data = [];
    timerReset
    constructor(props) {
        super(props);
        this.state = {
            number1: 0,
            number2: 0,
            operation: this.operation[0],
            answer: 0,
            counter: 1,
            quizdata: this.data
        };
        this.resultRef = createRef();
        this.nextBtnRef = createRef();
        this.timer = createRef();
        this.startBtn = createRef();
        this.ansInputRef = createRef();
    }

    //for placing the question randomly
    setQuestion() {
        this.setState({
            number1: 1 + Math.floor(Math.random() * 10),
            number2: 1 + Math.floor(Math.random() * 10),
            operation: this.operation[Math.floor(Math.random() * 4)]
        });
        this.countDown();

    }

    //to update the data as per the current question answer on click
    nextQuestion = () => {

        let ans = this.ansInputRef.current.value;
        const oper = this.state.operation;
        const num1 = this.state.number1;
        const num2 = this.state.number2;
        let correct;
        let result;
        if (oper === "+") {
            result = num1 + num2;
        }
        else if (oper === '-') {
            result = Math.abs(num1 - num2);
        }
        else if (oper === '*') {
            result = num1 * num2;
        }
        else {
            result = Math.round(num1/num2);
        }
        if(ans==""){
            correct=false;
        }
        else{
            correct=(Number(ans) === result)?true:false;
        }
        
        const currResponse = { "Number1": num1, "Number2": num2, "Operation": oper, "Answer": ans, "Result": result, "Correct": correct };
        this.data.push(currResponse);

        this.setState({
            ...this.state,
            quizdata: this.data
        })

        this.props.updateQuizData(currResponse);

        if (this.state.counter == 20) {
            this.nextBtnRef.current.disabled = true;
            this.resultRef.current.style.visibility = "visible";
            this.setState({
                ...this.state,
                counter: 0
            });
            this.timerReset && clearInterval(this.timerReset);
            this.timer.current.style.display = "none";

        }

        this.ansInputRef.current.value = "";

        if (this.state.counter <= 19) {
            this.props.updateAlert("Correct answer is " + result);
            this.updateQuestion();
        }

    }

    //update the question for next round
    updateQuestion = () => {
        this.setState({
            ...this.state,
            counter: this.state.counter + 1
        });
        this.countDown();
        this.setQuestion();
    }

    countDown = () => {
        this.timer.current.innerText = "20";
        this.timerReset && clearInterval(this.timerReset);
        this.timerReset = setInterval(() => {
            this.timer.current.innerText = (Number(this.timer.current.innerText) - 1).toString();
            if (this.timer.current.innerText == "0") {
                clearInterval(this.timerReset);
                this.nextQuestion();
            }
        }, 1000);
    }
    //set the question after component renders
    startQuiz = () => {
        this.setQuestion();
        this.countDown();
        this.startBtn.current.style.display = "None";
        this.nextBtnRef.current.disabled = false;
    }
    componentDidMount() {
        this.nextBtnRef.current.disabled = true;
    }
    render() {
        return (
            <div className="Home">
                <h2>MATHEMATICS</h2>
                <button ref={this.startBtn} className="startBtn" onClick={this.startQuiz}> CLICK TO START</button>
                <div ref={this.timer} id="Timer">20</div>
                <div className="QuizArea">

                    <div className="palletArea">
                        <div className="Question QuizContent">
                            <h2>Question {this.state.counter} :- </h2>
                            <div className="Numbers">

                                <div className="QuestionData">
                                    <p>NUMBER 1 :- </p>
                                    <p>{this.state.number1}</p>
                                </div>
                                <div className="QuestionData">
                                    <p>NUMBER 2 :-  </p>
                                    <p>{this.state.number2}</p>
                                </div>
                                <div className="QuestionData">
                                    <p> OPERATION :-  </p>
                                    <p>{this.state.operation}</p>
                                </div>
                            </div>
                        </div>
                        <div className="Answer QuizContent">
                            <h3>Answer</h3>
                            <input ref={this.ansInputRef} id="AnswerData" type="text" />
                        </div>
                    </div>

                    <button ref={this.nextBtnRef} className="NextBtn" className="NextBtn" onClick={this.nextQuestion}>NEXT</button>
                    <div ref={this.resultRef} className="result">
                        <Result quizData={this.state.quizdata} />
                    </div>

                </div>

            </div>
        )
    }
}

export default Home;
