import net from "net"


const client = net.createConnection(3000 ,"localhost")

client.addListener("data",(data)=>{
    console.log(`receive data from server ${data.toString()}`)
})

setInterval(()=>{
    client.write(`${process.argv[2]}`)
},2000)