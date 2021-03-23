import produce from 'immer';
import { DELETE_DEPARTMENT, ADD_DEPARTMENT,
  GET_DEPARTMENT, UPDATE_DEPARTMENT } from './department.constants';

const initState = {
  page: 0,
  data: [],
};
export const departmentReducer = (state = initState, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case DELETE_DEPARTMENT:
        break;
      case ADD_DEPARTMENT:
        break;
      case GET_DEPARTMENT:
        draft.data = action.payload;
        if (action.payload.length % 3 === 0) draft.page = action.payload.length / 3;
        else draft.page = ~~(action.payload.length / 3) + 1;
        break;
      case UPDATE_DEPARTMENT:
        break;
      default:
        return state;
    }
  });
};
