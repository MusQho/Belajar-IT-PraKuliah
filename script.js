// take element ById 
const tombol = document.getElementById ("tombolKontak");


// function const is create a variable and you cannot change the value later
const nameDeveloper = "MUH. DHUHA QOLBY TAQIYYA";
// function let is create a variable and you can change the value later
let clickCount = 0;
let isReadyForUS = true;
const elementText = document.getElementById ("counterTeks");


// call variable tombol then use function with point (addEventListener("click") = if a click)
tombol.addEventListener("click", function(){
    // add increment(++) its mean add 1 on the variable clickCount
    clickCount++
    // conditioning (if clickCount less than three)
    if (clickCount < 3) {
        // innerText use to access or change raw text in the HTML element but can't include HTML element in Javasript 
        elementText.innerText = clickCount;
    }
    else {
        // jika kondisi diatas bernilai false maka ini akan dieksekusi
        // if the above condition is false so this will be execution
        window.location.href = "https://github.com/MusQho"
    };
});


/* --- Mengenal Operator Perbandingan Standar IT ---
1. .innerHTML jauh lebih kuat karena bisa menyuntikkan teks sekaligus bersama tag HTML baru 
Contoh: elementText.innerHTML = "<strong>" + clickCount + "</strong>";
2. Memanipulasi Gaya Desain Secara Langsung (.style) JavaScript juga bisa mengubah hiasan CSS suatu elemen secara dinamis di tengah jalan ketika sebuah aksi terjadi.
Contoh: elementText.style.color = "red";
3. Mengubah Atribut Elemen (.setAttribute) Digunakan untuk mengubah nilai atribut di dalam tag HTML, seperti mengubah link tujuan pada tag <a> atau mengubah sumber gambar pada tag <img>
Contoh: tombol.setAttribute("disabled", "true");*/ 