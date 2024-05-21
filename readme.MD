## interfaces and types 
  
   types gives some more advantages like 
   any varible that im doubtfull about ...that it can be lets say either string or Number
   so i can just say like this >>
   <!-- <    !-- type doubtFull=String | Number; --> -->

another use case of type is suppose there are two types like manager and employee
    and i want to make an object that has both the types properties >>
    i can just simply say that 
    <!-- const teamlead=Manager&Employee -->

    CHECK FOR MORE >>>

    these are the advantages of using types instead of interfaces >>

    javascript -had number.string,boolean,null,undefined,object
    typescript -has all of these and any ,unknown,never,enum,tuple

    any - implicite any type means that the variable's type is not defined properly and became any type as default behaviour .. this is an error or bad practice >>

    let user:[number,string]=[22,"bishal"];
    
    so this is like creating a array that has mixed type of values . we define all the types of each position and then give the values after that .we can push to that or do other stuff same as an array ..

    enums- helps us to create a list of related constants >>

    const enum Size {Small=1,Medium,large};
    let mySize=Size.Medium;
   