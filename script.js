// mengambil element html ById
const tombol = document.getElementById ("tombolKontak");


// const berfungsi membuat variable dan menjadikan isi variablenya tidak bisa diganti ganti
const nameDeveloper = "MUH. DHUHA QOLBY TAQIYYA";
// let berfungsi membuat variable dan menjadikan isi variable bisa diganti dan dapat di recall didalam scoop atau diluar scoop
let clickCount = 0;
let isReadyForUS = true;
const elementText = document.getElementById ("counterTeks");


// memanggil variable tombol lalu menggunakan fungsi dengan titik (addEventListener("click") = apabila di klik)
tombol.addEventListener("click", function(){
    // menambahkan increment(++) yang bermakna menambahkan 1 pada variable clickCount
    clickCount++
    // Pengkondisian (jika clickCount kurang dari 3)
    if (clickCount < 3) {
        // innerText berfungsi mengakses atau mengubah teks mentah yang ada pada elemen html tetapi tidak bisa menyertakan elemen HTML pada javascript 
        elementText.innerText = clickCount;
    }
    else {
        // jika kondisi diatas bernilai false maka ini akan dieksekusi
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