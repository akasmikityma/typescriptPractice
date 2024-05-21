// let employee:{
//     readonly id:number,
//     name: string,
//     retire:(date:Date)=>void
// }={id:1,name:"bishal",
// retire(date) {
//     console.log(date)
// },
// }
type Employee={
    readonly id:number,
    name: string,
    retire:(date:Date)=>void
}
let employee:Employee={id:1,name:"bishal",
retire(date) {
    console.log(date)
},
}

employee.retire(new Date(2025,0,1));

//this is all good untill we need to make another employe having the same atttributes ..we would have to do all the work again >>
// so just make a type alias before the declaration of the employees >>