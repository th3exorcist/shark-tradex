import { useReducer } from 'react';
import { CAPTURE, RELEASE, ADD_SHARK, ADD_SHARKS} from './actions';

const getCapturedSharks = (capturedSharks, releasedShark) =>
  capturedSharks.filter(shark => shark !== releasedShark)

const releaseShark = (releasedShark, state) => ({
  sharks: [...state.sharks, releasedShark],
  capturedSharks: getCapturedSharks(state.capturedSharks, releasedShark)
});

const getSharksList = (sharks, capturedShark) =>
  sharks.filter(shark => shark !== capturedShark)

const captureShark = (shark, state) => ({
  sharks: getSharksList(state.sharks, shark),
  capturedSharks: [...state.capturedSharks, shark]
});

const addShark = (shark, state) => ({
  sharks: [...state.sharks, shark],
  capturedSharks: state.capturedSharks
});

const addSharks = (sharks, state) => ({
  sharks: sharks,
  capturedSharks: state.capturedSharks
});

const sharkReducer = (state, action) => {
  switch (action.type) {
    case CAPTURE:
      return captureShark(action.shark, state);
    case RELEASE:
      return releaseShark(action.shark, state);
    case ADD_SHARK:
      return addShark(action.shark, state);
    case ADD_SHARKS:
      return addSharks(action.sharks, state);
    default:
      return state;
  }
};

export const useSharkReducer = () =>
  useReducer(sharkReducer, {
    sharks: [],
    capturedSharks: []
  });
