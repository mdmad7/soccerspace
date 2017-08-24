import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchLeagueTable, fetchTeam, fetchLeagueFixtures } from "../actions";

import Table from "../components/table";
import LeagueFixtures from "../components/leaguefixtures";

class Home extends Component {
  componentDidMount() {
    this.props.fetchLeagueTable();
    this.props.fetchTeam();
    this.props.fetchLeagueFixtures();
    document.title = "League Table";
  }
  render() {
    return (
      <div className="container">
        {this.props.data.leaguefixtures.loaded
          ? <div className="row">
              <div className="col-12 col-lg-8">
                <h3 className="">League Table</h3>
                <Table
                  data={this.props.data.leaguetable}
                  team={this.props.data.team}
                />
              </div>

              <div className="col-12 col-lg-4 d-none d-md-none d-lg-block">
                <h3 className="">Fixtures</h3>
                <LeagueFixtures
                  fixtures={this.props.data.leaguefixtures}
                  data={this.props.data.leaguetable}
                />
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

const mapDispatchToProps = dispatch => {
  return {
    fetchLeagueTable: () => {
      dispatch(fetchLeagueTable());
    },
    fetchTeam: () => {
      dispatch(fetchTeam());
    },
    fetchLeagueFixtures: () => {
      dispatch(fetchLeagueFixtures());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
