import { ActionType } from '../constants/actionType';

export const removeItem = (id) => {
  return {
    type: ActionType.REMOVE_ITEM,
    id: id
  }
};