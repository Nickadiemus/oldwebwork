//main import(s)
import { combineReducers} from 'redux';

//secondary imports
import auth from './reducers/auth';
import flashMessages from './reducers/flashMessages';

export default combineReducers({
  flashMessages,
  auth
})
