export const sayHelloAsync =(name)=>{
    return new Promise((resolve ,rejected)=>{
        setTimeout(() => {
            if(name){
                resolve(`hello ${name}`)
            }else{
                rejected("nama tidak ada")
            }
        }, 1000);
    })
}