import React, { Component } from 'react';
import './Result.css';
import Solution from './Solution';

export class Result extends Component {
    quizData=this.props.quizData;
    render() {
        return (
            <div className="Result">
                <div className="report">
                    {this.quizData.length>0 && this.quizData.map((ele,index)=>{
                        return <Solution key={index} num1={ele.Number1} num2={ele.Number2} opr={ele.Operation} ans={ele.Answer} res={ele.Result} corr={ele.Correct}/>
                    })}
                       
                </div>
            </div>
        )
    }
}

export default Result
