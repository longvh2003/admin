import produce from 'immer';
import * as CONSTANS from './staff.constants';

const initState = {
  page: 0,
  data: [],
};
export const staffReducer = (state = initState, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case CONSTANS.DELETE_STAFF:
        break;
      case CONSTANS.GET_STAFF:
        draft.data = action.payload;
        if (action.payload.length % 3 === 0) draft.page = action.payload.length / 3;
        else draft.page = ~~(action.payload.length / 3) + 1;
        break;
      case CONSTANS.UPDATE_STAFF:
        break;
      default:
        return state;
    }
  });
};
