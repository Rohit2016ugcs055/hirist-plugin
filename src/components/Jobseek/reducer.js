import filter from 'lodash/filter';
import {
  FETCH_JOB_FEEDS,
  FETCH_JOB_FEEDS_SUCCESS,
} from './actions/action-types';

const initialState = {
  jobFeed: [],
  isJobLoading: false,
  hasMore: true,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_JOB_FEEDS:
      return {
        ...state,
        jobFeed: action.payload.pageNo === 0
          ? []
          : [...state.jobFeed],
        isJobLoading: true,
      }

    case FETCH_JOB_FEEDS_SUCCESS:
      return {
        ...state,
        isJobLoading: false,
        jobFeed: action.payload.pageNo === 0
          ? action.payload.jobFeed
          : [ ...state.jobFeed, ...action.payload.jobFeed ],
        hasMore: action.payload.hasMore,
      }

    default:
      return state;
  }
}
