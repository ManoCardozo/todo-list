import { ActionType } from '../constants/actionType';

export const addItem = (text) => {
  return {
    type: ActionType.ADD_ITEM,
    text: text
  }
};