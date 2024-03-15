const SortedSet = (redis) => {
    redis.zadd('rocket', 1969, 'Apollo 11', 1998, 'Deep space 1', 2008, 'falcon 1');

    redis.zrange('rocket', 0, -1, 'withscores', (err, res) => {
        console.log(res);
    });

    redis.zrevrange('rocket', 0, -1, 'withscores', (err, res) => {
        console.log(res);
    });
}
export default SortedSet;