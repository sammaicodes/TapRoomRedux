/* eslint-disable max-len */
import * as actions from "../../actions"
import * as c from "../../actions/ActionTypes"

describe(`Tap Room actions`, () => {

  it(`addKeg should create ADD_KEG action`, () => {
    expect(actions.addKeg({ name: `Belgian White`, brand: `Blue Moon`, price: `8.00`, alcoholContent: `5%`, pintStock:`5`, id: 1 })).toEqual({
      type: c.ADD_KEG,
      name: `Belgian White`,
      brand: `Blue Moon`,
      price: `8.00`,
      alcoholContent: `5%`, 
      pintStock:`5`,
      id: 1,
    })
  })

  it(`toggleForm should create TOGGLE_FORM action`, () => {
    expect(actions.toggleForm()).toEqual({
      type: c.TOGGLE_FORM,
    })
  })
  
})
