import { combineReducers } from 'redux';
import feed from '../src/components/Jobseek/reducer';

const reducers = {
  feed,
};

export default history => combineReducers({
  ...reducers,
});
