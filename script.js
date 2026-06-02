// mengambil element html ById
const tombol = document.getElementById ("tombolKontak");


// const berfungsi membuat variable dan menjadikan isi variablenya tidak bisa diganti ganti
const nameDeveloper = "MUH. DHUHA QOLBY TAQIYYA";
// let berfungsi membuat variable dan menjadikan isi variable bisa diganti dan dapat di recall didalam scoop atau diluar scoop
let clickCount = 0;
let isReadyForUS = true;


// memanggil variable tombol lalu menggunakan fungsi dengan titik (addEventListener("click") = apabila di klik)
tombol.addEventListener("click", function(){
    // menambahkan increment(++) yang bermakna menambahkan 1 pada variable clickCount
    clickCount++
    // Pengkondisian (jika clickCount kurang dari 3)
    if (clickCount < 3) {
        // munculkan peringatan 
        alert("Keep Clicking ! Now: " + clickCount)
    }
    else {
        // jika kondisi diatas bernilai false maka ini akan dieksekusi
        window.location.href = "https://github.com/MusQho"
    };
});


/* --- Mengenal Operator Perbandingan Standar IT ---
Saat menulis kondisi di dalam tanda kurung if, Anda bisa menggunakan berbagai simbol matematika perbandingan berikut:
< (Kurang dari): if (umur < 17)
> (Lebih dari): if (nilai > 75)
<= (Kurang dari atau sama dengan): if (skor <= 100)
>= (Lebih dari atau sama dengan): if (skor >= 50)
=== (Sama dengan secara mutlak): if (status === "admin") -> Catatan: Di JavaScript modern, selalu gunakan tiga tanda sama dengan (===) untuk mengecek kesamaan secara akurat, jangan gunakan dua (==) karena memiliki celah keamanan data.
!== (Tidak sama dengan): if (pilihan !== "batal")*/ 
