import { DELETE_TYPE_PROJECT, GET_TYPE_PROJECT, ADD_TYPE_PROJECT, UPDATE_TYPE_PROJECT }
  from 'src/modules/typeProjects/typeProject.constants';

export const delTypeProject = () => {
  return {
    type: DELETE_TYPE_PROJECT,
  };
};
export const getTypeProject = data => {
  return {
    type: GET_TYPE_PROJECT,
    payload: data,
  };
};
export const updateATypeProject = () => {
  return {
    type: UPDATE_TYPE_PROJECT,
  };
};
export const addATypeProject = () => {
  return {
    type: ADD_TYPE_PROJECT,
  };
};
