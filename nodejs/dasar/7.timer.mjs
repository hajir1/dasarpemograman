// menggunakan promises
import timers from "timers/promises"


console.log(new Date())
const name =await timers.setTimeout(5000 ,"hajir")
console.log(new Date())
console.log(name)


for await(const time of timers.setInterval(2000)){
    console.log(new Date())
}

// menggunakan callback
setTimeout(()=>{
    console.log("hello")
},2000)