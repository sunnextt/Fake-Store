import {
  ORDER_CREATE_REQUEST,
  ORDER_CREATE_SUCCESS,
  ORDER_CREATE_FAIL,
  ORDER_DETAILS_SUCCESS,
  ORDER_DETAILS_FAIL,
  ORDER_PAY_REQUEST,
  ORDER_PAY_SUCCESS,
  ORDER_PAY_FAIL,
} from "../constants/orderConstants";


const createOrder = (order) => async (dispatch) => {
  try {
    dispatch({ type: ORDER_CREATE_REQUEST, payload: order });
    dispatch({ type: ORDER_CREATE_SUCCESS, payload: order });
  }
  
  catch (error) {
    dispatch({ type: ORDER_CREATE_FAIL, payload: error.message });
  }
};



const detailsOrder = (plswork) => async (dispatch) => {
  try {
    dispatch({ type: ORDER_DETAILS_SUCCESS, payload: plswork });
  } catch (error) {
    dispatch({ type: ORDER_DETAILS_FAIL, payload: error.message });
  }
};


const payOrder = (order, paymentResult) => async (dispatch, ) => {
  try {
    dispatch({ type: ORDER_PAY_REQUEST, payload: paymentResult });

    dispatch({ type: ORDER_PAY_SUCCESS, payload: paymentResult });
  } catch (error) {
    dispatch({ type: ORDER_PAY_FAIL, payload: error.message });
  }
};

export {
  createOrder,
  detailsOrder,
  payOrder,
};
