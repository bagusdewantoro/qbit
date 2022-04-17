export const addItem = data => {
  return {
    type: "ADD",
    payload: data
  };
};

export const updateItem = id => {
  return {
    type: "UPDATE",
    payload: id
  }
};
