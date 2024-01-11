import {Console} from "console"
import fs from "fs"
const file = fs.createWriteStream("console.txt")
const log = new Console({
    stdout :file,
    stderr:file
})

log.info("hello hajir")
log.error("error")
const data ={
    firtname :"Usam",
    lastname :"muhajir"
}
log.table(data)