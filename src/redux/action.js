import axios from 'axios';
import {FETCH_REQUEST,FETCH_SUCCESS,FETCH_FAILURE,POST_REQUEST,POST_SUCCESS,POST_FAILURE,GET_REQUEST,GET_SUCCESS,GET_FAILURE} from './actionTypes';

const fetchRequest = (res)=>{
    return {
      type: FETCH_REQUEST,
      payload:res
    }
  }

  const fetchSuccess = (res)=>{
    return {
      type: FETCH_SUCCESS,
      payload:res
    }
  }

  const fetchFailure = (res)=>{
    return {
      type: FETCH_FAILURE,
      payload:res
    }
  }

   const fetchDataRequest = (payload) => (dispatch) => {
    var config = {
      method: 'get',
      url: 'https://od-api.oxforddictionaries.com/api/v2/entries/en-gb/drink?fields=definitions&strictMatch=false',
      headers: { 
        'app_id': 'c0bd6dc9', 
        'app_key': '9a44ef20948fa5c5a729746bad1eea84', 
        'Accept': 'application/json'
      }
    };
    return axios(config)
      .then((response) => response.data)
      .then((data) => dispatch(fetchSuccess(data)))
      .catch((error) => dispatch(fetchFailure(error)));
  };

  

  const postRequest = (res)=>{
    return {
      type: POST_REQUEST,
      payload:res
    }
  }

  const postSuccess = (res)=>{
    return {
      type: POST_SUCCESS,
      payload:res
    }
  }

  const postFailure = (res)=>{
    return {
      type: POST_FAILURE,
      payload:res
    }
  }

  

  const postDataRequest = (userdetails) => {
    console.log("fetch admin login data action called",userdetails);
    return dispatch => {
        dispatch(postRequest())
        var config = {
            method: 'post',
            url: 'http://localhost:8000/auth/register',
            headers: { 
              'app_id': 'c0bd6dc9', 
              'app_key': '9a44ef20948fa5c5a729746bad1eea84', 
              'Accept': 'application/json'
            }
          };
          
          return axios(config)
          .then(function (response) {
            console.log(JSON.stringify(response.data));
            return response;
          })
          .then(res=>dispatch(postSuccess(res.data)))
          .catch(error => postFailure(error.data))
    }
  }

  const getRequest = (res)=>{
    return {
      type: GET_REQUEST,
      payload:res
    }
  }

  const getSuccess = (res)=>{
    return {
      type: GET_SUCCESS,
      payload:res
    }
  }

  const getFailure = (res)=>{
    return {
      type: GET_FAILURE,
      payload:res
    }
  }

  

  const getDataRequest = (userdetails) => {
    console.log("fetch admin login data action called",userdetails);
    return dispatch => {
        dispatch(getRequest())
        var config = {
            method: 'get',
            url: 'http://localhost:8000/auth/register',
            headers: { 
              'app_id': 'c0bd6dc9', 
              'app_key': '9a44ef20948fa5c5a729746bad1eea84', 
              'Accept': 'application/json'
            }
          };
          
          return axios(config)
          .then(function (response) {
            console.log(JSON.stringify(response.data));
            return response;
          })
          .then(res=>dispatch(getSuccess(res.data)))
          .catch(error => getFailure(error.data))
    }
  }

  export {fetchDataRequest,postDataRequest,getDataRequest} 