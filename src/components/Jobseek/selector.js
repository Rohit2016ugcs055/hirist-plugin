import { createSelector } from 'reselect';

export const getFeed = state => state.feed;

export const getJobFeed = createSelector(
  getFeed,
  substate => substate.jobFeed,
);

export const getJobLoading = createSelector(
  getFeed,
  substate => substate.isJobLoading,
);

export const hasMoreFeeds = createSelector(
  getFeed,
  substate => substate.hasMore,
);
