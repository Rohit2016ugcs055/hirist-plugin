import React, { Component } from 'react'
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
import { getJobFeeds } from '../api'


const Wrapper = styled.div`
  display: inline-block;
  vertical-align: top;
  position: relative;
  width: 100%;
  @media only screen and (min-width: 1280px){
    max-width: calc(75% - 23px);
  }
`;


class Jobfeed extends Component {
  constructor(props){
    super(props);
    this.state = {
      page: 0
    }
  }

  componentDidMount() {
     const { dispatch } = this.props;
     dispatch(getJobFeeds(988090,0,'date'));
     const plugin_body = document.querySelector(".overlay-hirist-plugin");
     const ele = document.getElementsByClassName("overlay-hirist-plugin")
     console.log("========",ele,document)
     plugin_body.addEventListener('scroll', this.handleScroll)
  }

  componentDidUpdate(prevProps, prevState) {
      if(prevState.page != this.state.page) {
        const { dispatch } = this.props;
        const { page } = this.state;
        dispatch(getJobFeeds(988090,page,'date'));
      }
  }

  componentWillUnmount() {
    const plugin_body = document.querySelector(".overlay-hirist-plugin");
    plugin_body.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll = () => {
    const { page } = this.state;
    const { loading, hasMore  } = this.props;
    const body = document.body;
    const docHeight = body.clientHeight;
    console.log("=======check=====",docHeight,window.innerHeight)
    
    // if ((window.innerHeight + window.pageYOffset >= docHeight - 50) && (!loading) && (hasMore)) {
    //     this.setState({ page: page + 1 })
    // }
 }



  render() {
    const {
      jobFeed,
      isLoading
    } = this.props;
    
    return (
      <div className="pt100">
          <div className="lms-recommend">
              <b>Recommended Jobs for you! </b>(<span className="dark_grey">Based on your profile settings at Simplilearn LMS</span>)
          </div>
        <Wrapper className="col-lg-9">
            <div className="clearfix" />
            {(jobFeed && !jobFeed.length) && isLoading ? <JobSeekLoader /> : (
            
              <div className="jobfeed-wrapper multiple-wrapper">
                {map(jobFeed && jobFeed.filter(j => j.applied === 0), (job, index) => (
                  <Job
                    key={job.id}
                    index={index}
                    jobData={job}
                    saved={job.saved}
                    showCheckbox={true}
                    showStar={true}
                    showInfoIcon={true}
                    showShowcaseOnHover={true}
                  />
                ))}
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
      
    );
}
}

const mapStateToProps = createStructuredSelector({
  isLoading: getJobLoading,
  jobFeed: getJobFeed,
  hasMore: hasMoreFeeds
})


const mapDispatchToProps = dispatch => ({
  dispatch,
});

Jobfeed.propTypes = {
  dispatch: PropTypes.func.isRequired,
  jobFeed: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
  hasMore: PropTypes.bool.isRequired,
};

Jobfeed.defaultProps = {
  hasMore: false,
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Jobfeed));

