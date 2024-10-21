let studentNames = ['kishore','surya','mani','santhosh']
console.log("Students Name : ");
console.log(studentNames);

// Insert an element at end
studentNames.push('siva');
console.log('New element added in the end : ');
console.log( studentNames);

// Insert an element at front
studentNames.unshift('vijay');
console.log('New element added in the end : ');
console.log(studentNames);

// Delete an element at end
studentNames.pop();
console.log('An element deleted in the end : ');
console.log(studentNames);

// Delete an element at front
studentNames.shift();
console.log('An element deleted in the front : ');
console.log(studentNames);

// Joining the array
let joinElement = studentNames.join(',');
console.log('Array to String : ');
console.log(joinElement);


// Splicing & slicing

// Splicie
// To remove(Delete) an element specificly & it will change the execting array
studentNames.splice(1,1);
console.log('a student name deleted from a specific place');
console.log(studentNames);

studentNames.splice(4,1,'kumar');
console.log('a student name added to the specific place');
console.log(studentNames);

studentNames.splice(4,1,'deva','ajith');
console.log('Two students name added to the specific place');
console.log(studentNames);

// Slice
// It will take a portion of a array & will not change the execit array

let newName = studentNames.slice(1,3);
console.log('New Names With End');
console.log(newName);

let newNameWithoutEnd = studentNames.slice(2);
console.log('New Names Without End');
console.log(newNameWithoutEnd);

// Find an element in array

let findElement = studentNames.includes('somu');
console.log(findElement);

// Loops in Array

// Foreach

// Arrow function
console.log("Arrow Function");
console.log('Students Name : ');  
studentNames.forEach((value,index) =>{
    console.log( ' Name :' +value + ' Index :'+index);
})

// Anonymous Function
console.log("Anonymous Function");
studentNames.forEach((value1,value2) =>console.log('Index : '+value2+ ' Name : '+value1));


// MAP function

let mapStudentName = studentNames.map(function(value){
    return  value ;    
})
console.log(mapStudentName);

let studentIndex = studentNames.map((stdNAme,index) => index);
console.log(studentIndex);

        // array of object
        
 const friendsName = [
    {
        name : 'manoj',
        age :  25,
        native : 'chennai' 
    },
    {
        name : 'nandha kumar',
        age : 20,
        native : 'Dharmapuri' 
    },
    {
        name : 'rethick',
        age : 25,
        native : 'coimbatore' 
    },
];
 console.log(friendsName);
 

let listOfFriend = friendsName.map(name=>{
    return name.name;
})
console.log(listOfFriend);

let friendsList = friendsName.map(list=>list);
console.log(friendsList);

        // printing the name by age
let friendsAge = friendsName.map(ages=>{
    if(ages.age==25)
        return ages.name ;
})
console.log(friendsAge);


// Filter function
// Filter return an array which satisfies the condition

let evenNames = friendsName.filter(function(value1,value2){
    if (value2 %2==0)
    {
        return value1;
    }
})
console.log(evenNames);


let newfriend = friendsName.filter(nameage =>{
    if(nameage.age >20)
        return nameage;
    // return nameage.age > 20;
})

console.log(newfriend);



// Some Function

// It will return true if any of the condition true (or) satisfies
// In the given ex one condition is true so it returns ture

let eligibel = friendsName.some(ages =>
        {
            if (ages.age >17)
                return ages;
        }
)
console.log(eligibel);


// Every function

// All the elements should satisfy the conditions
// In the given ex the given condition is not satisfies so it returns false

let everyone = friendsName.every(value =>value.age >22)
console.log(everyone);


// Basic functions

let newArray = [1,2,3,4]
console.log(newArray);

// reverse 

let reverseArray = newArray.reverse();
console.log(reverseArray);

// Reduce 
//  to add the valuse in the array
let addedArray = newArray.reduce((value,index) =>value+index,0);
console.log(addedArray);

// Fill

let filledArray = newArray.fill(25,2,4)
console.log(filledArray);