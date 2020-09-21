# Soccer Stats

## Table of Contents

1. [Overview](#overview)
2. [Features](#features)
3. [Built With](#built-with)
4. [Getting Started](#getting-started)
5. [License](#license)
6. [Contributing](#contributing)
7. [Contact](#contact)
8. [Acknowledgements](#acknowledgements)


## Overview
<p align="center" height="200"><img src="https://i.imgur.com/GMB74Ka.png"></p>
<p>Soccer Stats allows you to search, follow, and track any club around the world for the 2020 / 2021 season. No longer do you need to jump around from club website to club website to find your favorite team's latest fixtures, results, team rosters, and more! By using real-time statistics pulled directly via API-Football, you can search for any club across the globe, add them to your favorites list, and browse their latest statistics!</p>

## Features

### Add & Remove Teams
<p><img src="https://media.giphy.com/media/7Eh9Ybna9Gw9NwQKDl/giphy.gif"></p>

Quickly access your followed club's information by adding them to your <b>My Clubs</b> list. To add a soccer club to your list, simply search for the club via the [Search Countries & Leagues](#search-countries--leagues) feature, then click on the club displayed in the current league table. The club will automatically appear in your collection list, allowing for easier access to their information. Add as many clubs as you like - there is no limit! If you no longer wish to track a club, you can remove it from your list by clicking on the corresponding <b>remove</b> button.

---

### Search Countries & Leagues
<p><img src="https://media.giphy.com/media/q6vKDPvdgwUktIXuqz/giphy.gif"></p>

You can search for any tracked club across the globe by using the <b>countries</b> & <b>leagues</b> dropdown menus located above the league table component. First, select a country you would like to explore from the countries dropdown. Once a country is selected, all available leagues for that country will display in the league dropdown menu. After making your selections, the latest table results will appear below; from there, you can start adding clubs to your list and browse their latest statistics. 
<p><b>Pro-tip:</b> You can also type directly into the search dropdowns to filter your criteria faster!</p>

---

### Club Fixtures & Player Statistics
<p><img src="https://media.giphy.com/media/lLESmb4K6uoGazEjYA/giphy.gif"></p>

After selecting a team from the league table or My Clubs list, all the information for that club will appear below. You can explore the club's direct information: name, country, stadium, and more, as well as all upcoming fixtures and current player rosters. Scroll through the fixtures and players lists to see more information. To see the specific stats for an individual player in the squad, simply click on that player's name. The most recent statistics will appear in the <b>player highlight</b> component to the right of the player's list. Here you can see all the players statistics for both club and country (country only displays if they are an international player).

---

## Built With

Soccer Stats is built with the following technologies:
* [React](https://reactjs.org/)
* [Node.js](https://nodejs.org/en/)
* [Express](https://expressjs.com/)
* [MongoDB](https://www.mongodb.com/)
* [API-Football](https://www.api-football.com/)

## Getting Started

### Prerequisites

Node.js and npm are required in order to quickly get up and running with this project. Lukily, npm is distributed with Node.js - which means that when you download Node.js, you automatically get npm installed on your computer! You can install Node.js [HERE](https://nodejs.org/en/).

Soccer Stats uses MongoDB for its datastorage of recent API calls. You can download the latest version of MonogoDB [HERE](https://www.mongodb.com/try/download/community)

### Installation

1. Get a free API-Football key [HERE](https://rapidapi.com/api-sports/api/api-football/pricing)
2. Clone the repo
```sh
git clone https://github.com/Matt-Wigg/soccer-stats.git
```
3. Install npm packages
```sh
npm install
```
4. Rename the file `RENAME_ME_CONFIG.JS` inside server/database to `config.js` and add your MongoDB username, password. <br>`ip` is only required if your MongoDB is on an instance (AWS/EC2 for example).
```JS
module.exports = {
  username: 'USERNAME',
  password: 'PASSWORD',
  ip: 'IP_ADDRESS',
};
```
5. Rename the file `RENAME_ME_CONFIG.JS` inside server/controllers to `config.js` and add your API-FOOTBALL Host key and API key.
```JS
module.exports = {
  host: 'HOSTKEY',
  apiKey: 'APIKEY',
};
```
6. Run the following commands:
```sh
npm run bundle
npm run start
```
## License

Distributed under the MIT License.

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Contact

Matthew Wigglesworth - [LinkedIn](https://www.linkedin.com/in/matt-wigg/) - m.p.wigglesworth@gmail.com

Project Link: [https://github.com/Matt-Wigg/soccer-stats/](https://github.com/Matt-Wigg/soccer-stats/)

## Acknowledgements

* [React-Select](https://react-select.com/home)
* [Styled-Components](https://styled-components.com/)
* [Axios](https://github.com/axios/axios)
* [Google Fonts](https://fonts.google.com/)
