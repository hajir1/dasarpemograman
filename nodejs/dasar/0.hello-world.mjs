import os from "os"
import process from "process"
// ada fitur REPL
console.table(os.cpus())
console.table(os.freemem())


console.log(process.version)
// console.log(process.env)
console.table(process.argv)