let employee:{
    readonly id:number,
    name: string,
    retire:(date:Date)=>void
}={id:1,name:"bishal",
retire(date) {
    console.log(date)
},
}

employee.retire(new Date(2025,0,1));