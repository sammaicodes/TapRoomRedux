import * as c from "../actions/ActionTypes"

export default (state = {}, action) => {
  const { name, brand, price, alcoholContent, pintStock, id } = action
  switch (action.type) {
    case c.ADD_KEG:
      return { ...state,
        [id]: {
          name,
          brand,
          price,
          alcoholContent,
          pintStock,
          id,
        } }
    default:
      return "idk"
  }
}


