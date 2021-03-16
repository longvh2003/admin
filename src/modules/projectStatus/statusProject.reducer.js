import produce from 'immer';
import * as CONSTANS from './statusProject.constants';

const initState = {
  page: 0,
  data: [],
};
export const projectStatusReducer = (state = initState, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case CONSTANS.DELETE_STATUS_PROJECT:
        break;
      case CONSTANS.GET_STATUS_PROJECT:
        draft.data = action.payload;
        if (action.payload.length % 3 === 0) draft.page = action.payload.length / 3;
        else draft.page = ~~(action.payload.length / 3) + 1;
        break;
      case CONSTANS.UPDATE_STATUS_PROJECT:
        break;
      default:
        return state;
    }
  });
};
