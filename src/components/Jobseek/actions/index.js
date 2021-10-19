import {
    FETCH_JOB_FEEDS,
    FETCH_JOB_FEEDS_SUCCESS,
  } from './action-types';
  
  
  export const fetchJobFeeds = (pageNo) => ({
    type: FETCH_JOB_FEEDS,
    payload: {
      pageNo,
    }
  });
  
  export const fetchJobFeedsSuccess = (jobFeed, hasMore, pageNo, tagId, catId) => ({
    type: FETCH_JOB_FEEDS_SUCCESS,
    payload: {
      jobFeed,
      hasMore,
      pageNo,
      tagId,
      catId,
    },
  });

  