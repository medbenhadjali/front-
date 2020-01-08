import {
  GET_ALL_ITEMS,
  ADD_NEW_ITEM,
  GET_ONE_ITEM,
  GET_ALL_ITEMS_FROM_ONE_USER,
  GET_ALL_ITEMS_FROM_CATEGORIE,
  TRIE_FROM_PRIX,
  EFFACER_UN_ARTICLE,
} from '../actions/Types';
import axios from 'axios';

const initialState = {
  product: [],
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_NEW_ITEM:
      console.log(action.payload);
      axios
        .post('http://localhost:4000/api/products', action.payload, {
          headers: {
            'Content-Type': 'application/json',
          },
        })
        .then((res) => {
          console.log(res.data.product);
          return { ...state, product: res.data.product };
        })
        .catch((err) => console.log(err));
      break;
    case GET_ALL_ITEMS:
      axios
        .get('http://localhost:4000/api/products')
        .then((res) => {
          console.log('list', res.data);

          return { ...state, product: res.data };
        })
        .catch((err) => console.log(err));
      break;

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
