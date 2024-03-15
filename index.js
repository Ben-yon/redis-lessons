import Redis from 'ioredis';
import Strings from './strings';
import Hashes from './hashes';
import Lists from './lists';
import Sets from './sets';
import SortedSet from './sorted_set';

const redis = new Redis({ password: 'great1234'});

Strings(redis);
Hashes(redis);
Lists(redis);
Sets(redis);
SortedSet(redis);