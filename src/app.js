var React = require("react");
var ReactDOM = require("react-dom");

//alternative way to use react or install it
import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <div>
    <h1>Hello Tobi</h1>
    <ul>
      <b>
        <li>Zainab</li>
        <li>Zee</li>
        <li>Sully</li>
      </b>
    </ul>
    <p> This is just a simple text</p>
  </div>,
  document.getElementById("root"),
);

// defining constants and variables using react and jsk to put html inside ReactDOM. TO DO THIS PUT WHAT EVER CONST OR VARIABLE INTO "{}"
const name = "Tobi";
const num = 2;

ReactDOM.render(
  <div>
    <h1>Hello {name}</h1>
    <ul>
      <b>
        <li>Zainab</li>
        <li>Zee</li>
        <li>Sully</li>
      </b>
    </ul>
    <p> your lucky number is {num}</p>
  </div>,
  document.getElementById("root"),
);

const na = "Tobi";
const rnums = Math.floor(Math.random() * 100);

ReactDOM.render(
  <div>
    <h1>Hello {na}</h1>
    <ul>
      <b>
        <li>Zainab</li>
        <li>Zee</li>
        <li>Sully</li>
      </b>
    </ul>
    <p> your lucky number is {rnums}</p>
  </div>,
  document.getElementById("root"),
);

// adding multiple names of variables inside a js inside a html inside a js
const fname = "Tobi";
const lname = "Ogunleye";
const rnum = Math.floor(Math.random() * 100);

ReactDOM.render(
  <div>
    <h1>
      Hello {fname} {lname}!
    </h1>

    <h2>Hello {fname + " " + lname}!</h2>
    <h3>Hello {`${fname} ${lname}`}!</h3>
    <ul>
      <b>
        <li>Zainab</li>
        <li>Zee</li>
        <li>Sully</li>
      </b>
    </ul>
    <p> your lucky number is {rnum}</p>
  </div>,
  document.getElementById("root"),
);
//use method one or method two or three to definie your variables

//CREATING A REACT APPLICATION FOR ASCERTAINING THE CURRENT YEAR OR DATE
const cname = "Tobi";
// displaying a current date
let today = new Date().toISOString().slice(0, 4);
// alternative method
const time = new Date();
const year = time.getFullYear();
const date = time.getDate();
const bmonth = time.getMonth();
const month = bmonth + 1;

// alternative month
var m_names = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

var n = m_names[time.getMonth()];

ReactDOM.render(
  <div>
    <p>Creadted by {cname}</p>
    <p>Copyright by {today}</p>
    <p>
      Today's date is {n}({month}) {`${date}  ${year}`}.
    </p>
  </div>,
  document.getElementById("root"),
);
console.log(n);