import * as c from "./ActionTypes"

export const addKeg = keg => {
  const { name, brand, price, alcoholContent, pintStock, id } = keg
  return {
    type: c.ADD_KEG,
    name: `Belgian White`,
    brand: `Blue Moon`,
    price: `8.00`,
    alcoholContent: `5%`, 
    pintStock:`5`,
    id: 1,
  }
}

export const toggleForm = () => ({
  // type: c.TOGGLE_FORM,
})
