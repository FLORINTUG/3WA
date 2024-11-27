import { Attributes } from "./Attributes";
import { Eventing } from "./Eventing";
import { Sync } from "./Sync";
import { UserProps } from "./framework/Interfaces";


export class User {
    private eventing: Eventing = new Eventing();
    private sync: Sync<UserProps> = new Sync<UserProps>('http://localhost:3001/users')
    private attributes: Attributes<UserProps>

    constructor(attrs: UserProps) {
        this.attributes = new Attributes<UserProps>(attrs)
    }

    get on() {
        return this.eventing.on
    }
    
    get trigger() {
        return this.eventing.trigger
    }

    get get () {
        return this.attributes.get
    }

    set(updateDate:UserProps) : void {
        this.attributes.set(updateDate)
        this.eventing.trigger('change')
    }

    fetch() {
        const id = this.get('id')
        if(!id) throw new Error('No ID provided')
            this.sync.fetch(id)
        .then(response => {
            this.set(response.data)
        })
    }

    save():void {
        this.sync.save(this.attributes.getAllProps())
        .then(response => {
            globalThis.trigger('save')
        })
    }
}