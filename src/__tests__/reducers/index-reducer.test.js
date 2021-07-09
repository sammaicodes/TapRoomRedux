/* eslint-disable max-len */
import { createStore } from 'redux'
import rootReducer from '../../reducers/index'
import formVisibleReducer from '../../reducers/form-visible-reducer'
import kegListReducer from '../../reducers/keg-list-reducer'
import * as c from "../../actions/ActionTypes"

const store = createStore(rootReducer)

describe(`rootReducer`, () => {
  test(`Should return default state if no action type is recognized`, () => {
    expect(rootReducer({}, { type: null })).toEqual({
      masterKegList: {},
      formVisibleOnPage: false,
    })
  })
 
})
