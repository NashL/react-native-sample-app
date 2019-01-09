import { ADD_CONTACT, DELETE_CONTACT } from "./actionTypes";
import defaultPersonImage from "../../assets/default_person_icon.png"


export const addContact = (name) => {
  return {
    type: ADD_CONTACT,
    name: name,
    image: defaultPersonImage
  };
};

export const deleteContact = (key) => {
  return {
    type: DELETE_CONTACT,
    contactKey: key
  };
};
