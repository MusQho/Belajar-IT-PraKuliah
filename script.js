// mengambil element html ById
const tombol = document.getElementById ("tombolKontak");


// const berfungsi membuat variable dan menjadikan isi variablenya tidak bisa diganti ganti
const nameDeveloper = "MUH. DHUHA QOLBY TAQIYYA";
// let berfungsi membuat variable dan menjadikan isi variable bisa diganti dan dapat di recall didalam scoop atau diluar scoop
let clickCount = 0;
let isReadyForUS = true;


// memanggil variable tombol lalu menggunakan fungsi dengan titik (addEventListener("click") = apabila di klik)
tombol.addEventListener("click", function(){
    // memunculkan notif pesan di web
    alert("Connecting you to My Github Profile ..."); 
    // // memindahkan halaman di tab yang berbeda
    window.open("https://github.com/MusQho", "_blank");
    
    // window.location.href = "https://github.com/MusQho"; // // memindahkan halaman di tab yang sama
    // window.history.forward(); // // memajukan ke web/halaman setelahnya
    // window.history.back(); // // memundurkan ke web/halaman sebelumnya
    // window.innerHeight; // // membaca ukuran Tinggi layar secara real-time
    // window.innerWidth; // // membaca ukuran Lebar layar secara real-time
    // window.scrollTo({ top: 0, behavior: "smooth"}); // // Otomatis Geser layar sperti di scroll secara halus(smooth)
});