/* eslint-disable max-len */
import * as c from "../../actions/ActionTypes"
import formVisibleReducer from '../../reducers/form-visible-reducer'

describe(`formVisibleReducer`, () => {
  
  test(`Should return default state if no action type is recognized`, () => {
    expect(formVisibleReducer(false, { type: null })).toEqual(false)
  })
  
})
