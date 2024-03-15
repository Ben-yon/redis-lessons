const Lists = (redis) => {
    redis.rpush('planets', 'venus','Earth','mars', 'jupiter');
    
    redis.rpush('planets', 'saturn');

    redis.lpush('planets', 'mercury');
    redis.rpop('planets')

    redis.lrange('planets', 0, -1 , (rerr, res) => {
        console.log(res);
    })

}
export default Lists;