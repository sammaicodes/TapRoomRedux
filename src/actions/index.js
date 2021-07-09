import * as c from "./ActionTypes"

export const addKeg = keg => {
  const { name, brand, price, alcoholContent, pintStock, id } = keg
  return {
    type: c.ADD_KEG,
    name,
    brand,
    price,
    alcoholContent, 
    pintStock,
    id,
  }
}

export const toggleForm = () => ({
  type: c.TOGGLE_FORM,
})
