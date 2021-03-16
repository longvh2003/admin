import * as CONSTANS from './department.constants';

export const delDepartment = () => {
  return {
    type: CONSTANS.DELETE_DEPARTMENT,
  };
};
export const getDepartment = data => {
  return {
    type: CONSTANS.GET_DEPARTMENT,
    payload: data,
  };
};
export const updateADepartment = () => {
  return {
    type: CONSTANS.UPDATE_DEPARTMENT,
  };
};
export const addADepartment = () => {
  return {
    type: CONSTANS.ADD_DEPARTMENT,
  };
};
export const addDataTechStack = () => {
  return {
    type: CONSTANS.ADD_DATA_TECH_STACK,
  };
};
