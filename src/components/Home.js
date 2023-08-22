import React from "react";
import username from "../data/user.js"
import city from "../data/user.js"

export default function Home() {
  return (
    <div id="home">
      <h1>
        {username} is a Web Developer from {city}
      </h1>
    </div>
  );
}