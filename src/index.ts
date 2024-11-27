import { User } from './User';

const john = new User({id: "9f86"})
john.fetch()

const alice = new User({name: 'Alice', age: 23})
alice.save()