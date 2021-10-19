import axios from 'axios';
import Cookies from 'js-cookie';

import {
  fetchJobFeeds,
  fetchJobFeedsSuccess,
} from './actions';
const JOBSEEK_SERVICE_URL = "https://stagenodenew.hirist.com";

const token = '7b22656d61696c223a2272756368696b614069696d6a6f62732e636f6d222c226964223a22393838303930222c2274797065223a327d'

export function getJobFeeds(seekerId = 0, pageNo, sortBy = 'date', loc = '', minexp = 0, maxexp = 0, catId = '', tagId = '') {
  return (dispatch) => {
      dispatch(fetchJobFeeds(pageNo));
      axios.get(`${JOBSEEK_SERVICE_URL}/jobfeed/${seekerId == 0 ? -1 : seekerId}/jobs?pageNo=${pageNo}&sort=${sortBy}&loc=${loc}&minexp=${minexp}&maxexp=${maxexp}&query=${tagId}`, { headers: { 'Authorization': `Bearer ${token}`}})
      .then((json) => {
        dispatch(fetchJobFeedsSuccess(json.data.jobs, json.data.hasMore, pageNo, tagId, catId));
        return json.data;
      }).catch((err) => {
        console.log(err, '=======error====');
      })
    }
}

export function fetchLocationOptions() {
  return axios.get(`https://hirist-assets.s3.ap-south-1.amazonaws.com/lists/filterlocations.json`)
}

