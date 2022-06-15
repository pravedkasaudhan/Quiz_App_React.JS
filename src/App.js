import { Component } from "react";
import './App.css';
import Quiz from './Components/Quiz';
import Header from './Components/Header';
import Score from './Components/Score';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


class App extends Component {

  state = {
    score: 0
  }
  updateScore = (data) => {
    this.setState({
      ...this.state,
      score: data
    })
  }
 
  render() {
    return (
      <div className="App">

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Header/>}></Route>
            <Route path="/Quiz" element={
              <>
                <Score score={this.state.score} />
                <div className="QuizPanels">
                  <Quiz key="QUIZ1" className="Quiz" score={this.state.score} updateScore={this.updateScore} />
                  <Quiz key="QUIZ2" className="QUIZ" score={this.state.score} updateScore={this.updateScore} />
                </div>
              </>
            }></Route>
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
