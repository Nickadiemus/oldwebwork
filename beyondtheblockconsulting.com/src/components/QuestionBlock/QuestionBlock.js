/** main import(s)                                                      */
import React, { Component } from 'react';

class QuestionBlock extends Component {
  render() {
    return (
        <div className = "question-block">
          <h3 className = "name-block-h3 question">{this.props.question}</h3>
          <p className = "name-block-p question">{this.props.answer}</p>
        </div>
    );
  }
}

export default QuestionBlock;
