import { Component } from "react";

export default function SecondNameFunction({name, age}) {
  return (
    <div>
      <h2> Ime: {name} </h2>
      <h2> Godine: {age} </h2>
    </div>
  );
}
