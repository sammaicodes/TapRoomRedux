import * as c from "../actions/ActionTypes"

export default (state = {}, action) => {
  const { name, brand, price, alcoholContent, pintStock, id } = action
  switch (action.type) {
    case c.ADD_KEG:
      return "idk"
    default:
      return state
  }
}


