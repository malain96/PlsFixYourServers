# DB-Saver

## Table of content

  * [Description](#description)
  * [Pre-requisites](#pre-requisites)
  * [Installing](#installing)
  * [Running](#running)
  * [License](#license)


## Description

This project started as a joke with my friends shortly after we had to move from [Twitch](https://www.twitch.tv/) 
to [Discord](https://discordapp.com/) as a vocal communication tool. 
The problem we had was that our Discord server was lagging quite often and we could only hear fragments of what people
were saying.
That's why one day, we joked about creating a bot that would send a tweet to Discord every time our server wasn't 
working properly and I made this joke true.

This Bot will check the ping of the server at a defined interval and send a tweet to Discord every time it's to high in 
your opinion.
 
## Pre-requisites

* [NodeJS](https://nodejs.org/en/)
* NPM - comes with NodeJS
* [A discord app token](https://discordapp.com/developers/applications/)
* [A twitter api access](https://developer.twitter.com/) 

## Installing

* Clone or download the repository 
* In a terminal, go to the project's root 
* Run `npm install` to install the dependencies
* Now you need  to create a file named _config.json_ which looks like the _[config_exemple.json](https://github.com/malain96/PlsFixYourServers/blob/master/config_exemple.json)_ file

## Running 
 
* In a terminal, go to the project's root.
* Run `npm start` and your bot will be up and running.

## License

[MIT](https://github.com/malain96/PlsFixYourServers/blob/master/LICENSE)