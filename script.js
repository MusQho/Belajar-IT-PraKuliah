// select elements by Id
const tombol = document.getElementById ("tombolKontak");


// const creates a variable whose value cannot be changed later
const nameDeveloper = "MUH. DHUHA QOLBY TAQIYYA";
// let crates a variable whose value can be change later
let clickCount = 0;
let isReadyForUS = true;
const elementText = document.getElementById ("counterTeks");


// add a click event listener to the button
tombol.addEventListener("click", function(){
    // Increament (++) : increases clickCount by 1
    clickCount++
    // conditional check: if clicks are less than 3
    if (clickCount < 3) {
        // update the raw text content inside the HTML element
        elementText.innerText = clickCount;
    }
    else {
        // if condition above are false, redirect to link Github
        window.location.href = "https://github.com/MusQho"
    };
});


