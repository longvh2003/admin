import { DELETE_TECH_STACK, GET_TECH_STACK, UPDATE_TECH_STACK, ADD_TECH_STACK }
  from 'src/modules/techStack/techStack.constants';

export const delTechStack = () => {
  return {
    type: DELETE_TECH_STACK,
  };
};
export const getTechStack = data => {
  return {
    type: GET_TECH_STACK,
    payload: data,
  };
};
export const updateATechStack = () => {
  return {
    type: UPDATE_TECH_STACK,
  };
};
export const addATechStack = () => {
  return {
    type: ADD_TECH_STACK,
  };
};
