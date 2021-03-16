import * as CONSTANS from './typeProject.constants';

export const delTypeProject = () => {
  return {
    type: CONSTANS.DELETE_TYPE_PROJECT,
  };
};
export const getTypeProject = data => {
  return {
    type: CONSTANS.GET_TYPE_PROJECT,
    payload: data,
  };
};
export const updateATypeProject = () => {
  return {
    type: CONSTANS.UPDATE_TYPE_PROJECT,
  };
};
export const addATypeProject = () => {
  return {
    type: CONSTANS.ADD_TYPE_PROJECT,
  };
};
