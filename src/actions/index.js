import axios from "axios";

export const fetchLeagueTable = league => {
  return {
    type: "FETCH_LEAGUETABLE",
    payload: Promise.resolve(
      axios({
        method: "get",
        baseURL: "https://api.football-data.org/v1/",
        url: `competitions/${league}/leagueTable`,
        headers: { "X-Auth-Token": "e3d985631e694d80a3db0367fb71dc3c" },
      })
    ),
  };
};

export const fetchTeam = league => {
  return {
    type: "FETCH_TEAM",
    payload: Promise.resolve(
      axios({
        method: "get",
        baseURL: "https://api.football-data.org/v1/",
        url: `competitions/${league}/teams`,
        headers: { "X-Auth-Token": "e3d985631e694d80a3db0367fb71dc3c" },
      })
    ),
  };
};

export const fetchLeagueFixtures = league => {
  return {
    type: "FETCH_LEAGUE_FIXTURES",
    payload: Promise.resolve(
      axios({
        method: "get",
        baseURL: "https://api.football-data.org/v1/",
        url: `competitions/${league}/fixtures`,
        headers: { "X-Auth-Token": "e3d985631e694d80a3db0367fb71dc3c" },
      })
    ),
  };
};
