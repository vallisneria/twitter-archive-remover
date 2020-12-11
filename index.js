const Twitter = require('twitter');
const fs = require('fs')
require("dotenv").config();

let client = new Twitter({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});

async function main() {
    let tweets = JSON.parse(fs.readFileSync('./tweet.json'));
    let delete_tweet_ids = tweets.map(tweet => tweet.tweet.id_str);

    for (const i of delete_tweet_ids) {
        try {
            await delete_tweet(i);
            console.log(`DELETE ${i}`);
        } catch (err) {
            console.error(`DELETE FAIL ${i}`);
        }
    }
}

function delete_tweet(tweet_id) {
    return new Promise((resolve, reject) => {
        client.post(`statuses/destroy/${tweet_id}`, {}, (err, res) => {
            if (err) {
                reject(err);
            } else {
                console.log(`DELETE ${tweet_id}`);
                resolve(res);
            }
        });
    });
}

async function sleep(ms) {
    return new Promise((resolve, reject) => {
        try {
            global.setInterval(resolve, ms);
        } catch (err) {
            reject(err);
        }
    });
}

main();
