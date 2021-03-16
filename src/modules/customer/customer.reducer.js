import produce from 'immer';
import * as CONSTANS from './customer.constants';

const initState = {
  page: 0,
  data: [],
};
export const customerReducer = (state = initState, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case CONSTANS.DELETE_CUSTOMER:
        break;
      case CONSTANS.GET_CUSTOMER:
        draft.data = action.payload;
        if (action.payload.length % 3 === 0) draft.page = action.payload.length / 3;
        else draft.page = ~~(action.payload.length / 3) + 1;
        break;
      case CONSTANS.UPDATE_CUSTOMER:
        break;
      default:
        return state;
    }
  });
};
