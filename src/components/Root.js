import React, { Component } from 'react'
import RootWrapper from './RootWrapper';
import Jobfeed from './Jobseek/Jobfeed/Jobfeed';
import AppHeader from './AppHeader'
import './Root.scss';

export default class Root extends Component {
    render() {
        return (
        <div className="overlay-hirist-plugin">
           <RootWrapper>
            <AppHeader/>
            <div className="plugin-body-wrapper">
            <Jobfeed/>
            </div>
           </RootWrapper>
        </div>
       
        )
    }
}
