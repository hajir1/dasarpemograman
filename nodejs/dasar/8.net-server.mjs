import net from "net"

const server = net.createServer((client)=>{
    console.log("client connected")
    client.addListener("data",(data)=>{
        console.log(`recieve data from client ${data.toString()}`)
        client.write(`hello ${data.toString()}`)
    })
})

server.listen(3000 ,"localhost")