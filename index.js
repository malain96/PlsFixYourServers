const Twitter = require('twitter');
const Discord = require('discord.js');
const config = require('./config');

const seconds = 1000;

const discordClient = new Discord.Client();

//Twitter connection info
const twitterClient = new Twitter({
    consumer_key: config.twitter_consumer_key,
    consumer_secret: config.twitter_consumer_secret,
    access_token_key: config.twitter_access_token_key,
    access_token_secret: config.twitter_access_token_secret
});

//Time before the nex execution (time_out_negative is the number of seconds)
let nextRun = config.time_out_negative * seconds;

//Once the bot is ready
discordClient.on('ready', () => {
    //Acknowledge the connection
    console.log(`Logged in as ${discordClient.user.tag}!`);
    //Retrieve the channel where messages will be posted
    const channel = discordClient.channels.find( chan => chan.name === config.channel);
    //Check the ping every X seconds
    setInterval(() => {
        nextRun = config.time_out_negative * seconds;
        //Check the ping
        if(discordClient.ping >= config.max_ping){
            //Post a message in the channel and post a tweet
            channel.send('Sending a tweet to discord! Ping:' + discordClient.ping);
            twitterClient.post('statuses/update', {status: config.tweet_msg},  function(error) {
                if(error) throw error;
            });
            nextRun = config.time_out_positive * seconds;
        }
    }, nextRun);
});

//Login the bot
discordClient.login(config.discord_token);