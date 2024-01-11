import {EventEmitter} from "events"

const emitter = new EventEmitter()
emitter.addListener("hello",(name)=>{
    console.log(`hello ${name}`)
})

emitter.emit("hello","hajir")