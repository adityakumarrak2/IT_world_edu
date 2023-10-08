import { ACTIONS } from "../action/actionFun"

export const reducer = (state, action) => {
    switch (action.type) {
      case ACTIONS.ADD:
        return [...state, action.payload];
      case ACTIONS.DEL:
        return state.filter((contact) => {
          return contact.id !== action.payload.id;
        });
      default:
        throw new Error();
    }
  };