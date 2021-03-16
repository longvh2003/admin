import * as CONSTANS from './staff.constants';

export const delStaff = () => {
  return {
    type: CONSTANS.DELETE_STAFF,
  };
};
export const getStaff = data => {
  return {
    type: CONSTANS.GET_STAFF,
    payload: data,
  };
};
export const updateAStaff = () => {
  return {
    type: CONSTANS.UPDATE_STAFF,
  };
};
export const addAStaff = () => {
  return {
    type: CONSTANS.ADD_STAFF,
  };
};
