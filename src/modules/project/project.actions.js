import { DELETE_PROJECT, GET_PROJECT, UPDATE_PROJECT, ADD_PROJECT }
  from 'src/modules/project/project.constants';

export const delProject = () => {
  return {
    type: DELETE_PROJECT,
  };
};
export const getProject = data => {
  return {
    type: GET_PROJECT,
    payload: data,
  };
};
export const updateAProject = () => {
  return {
    type: UPDATE_PROJECT,
  };
};
export const addAProject = () => {
  return {
    type: ADD_PROJECT,
  };
};
