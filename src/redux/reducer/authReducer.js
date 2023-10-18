import { HandleLoginApi } from "../type/authType";

const initialState = {
  apiStatus: "",
  errorMsg: "",
  data: "",
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case HandleLoginApi:
      return { ...state, ...payload };
    default:
      return state;
  }
};
export default reducer;
