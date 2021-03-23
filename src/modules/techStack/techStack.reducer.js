import produce from 'immer';
import { DELETE_TECH_STACK, ADD_TECH_STACK,
  GET_TECH_STACK, UPDATE_TECH_STACK } from 'src/modules/techStack/techStack.constants';

const initState = {
  page: 0,
  data: [],
};
export const techStackReducer = (state = initState, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case DELETE_TECH_STACK:
        break;
      case ADD_TECH_STACK:
        break;
      case GET_TECH_STACK:
        draft.data = action.payload;
        if (action.payload.length % 3 === 0) draft.page = action.payload.length / 3;
        else draft.page = ~~(action.payload.length / 3) + 1;
        break;
      case UPDATE_TECH_STACK:
        break;
      default:
        return state;
    }
  });
};
