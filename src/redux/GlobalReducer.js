import ActionType from "./GlobalActionType";

const initialState = {
  dataPriceList: [],
};

const globalReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SAVE_PRICE:
      return { ...state, dataPriceList: action.dataPriceList };
  }
  return state;
};

export default globalReducer;
