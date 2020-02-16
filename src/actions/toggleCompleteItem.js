import { ActionType } from '../constants/actionType';

export const toggleCompleteItem = (id) => {
  return {
    type: ActionType.TOGGLE_COMPLETE_ITEM,
    id: id
  }
};