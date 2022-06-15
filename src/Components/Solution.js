import React, { Component } from 'react'
import './Solution.css';

export class Solution extends Component {
    
    render() {
        return (
            <div className="Solution">            
                <p className="Solution_Content">{this.props.num1}</p>
                <p className="Solution_Content">{this.props.opr}</p>
                <p className="Solution_Content">{this.props.num2}</p>
                <p className="Solution_Content">=</p>
                <p className="Solution_Content" style={{backgroundColor:(this.props.corr==true?"Green":"Red")}}>{this.props.ans}</p>
                <p className="Solution_Content">A= </p>
                <p className="Solution_Content" style={{backgroundColor:"Green"}}>{this.props.res}</p>
                <p className="Solution_Content">{this.props.corr?"true":"false"}</p>
            </div>
        )
    }
}

export default Solution
