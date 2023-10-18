import { useDispatch } from "react-redux";
import { HandleLoginApi } from "../type/authType";

export const loginUserApi = (payload) => {
  return async (dispatch) => {
    dispatch({ type: HandleLoginApi, payload: { apiStatus: "PENDING" } });
    let options = {
      method: "POST",
      body: JSON.stringify(payload),
    };
    try {
      let response = await fetch("api", options);
      let data = await response.json();
      if (response.ok) {
        dispatch({
          type: HandleLoginApi,
          payload: { apiStatus: "SCCCESS", data: data },
        });
      } else {
        dispatch({
          type: HandleLoginApi,
          payload: { apiStatus: "FAILED", errMsg: response.err_msg },
        });
      }
    } catch (e) {
      dispatch({
        type: HandleLoginApi,
        payload: { apiStatus: "FAILED", errMsg: response.err_msg },
      });
    }
  };
};
