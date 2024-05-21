//given a bunch of users i am asked to return the name of the user that is underage or notavoter 
interface Voter {
    name: string;
    age: number;
}

const askVoterOrNot = (users: Voter[])=> {
    const underageUser = users.find(user => user.age < 18);
    if (underageUser) {
        return underageUser.name;
    } else {
        return undefined; // Return undefined if no underage user is found
    }
}

// Example usage:
const users: Voter[] = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 16 },
    { name: "Charlie", age: 30 }
];

const underageName = askVoterOrNot(users);
if (underageName) {
    console.log(`The first underage user found is: ${underageName}`);
} else {
    console.log("No underage users found.");
}
