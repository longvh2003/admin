import produce from 'immer';
import { DELETE_CUSTOMER, ADD_CUSTOMER, GET_CUSTOMER, UPDATE_CUSTOMER }
  from 'src/modules/customer/customer.constants';

const initState = {
  page: 0,
  data: [],
};
export const customerReducer = (state = initState, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case DELETE_CUSTOMER:
        break;
      case ADD_CUSTOMER:
        break;
      case GET_CUSTOMER:
        draft.data = action.payload;
        if (action.payload.length % 3 === 0) draft.page = action.payload.length / 3;
        else draft.page = ~~(action.payload.length / 3) + 1;
        break;
      case UPDATE_CUSTOMER:
        break;
      default:
        return state;
    }
  });
};
