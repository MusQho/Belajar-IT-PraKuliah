let workHours = 0;
const hourlyRate = 20;

const button = document.getElementById("countButton");
const cost = document.getElementById("totalCost");

button.addEventListener("click", function () {
    workHours++
    console.log(workHours)
    const costTotal = workHours * hourlyRate
    cost.innerText = "$" + costTotal
    if (workHours > 4) {
        //we use querySelctor because we use class=".profile-card" in HTML not a Id 
        document.querySelector(".profile-card").style.backgroundColor = "#e6f4ea"
    }
});