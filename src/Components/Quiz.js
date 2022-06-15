import { Component } from "react";
import './Quiz.css';
import Home from "./Home";
import Alert from "./Alert";

class Quiz extends Component {
    constructor(props) {
        super(props);
        this.state = {
            alert: "Hello , Click the Start Button to Start the Quiz"
        }
    }
    updateAlert = (message) => {
        setTimeout(() => {
            this.setState({
                ...this.state,
                alert: message
            })
        }, 500);
        setTimeout(() => {
            this.setState({
                ...this.state,
                alert: ""
            })
        }, 3000);
    }
    updateQuizData = (data) => {

        if (data.Correct == true) {
            this.props.updateScore(this.props.score + 1);
        }
    }

    componentDidMount = () => {
        this.props.updateScore(0);
    }
    render() {

        return (
            <div className="Quiz">
                <Home updateQuizData={this.updateQuizData} updateAlert={this.updateAlert} />
                <Alert alert={this.state.alert} />
            </div>
        );
    }
}

export default Quiz;
