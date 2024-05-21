type Customer={
    birthDay:Date
}
const getCustomer=(id:number):Customer|null|undefined=>{
    return id===0?null:{birthDay:new Date};
}

let cust1=getCustomer(1);

console.log(cust1?.birthDay);

//this . after the ? is optional property access operator
//firstly cust1 is checked then only the property after the . is checked >>
//so if the cust1 is null valued then the log is null but in other cases the log is the new Date the system creates>>