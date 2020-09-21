import {FETCH_REQUEST} from './actionTypes'
  
  const initStore = {
    isLoading: false,
    data: [],
    error: ""
  };
  
  const reducer = (state = initStore, {type,payload}) => {
    console.log("reducer called");
    switch (type) {
      
        case FETCH_REQUEST:
        console.log("reducer request called");
        return {
          ...state
          
        };


      default:
        console.log("reducer default called");
        return state;
    }
  };
  
  export default reducer;