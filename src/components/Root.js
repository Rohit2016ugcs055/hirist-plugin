import React, { Component } from 'react'
import RootWrapper from './RootWrapper';
import Jobfeed from './Jobseek/Jobfeed/Jobfeed';
import AppHeader from './AppHeader'
export default class Root extends Component {
    render() {
        return (
        <RootWrapper>
          <AppHeader/>
          <div className="">
           <Jobfeed/>
          </div>
        </RootWrapper>
        )
    }
}
