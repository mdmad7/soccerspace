import React, { Component } from "react";
import { connect } from "react-redux";
import {Link} from 'react-router-dom';
import logo from '../images/logo-full.svg';

// import epl from '../images/';
import {
  fetchLeagueFixtures,
  fetchLeagueTable,
  fetchTeam,
} from "../actions";

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(e) {
    this.props.dispatch(fetchLeagueTable(e.target.value));
    this.props.dispatch(fetchTeam(e.target.value));
    this.props.dispatch(fetchLeagueFixtures(e.target.value));
  }
  render() {
    return (
      <nav className="navbar navbar-light bg-light justify-content-between top-nav">
        <div className="container">
          <Link to="/" className="navbar-brand">
            <img src={logo} alt="site logo"  width="175"/>
          </Link>
          <form className="form-inline">
            <div className="">
              <select className="" onChange={this.handleSelect}>
                <option value="445">Select a league</option>
                <option value="445">Premier League</option>
                <option value="455">La Liga</option>
                <option value="452">Bundesliga</option>
                <option value="450">Ligue 1</option>
                <option value="456">Serie A</option>
              </select>
            </div>
          </form>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state,
  };
};

export default connect(mapStateToProps, null)(Navbar);
