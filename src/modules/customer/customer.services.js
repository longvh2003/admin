import { delCustomer, getCustomer, updateACustomer, addACustomer } from './customer.actions';
import { delData, updateData, addData } from '../../utils/utils';

export const delACustomer = (index, TABLE_NAME) => dispatch => {
  if (TABLE_NAME) {
    delData(index, TABLE_NAME);
    return dispatch(delCustomer);
  }
};
export const getAllCustomer = data => dispatch => {
  if (data !== 0) {
    return dispatch(getCustomer(data));
  }
};
export const updateCustomer = (index, detail, TABLE_NAME) => dispatch => {
  if (TABLE_NAME) {
    updateData(index, detail, TABLE_NAME);
    return dispatch(updateACustomer);
  }
};
export const addCustomer = (detail, TABLE_NAME) => dispatch => {
  if (TABLE_NAME) {
    addData(detail, TABLE_NAME);
    return dispatch(addACustomer);
  }
};
