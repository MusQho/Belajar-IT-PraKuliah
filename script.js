// const creates a variable whose value cannot be changed later
const nameDeveloper = "MUH. DHUHA QOLBY TAQIYYA";
// let crates a variable whose value can be change later
let clickCount = 0;
let isReadyForUS = true;

// create a array by ending []
let projectTasks = [];

let workHours = 0;
const hourlyRate = 20;

const button = document.getElementById("countButton");
const cost = document.getElementById("totalCost");

// as a reuseable block of code to perform a spesific task
function updateInterface(){
    const costTotal = workHours * hourlyRate
    cost.innerText = "$" + costTotal
    if (workHours > 4) 
        //we use querySelctor because we have ( class=".profile-card" ) in HTML not a Id 
    document.querySelector(".profile-card").style.backgroundColor = "#e6f4ea"
};

button.addEventListener("click", function () {
    workHours++
    
    // use a .push to add value of projectTasks
    clickCount++
    projectTasks.push("Task completed for hour" + clickCount)
    console.log(projectTasks)
    // we just call a name function 
    updateInterface()
});


// --- manipulation data in array ---
// 1. enter a new data in array use (.push)
const example1 = [];
// data1 will be entered into array
example1.push("data1");
console.log(example1);

// 2. take a data with a index 
// in array always start index from zero (0), not from one (1)
const example2 = ["dhuha", "qolby", "taqiyya"]
//                 > 0 <    > 1 <     > 2 <
// if we call index 1, it will bring up "qolby"
console.log(example2[1]); 

// 3. counting how much data in array (.length)
const example3 = ["dhuha", "qolby", "taqiyya"]
// the result is 3, because array have a 3 data
console.log(example3.length)

// 4. remove one last piece of data (.pop)
const example4 = ["dhuha", "qolby", "taqiyya"]
// the result is a array without "taqiyya"
example4.pop()
console.log(example4);

// 5. delete the first index and create another index move forward (.shift)
const example5 = ["dhuha", "qolby", "taqiyya"]
// the result is array without "dhuha" and makes "qolby" the index 0
example5.shift();
console.log(example5);

// 6. enter new data to the front row (.unshift)
const example6 = ["dhuha", "qolby", "taqiyya"]
// the result is array added 1 new index in front 
// "prikitiw" will be 0 index
example6.unshift("prikitiw");
console.log(example6);

// 7. delete a middle data (.splice)
const example7 = ["dhuha", "qolby", "taqiyya"]
// the result is array without "qolby"
// (1,1) mean is point to index 1 and delete index 1
example7.splice(1,1);
console.log(example7);

// 8. filter the data to be moved to another location (.filter)
const example8 = [10, 50, 80, 100, 120]
/* (price => price < 90) mean is filtering data less than 90 
to move into cheapPrice */ 
// price => price mean is parameter 
let cheapPrice1 = example8.filter(price => price < 90);
// the result is [10,50,80]
console.log(cheapPrice1);

// this is ( => ) arrow function
// if you waana try without arrow function, This will take a little longer.
let cheapPrice2 = example8.filter(function(price) {
    return price < 90
});
// The result will be exactly the same as the arrow function.
console.log(cheapPrice2);