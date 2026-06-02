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
    // console.log adalah jendela rahasia yang bisa dilihat melalui inspect di web
    console.log(clickCount);
});


/* --- macam macam operator aritmatika penambahan variabel dinamis ---
1. Increment (++) bermakna menambahkan point 1 pada variable
2. Decrement (--) bermakna mengurangi point 1 pada variable 
3. Penambahan/Pengurangan Custom (+=/-=) bermakana menambahkan/mengurangi point yang diinginkan pada variable
4. Operator Aritmatika 
+ (Penjumlahan): let total = 5 + 3;
- (Pengurangan): let sisa = 10 - 4;
* (Perkalian - menggunakan simbol bintang): let hasil = 4 * 2;
/ (Pembagian - menggunakan garis miring): let bagi = 20 / 5;
% (Modulus / Sisa Hasil Bagi): let sisaBagi = 10 % 3; (Hasilnya 1, karena 10 dibagi 3 adalah 3, sisa 1).*/ 
