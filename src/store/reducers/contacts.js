import { ADD_CONTACT, DELETE_CONTACT} from "../actions/actionTypes";

const initialState = {
  contacts: []
};

const reducer  = (state = initialState, action) => {
  switch (action.type){
    case ADD_CONTACT:
      return {
        ...state,
        contacts: state.contacts.concat({
          key: Math.random().toString(),
          name: action.name,
          image: action.image
          // image: {
          //   uri:
          //     "https://c1.staticflickr.com/5/4096/4744241983_34023bf303_b.jpg"
          // }
        })
      };
    case DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter(contact => {
          return contact.key !== action.contactKey;
        })
        };
    default:
      return state;
  }
};

export default reducer;