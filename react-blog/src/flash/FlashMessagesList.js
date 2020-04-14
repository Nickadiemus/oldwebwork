import React,{ Component} from 'react';
import { connect } from 'react-redux';
import FlashMessage from './FlashMessage';
import { deleteFlashMessage } from '../actions/addFlashMessages';



class FlashMessagesList extends Component {
    render(){
      const messages = this.props.messages.map(message =>
        <FlashMessage key = {message.id} message = {message} deleteFlashMessage = {this.props.deleteFlashMessage} />
      );
      return(
        <div>{messages}</div>
      );
    }
}

FlashMessagesList.propTypes = {
  messages: React.PropTypes.array.isRequired,
  deleteFlashMessage: React.PropTypes.func.isRequired
}

function mapStateToProp(state){
  return{
    messages: state.flashMessages
  }
}

export default connect(mapStateToProp, { deleteFlashMessage })(FlashMessagesList)
