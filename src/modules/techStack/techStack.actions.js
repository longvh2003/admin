import * as CONSTANS from './techStack.constants';

export const delTechStack = () => {
  return {
    type: CONSTANS.DELETE_TECH_STACK,
  };
};
export const getTechStack = data => {
  return {
    type: CONSTANS.GET_TECH_STACK,
    payload: data,
  };
};
export const updateATechStack = () => {
  return {
    type: CONSTANS.UPDATE_TECH_STACK,
  };
};
export const addATechStack = () => {
  return {
    type: CONSTANS.ADD_TECH_STACK,
  };
};
