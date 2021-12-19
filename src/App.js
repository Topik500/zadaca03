import React from "react";
import FirstNameFunction from "./components/FirstNameFunction";
import FirstNameClass from "./components/FirstNameClass";
import SecondNameFunction from "./components/SecondNameFunction";
export default class App extends React.Component {
  render() {
    return (
    <div>
      <h1>Korisnici: </h1>
      <FirstNameFunction />
      <FirstNameClass />
      <SecondNameFunction name="Marko" age="40" />
    </div>
    );
  }
 }