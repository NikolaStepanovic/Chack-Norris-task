import {
  FETCH_JOKE,
  FETCH_JOKE_SUCCESS,
  FETCH_EXPLICIT_JOKE,
  FETCH_EXPLICIT_JOKE_SUCCESS,
  FETCH_MONEY_JOKE,
  FETCH_MONEY_JOKE_SUCCESS,
} from './action';

const initialState = {
  data: [],
  dataExplicit: [],
  dataMoney: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_JOKE:
      return { ...state };
    case FETCH_JOKE_SUCCESS:
      return {
        ...state,
        data: [action.payload, ...state.data],
      };
    case FETCH_EXPLICIT_JOKE:
      return { ...state };
    case FETCH_EXPLICIT_JOKE_SUCCESS:
      return {
        ...state,
        dataExplicit: [action.payload, ...state.dataExplicit],
      };
    case FETCH_MONEY_JOKE:
      return { ...state };
    case FETCH_MONEY_JOKE_SUCCESS:
      return {
        ...state,
        dataMoney: [action.payload, ...state.dataMoney],
      };
    default:
      return state;
  }
};

export default reducer;
