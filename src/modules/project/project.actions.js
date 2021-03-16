import * as CONSTANS from './project.constants';

export const delProject = () => {
  return {
    type: CONSTANS.DELETE_PROJECT,
  };
};
export const getProject = data => {
  return {
    type: CONSTANS.GET_PROJECT,
    payload: data,
  };
};
export const updateAProject = () => {
  return {
    type: CONSTANS.UPDATE_PROJECT,
  };
};
export const addAProject = () => {
  return {
    type: CONSTANS.ADD_PROJECT,
  };
};
