import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchLeagueTable, fetchTeam, fetchLeagueFixtures } from "../actions";

import Table from "../components/table";
import LeagueFixtures from "../components/leaguefixtures";

import pl from "../images/pl.svg";
import laliga from "../images/liga.svg";
import bundesliga from "../images/bund.svg";
import serie from "../images/serie.svg";
import ligue from "../images/ligue.png";

class Home extends Component {
  componentDidMount() {
    this.props.dispatch(fetchLeagueTable(445));
    this.props.dispatch(fetchTeam(445));
    this.props.dispatch(fetchLeagueFixtures(445));
    document.title = "Soccerspace";
  }

  renderLeagueTitle(leagueTitle) {
    if (leagueTitle === "Premier League 2017/18") {
      return (
        <div className="col-12 league-title">
          <img src={pl} alt="Premier League Logo" />
          <span>Premier League</span>
        </div>
      );
    } else if (leagueTitle === "Primera Division 2017") {
      return (
        <div className="col-12 league-title">
          <img src={laliga} alt="Primera Division Logo" />
          <span>Primera Division</span>
        </div>
      );
    } else if (leagueTitle === "1. Bundesliga 2017/18") {
      return (
        <div className="col-12 league-title">
          <img src={bundesliga} alt="Bundesliga Logo" />
          <span>Bundesliga</span>
        </div>
      );
    } else if (leagueTitle === "Ligue 1 2017/18") {
      return (
        <div className="col-12 league-title">
          <img src={ligue} alt="Ligue 1 Logo" />
          <span>Ligue 1</span>
        </div>
      );
    } else if (leagueTitle === "Serie A 2017/18") {
      return (
        <div className="col-12 league-title">
          <img src={serie} alt="Serie A Logo" />
          <span>Serie A</span>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        {this.props.data.leaguefixtures.loaded
          ? <div className="container">
              <div className="row">
                {this.renderLeagueTitle(
                  this.props.data.leaguetable.leaguetable.leagueCaption
                )}
              </div>
              <nav className="nav nav-tabs" id="myTab" role="tablist">
                <a
                  className="nav-item nav-link active"
                  id="nav-table-tab"
                  data-toggle="tab"
                  href="#nav-table"
                  role="tab"
                  aria-controls="nav-table"
                  aria-expanded="true"
                >
                  Table
                </a>
                <a
                  className="nav-item nav-link"
                  id="nav-match-tab"
                  data-toggle="tab"
                  href="#nav-match"
                  role="tab"
                  aria-controls="nav-match"
                >
                  Matches
                </a>
              </nav>
              <div className="tab-content" id="nav-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="nav-table"
                  role="tabpanel"
                  aria-labelledby="nav-table-tab"
                >
                  <div className="row">
                    <div className="col-12 col-lg-8">
                      <h3 className="section-title">Table</h3>
                      <Table
                        data={this.props.data.leaguetable}
                        team={this.props.data.team}
                      />
                    </div>
                    <div className="col-12 col-lg-4 d-none d-md-none d-lg-block">
                      <h3 className="section-title">Matches</h3>
                      <LeagueFixtures
                        fixtures={this.props.data.leaguefixtures}
                        data={this.props.data.leaguetable}
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="nav-match"
                  role="tabpanel"
                  aria-labelledby="nav-match-tab"
                >
                  <div className="row">
                    <div className="col-12 col-lg-8">
                      <h3 className="section-title">Matches</h3>
                      <div className="bigger-matches-section">
                        <LeagueFixtures
                          fixtures={this.props.data.leaguefixtures}
                          data={this.props.data.leaguetable}
                        />
                      </div>
                    </div>
                    <div className="col-12 col-lg-4 d-none d-md-none d-lg-block">
                      <h3 className="section-title">Table</h3>
                      <div className="smaller-table-section">
                        <Table
                          data={this.props.data.leaguetable}
                          team={this.props.data.team}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          : <h4>Loading...</h4>}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state,
  };
};

export default connect(mapStateToProps, null)(Home);
