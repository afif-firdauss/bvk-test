const initialState = {
  loading: false,
  data: [],
}

// eslint-disable-next-line import/no-anonymous-default-export
const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    default:
      return state
  }
}

export default reducer;