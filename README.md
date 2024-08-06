# nigeria-states-lga-select

`nigeria-states-lga-select` is a simple JavaScript library for retrieving Nigerian states and their respective Local Government Areas (LGAs). 

## Installation

You can install the package via npm:

```bash
npm install nigeria-states-lga-select
```



## Usage
Import the library in your project and use the getStates and getLgas functions to retrieve states and LGAs.

Example

```bash
const { getStates, getLgas } = require('nigeria-states-lga-select');

// Get list of all Nigerian states
const states = getStates();
console.log(states);

// Get list of LGAs for a specific state
const abiaLgas = getLgas('Abia');
console.log(abiaLgas);

```






