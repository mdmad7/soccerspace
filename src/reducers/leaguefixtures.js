let initialState = {
  leaguefixtures: [],
  loading: false,
  loaded: false,
  error: false,
};

const leaguefixtures = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_LEAGUE_FIXTURES_PENDING":
      return {
        ...state,
        loading: true,
      };
    case "FETCH_LEAGUE_FIXTURES_FULFILLED":
      return {
        ...state,
        loaded: true,
        leaguefixtures: action.payload.data,
      };

    case "FETCH_LEAGUE_FIXTURES_REJECTED":
      return {
        ...state,
        error: true,
      };

    default:
      return state;
  }
};

export default leaguefixtures;
