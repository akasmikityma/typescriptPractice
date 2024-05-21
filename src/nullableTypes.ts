const greet=(name:string|null|undefined)=>{
    if(name){
        console.log(`hello ${name}`)
    }else{
        console.log(`hello whoever u are`);
    }
}
greet("palu");