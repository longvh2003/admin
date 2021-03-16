import produce from 'immer';
import * as CONSTANS from './techStack.constants';

const initState = {
  page: 0,
  data: [],
};
export const techStackReducer = (state = initState, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case CONSTANS.DELETE_TECH_STACK:
        break;
      case CONSTANS.GET_TECH_STACK:
        draft.data = action.payload;
        if (action.payload.length % 3 === 0) draft.page = action.payload.length / 3;
        else draft.page = ~~(action.payload.length / 3) + 1;
        break;
      case CONSTANS.UPDATE_TECH_STACK:
        break;
      default:
        return state;
    }
  });
};
