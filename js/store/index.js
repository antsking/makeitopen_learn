/**
 * Created by Evan on 25/09/2016.
 */
import { createStore } from 'redux'
import appReducers from '../reducers/index'
let store = createStore(appReducers)