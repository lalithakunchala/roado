import React from 'react'
import {Switch,Route} from 'react-router-dom'
import Home from '../components/Home/Home'
import SinglePage from '../components/SinglePage/SinglePage'

export default function Routes() {
    return (
        <Switch>
           <Route path="/" exact component={Home} /> 
           <Route path="/single" render = {props => <SinglePage {...props}/>}/>
        </Switch>
    )
}
