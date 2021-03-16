import { delStaff, getStaff, updateAStaff, addAStaff } from './staff.actions';
import { delData, updateData, addData } from '../../utils/utils';

export const delAStaff = (index, TABLE_NAME) => dispatch => {
  if (TABLE_NAME) {
    delData(index, TABLE_NAME);
    return dispatch(delStaff);
  }
};
export const getAllStaff = data => dispatch => {
  if (data !== 0) {
    return dispatch(getStaff(data));
  }
};
export const updateStaff = (index, detail, TABLE_NAME) => dispatch => {
  if (TABLE_NAME) {
    updateData(index, detail, TABLE_NAME);
    return dispatch(updateAStaff);
  }
};
export const addStaff = (detail, TABLE_NAME) => dispatch => {
  if (TABLE_NAME) {
    addData(detail, TABLE_NAME);
    return dispatch(addAStaff);
  }
};
