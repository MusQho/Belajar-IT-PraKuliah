// mengambil element html ById
const tombol = document.getElementById ("tombolKontak");
// memanggil variable tombol lalu menggunakan fungsi dengan titik (addEventListener("click") = apabila di klik)
tombol.addEventListener("click", function(){
    // memunculkan notif pesan di web
    alert("Connecting you to My Github Profile ..."); 
    // // memindahkan halaman di tab yang berbeda
    // // memindahkan halaman di tab yang sama
    // // memajukan ke web/halaman setelahnya
    // // memundurkan ke web/halaman sebelumnya
    // // membaca ukuran layar secara real-time
    // // Otomatis Geser layar sperti di scroll secara halus(smooth)

    window.open("https://github.com/MusQho", "_blank");
    // window.location.href = "https://github.com/MusQho";
    // window.history.forward();
    // window.history.back();
    // window.innerHeight;
    // window.innerWidth;
    // window.scrollTo({ top: 0, behavior: "smooth"});
});