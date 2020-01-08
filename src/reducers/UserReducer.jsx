import {EFFACER_USER , CREATE_USER} from '../actions/Types'
import axios from 'axios';

const initialState = {
    user: []
  };

  export default function(state = initialState, action) {
    switch (action.type) {
      case CREATE_USER:
        // axios.get('./http://localhost:3000/Home')
        return{...state, user: [...state.user, action.payload] };
    
   
        
    //     case EFFACER_USER :
    //       axios.delete("http://localhost:3000/Home/:id", action.payload);

    //   let newUser = state.product;
    //   return { ...state,user: [...newUser.filter((el,id)=>   (id !== action.payload)? el:null )]  };
      
    // }  
    default:
    return state;
    }
}
