//main import(s)
import React,{Component} from 'react';

//secondary import(s)
import classnames from 'classnames';

class FlashMessage extends Component {
  constructor(props){
    super(props)
    this.onClick = this.onClick.bind(this);
  }

  onClick(){
    //deletes message by generated id
    this.props.deleteFlashMessage(this.props.message.id)
  }

  render(){
    //sets const for id, type of message, and its message
    const { id, type, text } = this.props.message;
    return(
      <div
        className = {classnames('alert', {
          'alert-success': type === 'success',
          'alert-danger': type === 'error'
        })}>
        <button onClick = {this.onClick()} className = "close"><span>&times;</span></button>
        {text}
      </div>
    )
  }
}

FlashMessage.propTypes = {
  message: React.PropTypes.object.isRequired,
  deleteFlashMessage: React.PropTypes.func.isRequired
}

export default FlashMessage;
