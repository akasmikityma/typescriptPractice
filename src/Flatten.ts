//ask : there is a nested array i need to flatten that arry so if there is any array present as a element get that 
//array's elements pushed into the main returning array >>
//traverse the array and check if that ele is an array or just a number .. if a array then traverse the array only
//untill that array is empty >
const flatArray=(arr:number[][]):number[]=>{
    return arr.reduce((flattened, currentArray) => {
        return flattened.concat(currentArray);
    }, []);

}
const nestedArray: number[][] = [[1, 2], [3, 4, 5], [6, 7]];
const flattenedArray = flatArray(nestedArray);
console.log("Nested Array:", nestedArray);
console.log("Flattened Array:", flattenedArray);