import * as CONSTANS from './statusProject.constants';

export const delStatusProject = () => {
  return {
    type: CONSTANS.DELETE_STATUS_PROJECT,
  };
};
export const getStatusProject = data => {
  return {
    type: CONSTANS.GET_STATUS_PROJECT,
    payload: data,
  };
};
export const updateAStatusProject = () => {
  return {
    type: CONSTANS.UPDATE_STATUS_PROJECT,
  };
};
export const addAStatusProject = () => {
  return {
    type: CONSTANS.ADD_STATUS_PROJECT,
  };
};
