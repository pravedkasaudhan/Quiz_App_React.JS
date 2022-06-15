import React, { Component } from 'react';
import './Score.css';
import { Link } from 'react-router-dom';

export class Score extends Component {
    render() {
        return (
            <div className="Score">
                <h3 className="ScoreCount">
                    SCORE :- {this.props.score}
                </h3>
                <Link to="/">
                <button className="ResetBtn">RESTART</button>
                </Link>
            </div>
        )
    }
}

export default Score
