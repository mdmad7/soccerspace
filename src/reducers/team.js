let initialState = {
  team: [],
  loading: false,
  loaded: false,
  error: false,
};

const team = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_TEAM_PENDING":
      return {
        ...state,
        loading: true,
      };
    case "FETCH_TEAM_FULFILLED":
      return {
        ...state,
        loaded: true,
        team: action.payload.data,
      };

    case "FETCH_TEAM_REJECTED":
      return {
        ...state,
        error: true,
      };

    default:
      return state;
  }
};

export default team;
