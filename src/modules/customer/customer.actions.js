import { DELETE_CUSTOMER, GET_CUSTOMER, UPDATE_CUSTOMER, ADD_CUSTOMER }
  from 'src/modules/customer/customer.constants';

export const delCustomer = () => {
  return {
    type: DELETE_CUSTOMER,
  };
};
export const getCustomer = data => {
  return {
    type: GET_CUSTOMER,
    payload: data,
  };
};
export const updateACustomer = () => {
  return {
    type: UPDATE_CUSTOMER,
  };
};
export const addACustomer = () => {
  return {
    type: ADD_CUSTOMER,
  };
};
