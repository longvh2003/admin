import produce from 'immer';
import { DELETE_STAFF, ADD_STAFF, GET_STAFF, UPDATE_STAFF }
  from 'src/modules/staff/staff.constants';

const initState = {
  page: 0,
  data: [],
};
export const staffReducer = (state = initState, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case DELETE_STAFF:
        break;
      case ADD_STAFF:
        break;
      case GET_STAFF:
        draft.data = action.payload;
        if (action.payload.length % 3 === 0) draft.page = action.payload.length / 3;
        else draft.page = ~~(action.payload.length / 3) + 1;
        break;
      case UPDATE_STAFF:
        break;
      default:
        return state;
    }
  });
};
