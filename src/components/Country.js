import React, { Component } from "react";

export default class Country extends Component {
  render() {
    const { name, capital, currencies, emoji, native } = this.props;
    return (
      <>
        <div>Country : {name}</div>
        <div>Capital : {capital}</div>
        <div>Currency : {currencies}</div>
        <div>Emoji : {emoji}</div>
        <div>Native : {native}</div>
      </>
    );
  }
}
