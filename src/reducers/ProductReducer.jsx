import {
  GET_ALL_ITEMS,
  ADD_NEW_ITEM,
  GET_ONE_ITEM,
  GET_ALL_ITEMS_FROM_ONE_USER,
  GET_ALL_ITEMS_FROM_CATEGORIE,
  TRIE_FROM_PRIX,
  EFFACER_UN_ARTICLE
} from "../actions/Types";
import axios from 'axios';


const initialState = {
  product: []
};

export default function(state = initialState, action) {
  switch (action.type) {
  //   case GET_ALL_ITEMS:
  //     axios.get('./http://localhost:3000/Home')
  //     return{...state,product: [...state.product.map((el)=> el)] }
  

    case ADD_NEW_ITEM:
      // axios.post('http://localhost:3000/SpaceUser', action.payload)
      return {...state, product: [...state.product, action.payload] };
     
  //   case GET_ONE_ITEM:
  //     axios.get('http://localhost:3000/Home/id', action.payload)
  //     return {...state,product: [...state.product.filter((el,id)=>( id == action.payload)?el :null )] };

  //   case GET_ALL_ITEMS_FROM_ONE_USER:
  //     axios.get('http://localhost:3000/Home', action.payload)
  //     return {...state,product: [...state.product.filter((el,id)=>( el.idUser == action.payload)?el :null )] };


  //   case GET_ALL_ITEMS_FROM_CATEGORIE:
  //     axios.get('http://localhost:3000/Home', action.payload)
  //     return {...state,product: [...state.product.filter((el,id)=>( el.categorie == action.payload)?el :null )] };


  //   case TRIE_FROM_PRIX:
  //     return {};

  //   case EFFACER_UN_ARTICLE:
  //     axios.delete("http://localhost:3000/Home/:id", action.payload);

  //     let newProduct = state.product;
  //     return { ...state,product: [...newProduct.filter((el,id)=>   (id !== action.payload)? el:null )]  };
  // }
  // return {...state,product:[]} ; 
  default:
    return state;
}
}
