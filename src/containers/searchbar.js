import React, { Component } from 'react';

export default class SearchBar extends Component {
    
  constructor(props) {
    super(props);
    this.state= { term: '' };
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event) {
    this.setState({ term: event.target.value });
  }

  //Prevent standard form submit and clear
  onFormSubmit(event) {
    event.preventDefault();

    //Fetch weather data
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          placeholder="Search a city, 5 day forecast"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}
        />
        <span className="input-gro up-btn">
          <button type="submit" className="btn btn-secondary">Button</button>
        </span>
      </form>
    );
  }
}