const Sets = (redis) => {
    redis.sadd('groceries:fruits', 'mangoes', 'pineapples', 'apples');

    redis.sunionstore('groceries:fruits with seeds', 'groceries:fruits');

    redis.smembers('groceries:fruits', (err, res) => {
        console.log(res);
    });
}

export default Sets;