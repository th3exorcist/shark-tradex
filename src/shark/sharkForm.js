import React, { createContext } from 'react';
import { useSharkReducer } from './useSharkReducer';
import { CAPTURE, RELEASE, ADD_SHARK, ADD_SHARKS } from './actions';

const SharkContext = createContext();

const SharkProvider = (props) => {
  const [state, dispatch] = useSharkReducer();
  const { sharks, capturedSharks } = state;

  const capture = (shark) => () => dispatch({ type: CAPTURE, shark});
  const release = (shark) => () => dispatch({ type: RELEASE, shark });
  const addShark = (shark) => dispatch({ type: ADD_SHARK, shark });
  const addSharks = (sharks) => dispatch({ type: ADD_SHARKS, sharks });

  const providerValue = {
    sharks,
    capturedSharks,
    capture,
    release,
    addShark,
    addSharks
  };

  return (
    <SharkContext.Provider value={providerValue}>
      {props.children}
    </SharkContext.Provider>
  )
};

export { SharkContext, SharkProvider };
