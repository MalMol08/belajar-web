function ubahTema() {
    // Mengambil elemen html paling atas
    const html = document.documentElement;
    
    // Jika sudah ada class 'dark', hapus. Jika belum ada, tambahkan.
    if (html.classList.contains('dark')) {
        html.classList.remove('dark');
    } else {
        html.classList.add('dark');
    }
}
