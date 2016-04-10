import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Toolbar from './app/toolbar';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import ActionTypes from './app/action_types';

const Reducers = {
  zoomLevel: (state = 1, action) => {
    console.log(`reducers zoom level`);
    switch (action.type) {
      case ActionTypes.SET_ZOOM_LEVEL:
        return action.zoomLevel || 1;
      case ActionTypes.RESET_ZOOM:
        return 1;
      default:
        return state;
    }
  },

  panPosition: (state = { x: 0, y: 0 }, action) => {
    switch (action.type) {
      case ActionTypes.PAN:
        return action.panPosition;
      case ActionTypes.PAN_START:
      case ActionTypes.PAN_STOP:
      default:
        return state;
    }
  }
};

const panZoom = combineReducers({
  zoomLevel: Reducers.zoomLevel,
  panPosition: Reducers.panPosition
});

ReactDOM.render(
  <Provider store={createStore(panZoom)}>
    <Toolbar />
  </Provider>,
  document.getElementById('root')
);