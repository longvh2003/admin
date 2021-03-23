import { DELETE_STATUS_PROJECT, GET_STATUS_PROJECT, UPDATE_STATUS_PROJECT, ADD_STATUS_PROJECT }
  from 'src/modules/projectStatus/statusProject.constants';

export const delStatusProject = () => {
  return {
    type: DELETE_STATUS_PROJECT,
  };
};
export const getStatusProject = data => {
  return {
    type: GET_STATUS_PROJECT,
    payload: data,
  };
};
export const updateAStatusProject = () => {
  return {
    type: UPDATE_STATUS_PROJECT,
  };
};
export const addAStatusProject = () => {
  return {
    type: ADD_STATUS_PROJECT,
  };
};
