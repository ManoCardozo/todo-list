import { ActionType } from '../constants/actionType';
import { intialState } from '../constants/initialState';

let addItem = (state, item) => {
  let updatedList = state.items.slice();
  
  let newItem = {
    id: (updatedList.length || 0) + 1,
    text: item.text,
    complete: false
  };

  updatedList.push(newItem);

  return {
      ...state,
      items: updatedList
  };
};

let removeItem = (state, item) => {
  let updatedList = state.items.filter((i) => {
    return (i.id !== item.id)
  });

  return {
    ...state,
    items: updatedList
  };
};

let toggleCompleteItem = (state, item) => {
  let updatedList = state.items.slice();

  var currentItem = updatedList.find(e => e.id == item.id);
  currentItem.complete = !currentItem.complete;

  return {
    ...state,
    items: updatedList
  };
};


const reducer = (state, action) => {

  if (typeof state === 'undefined') {
    return intialState;
  }

  switch (action.type)
  {
    case (ActionType.ADD_ITEM): {
      return addItem(state, action);
    }
    case (ActionType.REMOVE_ITEM): {
      return removeItem(state, action);
    }
    case (ActionType.TOGGLE_COMPLETE_ITEM): {
      return toggleCompleteItem(state, action);
    }
    default: {
      return state;
    }
  }
}

export default reducer;