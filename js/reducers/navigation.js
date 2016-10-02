/**
* Created by Evan on 25/09/2016.
*/
'use strict'

import {
  COVERAGE_TAB,
  SWITCH_TAB,
} from '../actions/navigation';

const initialState = {
  tab:COVERAGE_TAB
};


function navigation(state = initialState, action) {
  if (action.type === SWITCH_TAB) {
    return {...state, tab: action.tab};
  }
  return state;
}

module.exports = navigation;
