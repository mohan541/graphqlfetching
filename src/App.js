import "./App.css";
import axios from "axios";
import * as Constants from "./constants";

import React, { Component } from "react";
import Country from "./components/Country";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: [],
      searchCountry: "",
      filteredCountries: [],
    };
  }
  componentDidMount() {
    this.fetchData();
  }
  fetchData = async () => {
    const queryResult = await axios.post(Constants.GRAPHQL_API, {
      query: Constants.GET_COUNTRIES_QUERY,
    });
    const result = queryResult.data.data;
    this.setState({
      countries: result.countries,
      filteredCountries: result.countries,
    });
  };
  handleSearchCountry = (e) => {
    const searchCountry = e.target.value;
    this.setState({ searchCountry }, () => {
      this.filterCountries();
    });
  };

  filterCountries = () => {
    const { countries, searchCountry } = this.state;
    const filtered = countries.filter((country) =>
      country.name.toLowerCase().includes(searchCountry.toLowerCase())
    );
    this.setState({ filteredCountries: filtered });
  };

  render() {
    const { searchCountry, filteredCountries } = this.state;
    return (
      <div className="countries-list">
        <h1>List of Countries</h1>
        <form className="form-field">
          <input
            type="text"
            name="search-country"
            id="search-country"
            placeholder="Search Country here"
            value={searchCountry}
            onChange={this.handleSearchCountry}
          />
        </form>
        <ul className="clist">
          {filteredCountries.map((eachCountry) => (
            <li key={eachCountry.code} className="itemslist">
              <Country
                name={eachCountry.name}
                capital={eachCountry.capital}
                currencies={eachCountry.currencies}
                emoji={eachCountry.emoji}
                native={eachCountry.native}
              />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
