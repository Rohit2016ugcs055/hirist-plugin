import React, { useState, useEffect, useRef, useCallback } from 'react'
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import map from 'lodash/map';
import Job from '../Job/job'
import Spinner from 'react-bootstrap/Spinner';
import './Jobfeed.scss';
import {
  getJobFeed,
  getJobLoading,
  hasMoreFeeds,
} from '../../../components/Jobseek/selector';
import JobSeekLoader from '../../JobSeekLoader';
import { getJobFeeds } from '../api';

const Wrapper = styled.div`
  display: inline-block;
  vertical-align: top;
  position: relative;
  width: 100%;
  @media only screen and (min-width: 1280px){
    max-width: calc(75% - 23px);
  }
`;

const Jobfeed2 = (props) => {
   
    const [page, setPage] = useState(0);
    const { isLoading, jobFeed, hasMore } = props;
    const observer = useRef();
    const lastJobElementRef = useCallback(node => {
        console.log("====",node)
      if(isLoading) return
      if(observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver(obs => {
        if(obs[0].isIntersecting && hasMore) {
            setPage(prevPage => prevPage + 1)
        }
      })
      if(node) observer.current.observe(node)
    },[isLoading, hasMore])


    useEffect(() => {
        const { dispatch } = props;
        dispatch(getJobFeeds(988090,page,'date'));
    },[page])


    return (
        <div className="pt100">
          <div className="lms-recommend">
              <b>Recommended Jobs for you! </b>(<span className="dark_grey">Based on your profile settings at Simplilearn LMS</span>)
          </div>
        <Wrapper className="col-lg-9">
            <div className="clearfix" />
            {(jobFeed && !jobFeed.length) && isLoading ? <JobSeekLoader /> : (
            
              <div className="jobfeed-wrapper multiple-wrapper">
                {map(jobFeed && jobFeed.filter(j => j.applied === 0), (job, index) => {
                  if(jobFeed.length === index + 1) {
                      return (
                        <div ref={lastJobElementRef}  key={job.id}>
                            <Job
                            index={index}
                            jobData={job}
                            saved={job.saved}
                            showCheckbox={true}
                            showStar={true}
                            showInfoIcon={true}
                            showShowcaseOnHover={true}
                            />
                        </div>
                      )
                  } else {
                    return(
                      <div key={job.id}>
                        <Job
                        index={index}
                        jobData={job}
                        saved={job.saved}
                        showCheckbox={true}
                        showStar={true}
                        showInfoIcon={true}
                        showShowcaseOnHover={true}
                        />
                    </div>
                    )}
                 })}
              </div>
              
            )}
             {
              isLoading ?
              <Spinner animation="border" role="status">
                 <span className="visually-hidden"></span>
              </Spinner> : ''
            }
      </Wrapper>
      </div>
    )
}

const mapStateToProps = createStructuredSelector({
    isLoading: getJobLoading,
    jobFeed: getJobFeed,
    hasMore: hasMoreFeeds
  })
  
  
  const mapDispatchToProps = dispatch => ({
    dispatch,
  });
  
  Jobfeed2.propTypes = {
    dispatch: PropTypes.func.isRequired,
    jobFeed: PropTypes.array.isRequired,
    isLoading: PropTypes.bool.isRequired,
    hasMore: PropTypes.bool.isRequired,
  };
  
  Jobfeed2.defaultProps = {
    hasMore: false,
  }
  
  export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Jobfeed2));
