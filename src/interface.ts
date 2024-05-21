interface User{
    firstname:"bishal",
    lastname:"maity",
    age:22
}

const isLegal=(user:User)=>{
   user.age>=18?true:false
}