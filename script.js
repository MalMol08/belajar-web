// 1. Membuat fungsi untuk mengubah warna tema halaman
function ubahTema() {
    // Mengambil elemen <body> pada HTML
    const tubuhHalaman = document.body;
    
    // Jika sedang mode putih, ubah ke gelap. Jika gelap, balik ke putih.
    tubuhHalaman.classList.toggle("mode-gelap");
}
