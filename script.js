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
    // we just call a name function 
    updateInterface()
});

/* --- Why we not use a Return ---
because in this program there is no task to
process data again outside the function*/