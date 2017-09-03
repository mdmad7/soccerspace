import React, { Component } from "react";
import {Link} from 'react-router-dom';

class Table extends Component {
  renderShortName(teamName) {
    let shortname = this.props.team.team.teams.find(t => {
      return t.name === teamName;
    });

    return (
      <td className="team-name-short empty-td">
        {shortname.code}
      </td>
    );
  }
  render() {
    const { leaguetable } = this.props.data;
    // console.log(this.props.team);
    if(this.props.data.error) {
      return <p>A {this.props.data.errortype} has occurred</p>
    }

    if(this.props.loading) {
      return <p>Loading...</p>
    }
    return (
      <table className="table table-responsive table-hover league-table">
        <thead>
          <tr>
            <th>Pos.</th>
            <th />
            <th className="team-name-long empty-td" />
            <th className="team-name-short empty-td" />
            <th>P</th>
            <th>W</th>
            <th>D</th>
            <th>L</th>
            <th>G</th>
            <th>GD</th>
            <th>Pts</th>
          </tr>
        </thead>
        <tbody>
          {
            leaguetable.standing.map(team => {
                let url = team._links.team.href;
                let id = url.substr(url.indexOf("s/") + 2);
                return (
                  <tr className="clubs-row" key={id}>
                    <td>
                      {team.position}
                    </td>
                    <td>
                      <img
                        width="30"
                        height="30"
                        src={team.crestURI}
                        alt={team.teamName + " crest"}
                      />
                    </td>
                    <td className="team-name-long">
                      {" "}{team.teamName}{" "}
                    </td>
                    {this.renderShortName(team.teamName)}
                    <td>
                      {team.playedGames}
                    </td>
                    <td>
                      {team.wins}
                    </td>
                    <td>
                      {team.draws}
                    </td>
                    <td>
                      {team.losses}
                    </td>
                    <td>
                      {team.goals}:{team.goalsAgainst}
                    </td>
                    <td>
                      {team.goalDifference}
                    </td>
                    <td>
                      {team.points}
                    </td>
                  </tr>
                );
              })}
        </tbody>
      </table>
    );
  }
}

export default Table;
