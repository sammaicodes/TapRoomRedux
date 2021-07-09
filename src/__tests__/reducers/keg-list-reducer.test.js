import kegListReducer from '../../reducers/keg-list-reducer'
import * as c from "../../actions/ActionTypes"

describe(`kegListReducer`, () => {

  test(`Should return default state if there is no action type passed into the reducer`, () => {
    expect(kegListReducer({}, { type: null })).toEqual({})
  })

  let action
  const kegData = {
    name: `Belgian White`,
    brand: `Blue Moon`,
    price: `8.00`,
    alcoholContent: `5%`, 
    pintStock:`5`,
    id: 1,
  }
  
  test(`Should successfully add new keg data to masterKegList`, () => {
    const { name, brand, price, alcoholContent, pintStock, id } = kegData
    action = {
      type: c.ADD_KEG,
      name,
      brand,
      price,
      alcoholContent,
      pintStock,
      id,
    }

    expect(kegListReducer({}, action)).toEqual({
      [id]: {
        name,
        brand,
        price,
        alcoholContent,
        pintStock,
        id,
      },
    })
  })

})
