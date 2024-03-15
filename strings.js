const Strings = (redis) => {
    redis.set('name', 'Benny', 'EX', 5);
redis.get('name', (err, res)=>{
    console.log(res);
})

redis.get('address', (err, res)=>{
    console.log(res);
});

redis.incrby('address', 11)
redis.get ('address', (err, res)=>{
    console.log(res);
})

redis.mset('name', 'Bri', 'age', 7)
redis.mget('name', 'age', (err, res) => {
    console.log(res);
})
}
export default Strings;