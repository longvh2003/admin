import { DELETE_DEPARTMENT, GET_DEPARTMENT, UPDATE_DEPARTMENT, ADD_DEPARTMENT, ADD_DATA_TECH_STACK }
  from 'src/modules/department/department.constants';

export const delDepartment = () => {
  return {
    type: DELETE_DEPARTMENT,
  };
};
export const getDepartment = data => {
  return {
    type: GET_DEPARTMENT,
    payload: data,
  };
};
export const updateADepartment = () => {
  return {
    type: UPDATE_DEPARTMENT,
  };
};
export const addADepartment = () => {
  return {
    type: ADD_DEPARTMENT,
  };
};
export const addDataTechStack = () => {
  return {
    type: ADD_DATA_TECH_STACK,
  };
};
