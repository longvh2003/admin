import produce from 'immer';
import * as CONSTANS from './department.constants';

const initState = {
  page: 0,
  data: [],
};
export const departmentReducer = (state = initState, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case CONSTANS.DELETE_DEPARTMENT:
        break;
      case CONSTANS.GET_DEPARTMENT:
        draft.data = action.payload;
        if (action.payload.length % 3 === 0) draft.page = action.payload.length / 3;
        else draft.page = ~~(action.payload.length / 3) + 1;
        break;
      case CONSTANS.UPDATE_DEPARTMENT:
        break;
      case CONSTANS.ADD_DATA_TECH_STACK:
        break;
      default:
        return state;
    }
  });
};
