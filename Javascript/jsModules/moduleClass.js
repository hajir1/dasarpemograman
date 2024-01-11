class SayHello{
    constructor(names){
        this.names = names
    }
    sayhello(names){
        console.log(`Hello ${names} saya ${this.names}`)
    }
}


// default export
class Manager extends SayHello{
    constructor(names){
        super(names)
    }
    sayhello(names){
        console.log(`Hello ${names} saya ${this.names}`)
    }
}
const names = "ucup Surucup"





// bisa ditambahkan Alias
export{Manager,names,SayHello}