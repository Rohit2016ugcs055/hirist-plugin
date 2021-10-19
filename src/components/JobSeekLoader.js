import React from 'react';
import times from 'lodash/times';
import './ShellLoader.scss';

const JobSeekLoader = () => (
  <div className="container-fluid">
    <div className="ph-item">
      <div className="ph-col-12">
        {times(30, i =>
          <div className="job-card ph-row" key={i}>
            <div className="job-description col-sm-8 shell-desc">
              <div id="shell-logo" className="logo-card shell-color" /> 
              <div id="shell-job-title" className="job-title" />
              <div id="shell-info" className="ph-row">
                <div className="sb"></div>
                <div className="seb empty"></div>
                <div className="sb"></div>
                <div className="seb empty"></div>
                <div className="sb"></div>
                <div className="seb empty"></div>
                <div className="sb"></div>
                <div className="seb empty"></div>
              </div>
            </div>   
          </div>
        )}
      </div>
    </div>
  </div>
);

export default JobSeekLoader;
