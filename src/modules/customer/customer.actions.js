import * as CONSTANS from './customer.constants';

export const delCustomer = () => {
  return {
    type: CONSTANS.DELETE_CUSTOMER,
  };
};
export const getCustomer = data => {
  return {
    type: CONSTANS.GET_CUSTOMER,
    payload: data,
  };
};
export const updateACustomer = () => {
  return {
    type: CONSTANS.UPDATE_CUSTOMER,
  };
};
export const addACustomer = () => {
  return {
    type: CONSTANS.ADD_CUSTOMER,
  };
};
