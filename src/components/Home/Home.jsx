import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios';
import {fetchDataRequest} from '../../redux/action.js'

export class Home extends Component {
    componentDidMount(){
        var config = {
            method: 'get',
            url: 'https://od-api.oxforddictionaries.com/api/v2/entries/en-gb/orange?fields=definitions&strictMatch=false',
            headers: { 
              'app_id': 'c0bd6dc9', 
              'app_key': '9a44ef20948fa5c5a729746bad1eea84', 
              'Accept': 'application/json'
            }
          };
          
          axios(config)
          .then(function (response) {
            console.log(JSON.stringify(response.data));
          })
          .catch(function (error) {
            console.log(error);
          });
    }
    render() {
        return (
            <div >
                Home page of oxford
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = dispatch =>{
    return{
        fetchDataRequest: (n) => dispatch(fetchDataRequest(n))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
