//gets a number as the parameter and returs boolean as output ..
const isVoter=(x:number)=>{
    if(x>=18){
        return true;
    }else{
        return false;
    }
}
const result=isVoter(23);
console.log(result);