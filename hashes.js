const Hashes = (redis) => {
    redis.hmset('user:450', 'firstName', 'Jeremy', 'lastname', 'Adzovi');
    redis.hmset('user:450', 'address', 890);
    redis.hincrby('user:450', 'address', 25);
    redis.hgetall('user:450', (err, result) => {
        console.log(result);
    });
}

export default Hashes;