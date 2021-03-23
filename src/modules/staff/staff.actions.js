import { DELETE_STAFF, GET_STAFF, UPDATE_STAFF, ADD_STAFF }
  from 'src/modules/staff/staff.constants';

export const delStaff = () => {
  return {
    type: DELETE_STAFF,
  };
};
export const getStaff = data => {
  return {
    type: GET_STAFF,
    payload: data,
  };
};
export const updateAStaff = () => {
  return {
    type: UPDATE_STAFF,
  };
};
export const addAStaff = () => {
  return {
    type: ADD_STAFF,
  };
};
