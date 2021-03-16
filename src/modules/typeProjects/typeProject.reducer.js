import produce from 'immer';
import * as CONSTANS from './typeProject.constants';

const initState = {
  page: 0,
  data: [],
};
export const projectTypeReducer = (state = initState, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case CONSTANS.DELETE_TYPE_PROJECT:
        break;
      case CONSTANS.ADD_TYPE_PROJECT:
        break;
      case CONSTANS.GET_TYPE_PROJECT:
        draft.data = action.payload;
        if (action.payload.length % 3 === 0) draft.page = action.payload.length / 3;
        else draft.page = ~~(action.payload.length / 3) + 1;
        break;
      case CONSTANS.UPDATE_TYPE_PROJECT:
        break;
      default:
        return state;
    }
  });
};
