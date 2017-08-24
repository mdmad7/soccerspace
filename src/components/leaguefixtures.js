import React, { Component } from "react";
import moment from "moment";

class LeagueFixtures extends Component {
  renderCrest(selectedteam) {
    let selectTeam = this.props.data.leaguetable.standing.find(
      x => x.teamName === selectedteam
    );
    if (selectTeam !== undefined) {
      return (
        <img
          src={selectTeam.crestURI}
          alt={selectTeam.teamName + " logo"}
          width="20"
          height="20"
        />
      );
    } else {
      console.log("selectTeam is Undefined");
    }
  }

  render() {
    let uniqueDate = [
      ...new Set(
        this.props.fixtures.leaguefixtures.fixtures.map(item =>
          moment(item.date).format("dddd D MMMM YYYY")
        )
      ),
    ];

    // let uniqueMatchDay = [
    //   ...new Set(
    //     this.props.fixtures.leaguefixtures.fixtures.map(match => match.matchday)
    //   ),
    // ];

    console.log(uniqueDate);
    return (
      <div>
        {/* {uniqueDate.map(date => {
          let sameFixtures = this.props.fixtures.leaguefixtures.fixtures.filter(
            x => moment(x.date).format("dddd D MMMM YYYY") === date
          );
          return (
            <div key={date}>
              <table className="table table-responsive table-hover">
                <thead>
                  <tr>
                    <th colSpan="5" className="text-left">
                      {date}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {sameFixtures.map(fixture => {
                    return (
                      <tr key={fixture.homeTeamName + fixture.awayTeamName}>
                        <td className="right-align">
                          {fixture.homeTeamName}
                        </td>
                        <td>
                          {this.renderCrest(fixture.homeTeamName)}
                        </td>
                        <td>
                          {fixture.result.goalsAwayTeam === null
                            ? <span className="dark-span">
                                <span>
                                  {" "}{moment(`${fixture.date}`).format(
                                    "HH"
                                  )}{" "}
                                </span>:<span>
                                  {" "}{moment(`${fixture.date}`).format(
                                    "mm"
                                  )}{" "}
                                </span>
                              </span>
                            : <span className="dark-span">
                                <span> {fixture.result.goalsHomeTeam} </span>:<span> {fixture.result.goalsAwayTeam} </span>
                              </span>}
                        </td>
                        <td>
                          {this.renderCrest(fixture.awayTeamName)}
                        </td>
                        <td className="left-align">
                          {fixture.awayTeamName}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          );
        })} */}
      </div>
    );
  }
}

export default LeagueFixtures;
