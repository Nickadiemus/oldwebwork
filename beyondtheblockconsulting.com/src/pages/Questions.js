/** main import(s)                                                      */
import React from 'react';

/** helper import(s)                                                    */
import data from '../_data/questions';
/** component import(s)                                                 */
import QuestionBlock from '../components/QuestionBlock/QuestionBlock';
/** style import(s)                                                     */
import './Question.scss';



const Questions = () => {
  const QuestionList = data.questions.map(questions => {
      return <QuestionBlock question = {questions.question} answer = {questions.answer} />
  });

  return (
    <div>
      <div className = "customContainer">
        <div className = "bar"></div>
        <h1 className = "name-block-h1 question">FAQ</h1>
        {QuestionList}
      </div>
    </div>
  )
}

export default Questions;
