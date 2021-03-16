import {
  delDepartment,
  getDepartment,
  updateADepartment,
  addADepartment,
} from './department.actions';
import { delData, updateData, addData } from '../../utils/utils';
import { TABLE_NAME } from './department.constants';

export const delADepartment = (index, TABLE_NAME) => dispatch => {
  if (TABLE_NAME) {
    delData(index, TABLE_NAME);
    return dispatch(delDepartment);
  }
};
export const getAllDepartment = data => dispatch => {
  if (data !== 0) {
    return dispatch(getDepartment(data));
  }
};
export const updateDepartment = (index, detail, TABLE_NAME) => dispatch => {
  if (TABLE_NAME) {
    updateData(index, detail, TABLE_NAME);
    return dispatch(updateADepartment);
  }
};
export const addDepartment = (detail, TABLE_NAME) => dispatch => {
  if (TABLE_NAME) {
    addData(detail, TABLE_NAME);
    return dispatch(addADepartment);
  }
};
export const addDataTechStack = (detail, index) => dispatch => {
  if (detail) {
    let data = JSON.parse(localStorage.getItem(TABLE_NAME));
    data[index].techStacks.push(detail);
    localStorage.setItem(TABLE_NAME, JSON.stringify(data));
    return dispatch(addDataTechStack);
  }
};
