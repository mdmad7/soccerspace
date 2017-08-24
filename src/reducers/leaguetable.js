let initialState = {
  leaguetable: [],
  loading: false,
  loaded: false,
  error: false,
  errortype: null
};

const leaguetable = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_LEAGUETABLE_PENDING":
      return {
        ...state,
        loading: true,
      };
    case "FETCH_LEAGUETABLE_FULFILLED":
      return {
        ...state,
        loaded: true,
        leaguetable: action.payload.data,
      };

    case "FETCH_LEAGUETABLE_REJECTED":
      return {
        ...state,
        error: true,
        errortype: action.payload.message
      };

    default:
      return state;
  }
};

export default leaguetable;
