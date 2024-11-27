import { Attributes } from './Attributes';
import { UserProps } from './framework/Interfaces';
import {User} from './User'

const user = new User ({id: "5", name: 'john', age: 34})

//const id = attrs.get('id')
//onst age = attrs.get('age')

console.log(user.get('name'))
user.on('change', () => console.log('changement'))
user.trigger('change')
user.save()