const checkforEvenNumbers=(nums:number[]=[1,2,4,5,6,8]):number[]=>{
    let res:number[]=[];
    nums.map((num)=>{
        if(num%2===0){
            res.push(num);
        }
    })
   return res;
}

console.log(checkforEvenNumbers());
