import axios from "axios";

export const fetchLeagueTable = () => {
  return {
    type: "FETCH_LEAGUETABLE",
    payload: Promise.resolve(
      axios({
        method: "get",
        baseURL: "http://api.football-data.org/v1/",
        url: "competitions/445/leagueTable",
        headers: { "X-Auth-Token": "e3d985631e694d80a3db0367fb71dc3c" },
      })
    ),
  };
};

export const fetchTeam = () => {
  return {
    type: "FETCH_TEAM",
    payload: Promise.resolve(
      axios({
        method: "get",
        baseURL: "http://api.football-data.org/v1/",
        url: `competitions/445/teams`,
        headers: { "X-Auth-Token": "e3d985631e694d80a3db0367fb71dc3c" },
      })
    ),
  };
};

export const fetchLeagueFixtures = () => {
  return {
    type: "FETCH_LEAGUE_FIXTURES",
    payload: Promise.resolve(
      axios({
        method: "get",
        baseURL: "http://api.football-data.org/v1/",
        url: "competitions/445/fixtures",
        headers: { "X-Auth-Token": "e3d985631e694d80a3db0367fb71dc3c" },
      })
    ),
  };
};
