//.icon-website:before { content: '\e802'; } /* '' */
import React, { Component } from 'react'
import map from 'lodash/map';
import Aux from '../../Aux';
import { computelocation } from '../../../utils/searchLocationMethods';
import Dot from '../../../components/Dot';
import shortid from 'shortid';
import { jobColors } from '../../../models/colors';
import ToolTip from '../../../components/ToolTip';
import createMarkup from '../../../utils/createMarkup';
import { calculateDateInFormat, createAdvancedUrl } from '../../../utils/createUrl';
import DefaultJobfeedImage from '../../../image/company-icon@3x.png';
import './job.scss';



export default class job extends Component {
  constructor(props){
    super(props);
    this.state = {
      colorIndex: Math.floor(Math.random() * 6),
    }
  }

  render() {
    const {
      jobData,
    } = this.props;

    const {
      id,
      title,
      createdTime,
      applied,
      location,
      min,
      max,
      companyData,
      companyStatus,
      confidential,
    } = jobData;

    const {
      colorIndex,
    } = this.state;
    const s3Url = 'https://staticlogo.hirist.com';
    const ABS_URL = "https://www.hirist.com";
    const postingDate = calculateDateInFormat(createdTime);
    const displayLocation = computelocation(location); 
    const cmpName = companyStatus == 1 ? title.split('-')[ 0 ] : 'Consultant';
    const companyName = confidential ? 'Verified Recruiter' : (companyData ? companyData.companyName : cmpName);
    return (
      <Aux>
        <a className="" target="_blank" href={`${ABS_URL}${createAdvancedUrl(title, id, 'j')}`}>
           <div className={`job-card row ${applied ? 'applied-border' : ''} `}>
            <div className="job-description col-sm-9 col-xl-9">
                 <a style={{ display: 'unset' }} target="_blank" name="view_link" className='company-img-wrapper' href={`${ABS_URL}${createAdvancedUrl(title, id, 'j')}`} >
                 {(companyData && companyData.companyId != 0) && !confidential ?
                  <img className="logo-image" src={`${s3Url}/${companyData.companyId}-100X100.png`} alt={`Logo for ${companyData.companyId}`}/> : 
                  <img className="logo-card default-job" src={DefaultJobfeedImage} style={{ backgroundColor: jobColors[ colorIndex ] }} />
                 }
                 </a>
                {
                  window.innerWidth <= 425 ? 
                    <span id="company-job">
                      {(companyData && companyData.companyStatus === 1) || companyStatus === 1
                        ? <i className="icon-briefcase mr5 blue-icon" />
                        : <i className="icon-user mr5 blue-icon" />
                      }
                      <span className="dark_grey align-title" dangerouslySetInnerHTML={createMarkup(companyName)} />
                      <ToolTip id="company_data" className="set-tooltip">{companyName}<i /></ToolTip>
                    </span> : ''
                }
               <div className="job-title">
                  <a target="_blank" name="view_link" style={{ color: '#000' }} href={`${ABS_URL}${createAdvancedUrl(title, id, 'j')}`}>
                    {title.split('(')[ 0 ]}
                  </a>
               </div>
               <div className="job-fields">
                {
                    window.innerWidth > 425 ? 
                      <span id="company-job">
                        {(companyData && companyData.companyStatus === 1) || companyStatus === 1
                          ? <i className="icon-briefcase mr5 blue-icon" />
                          : <i className="icon-user mr5 blue-icon" />
                        }
                        <span className="dark_grey align-title" dangerouslySetInnerHTML={createMarkup(companyName)} />
                        <ToolTip id="company_data" className="set-tooltip">{companyName}<i /></ToolTip>
                      </span> : ''
                  }

                  <span className="dark_grey col-year">
                    <Dot className="hide-xs" />
                    {min} - {max} Years
                  </span>
                  <span id="location" className="show-tooltip dark_grey">
                    <Dot className="ml0" />
                    {location.length > 1 ? 'Multiple Locations' : displayLocation}
                    <ToolTip id="display_location" className="set-tooltip"><ul className="ol">{map(location, data => (<li className="diversity-li" key={shortid.generate()}>{data.name}</li>))}</ul><i /></ToolTip>
                 </span>
                 <span className="original dark_grey"><Dot />{postingDate}</span>
               </div>
              </div>
           </div>
        </a>
      </Aux>
    )
  }
}

