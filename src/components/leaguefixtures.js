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
    let uniqueMatchDay = [
      ...new Set(
        this.props.fixtures.leaguefixtures.fixtures.map(matchday => {
          return matchday.matchday;
        })
      ),
    ];
    // eslint-disable-next-line
    let uniqueDate = [];
    return (
      <div className="fixtures-table">
        {uniqueMatchDay.map(day => {
          let sameMatchDay = this.props.fixtures.leaguefixtures.fixtures.filter(
            fixture => fixture.matchday === day
          );

          return (
            <div key={day} className="matchday">
              <nav className="nav nav-tabs" id="myTab" role="tablist">
                <a className="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile">Match Day {day}</a>
              </nav>
              <div className="tab-content" id="nav-tabContent">
                <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">

                </div>
              </div>
              {(uniqueDate = [
                ...new Set(
                  sameMatchDay.map(item => {
                    return moment(item.date).format("dddd D MMMM YYYY");
                  })
                ),
              ]).map(date => {
                let sameDate = sameMatchDay.filter(
                  day => moment(day.date).format("dddd D MMMM YYYY") === date
                );

                return (
                  <div key={date} className="matchdate">
                    <table className="table table-hover">
                      <thead>
                        <tr>
                          <th colSpan="5" className="text-left">
                            {date}
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {sameDate.map(fixture => {
                          return (
                            <tr
                              key={fixture.homeTeamName + fixture.awayTeamName}
                            >
                              <td className="home-team text-right">
                                <div>
                                  {fixture.homeTeamName}
                                </div>
                              </td>
                              <td className="home-team-crest">
                                {this.renderCrest(fixture.homeTeamName)}
                              </td>
                              <td className="scores-or-time">
                                {fixture.result.goalsAwayTeam === null
                                  ? <span className="scores-time-span">
                                      <span>
                                        {" "}{moment(`${fixture.date}`).format("HH")}{" "}
                                      </span>:<span>
                                        {" "}{moment(`${fixture.date}`).format("mm")}{" "}
                                      </span>
                                    </span>
                                  : <span className="dark-span scores-time-span">
                                      <span>
                                        {" "}{fixture.result.goalsHomeTeam}{" "}
                                      </span>:<span> {fixture.result.goalsAwayTeam} </span>
                                    </span>}
                              </td>
                              <td className="away-team-crest">
                                {this.renderCrest(fixture.awayTeamName)}
                              </td>
                              <td className="away-team text-left">
                                <div>
                                  {fixture.awayTeamName}
                                </div>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    );
  }
}

export default LeagueFixtures;
