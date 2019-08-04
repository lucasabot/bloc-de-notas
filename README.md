# UtilityGO! Energy Simulator Metrogas
![UtilityGOEnergySimulator](http://funkyimg.com/i/2NEtb.png)

![WidergyWeb](https://img.shields.io/badge/WIDERGY-WEB-00d564.svg)
 [![CircleCI](https://circleci.com/gh/widergy/UtilityGO-Energy-Simulator/tree/master.svg?style=svg&circle-token=f207aef04d22a8ee8f9f4dd19e2c24aebe82fc76)](https://circleci.com/gh/widergy/UtilityGO-Energy-Simulator/tree/master)

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

In [this file](docs/README.md) you will find useful documentation about setting up, running and extending this project.
You can find the most recent version of this guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).


## Folder Structure

The component division and files/folders structure is created following [this proposal](https://gist.github.com/ryanflorence/daafb1e3cb8ad740b346)

## Config

You need a file named `.env` in the project rootpath with the following variables:

```
REACT_APP_ENV=local
REACT_APP_API_BASE_URL=http://private-4a2ff-metrotexts.apiary-mock.com
REACT_APP_WEB_TITLE=METROGAS - Simulador de consumo
REACT_APP_FAVICON_URL=https://s3.amazonaws.com/utilitygo-energy-simulator-assets-dev/metrogas/favicon.png
REACT_APP_META_DESCRIPTION=Simulá tu consumo
REACT_APP_UTILITY_ID=25
SASS_PATH=src/scss/variables
```

## Dev tools

This project is already configured to take advantadge of the following tools:
- [React Dev Tools](https://github.com/facebook/react-devtools)
- [Redux Dev Tools](https://github.com/gaearon/redux-devtools)

We strongly recommended installing the browser extensions and use them during development.
