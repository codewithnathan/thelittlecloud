function getBotResponse(input) {
  // Simple responses
  if (input == "pilihan kelas") {
    return `Berikut adalah pilihan kelas yang tersedia :<br>
    1. Group class<br>
    2. Private class<br>
    3. Intensive class<br>
    4. After class<br>
    5. Hsk/YCT class<br>
    6. Corporate<br>
    <b>kontak kami | kelebihan kami</b>
    `
  } else if (input == 'kontak kami') {
    return `Berikut kontak kami.<br>
    whatsapp : <a href='https://api.whatsapp.com/send/?phone=6287842174971&text=Halo%20Little%20Cloud%20Mandarin%20Course,%20saya%20tertarik%20dengan%20kursus%20Little%20Cloud%20Mandarin'>+62 878-4217-4971</a><br>
    <b>pilihan kelas | kelebihan kami</b>`
  } else if (input == 'kelebihan kami') {
    return `Berikut adalah kelebihan kami :<br>
    1. Guru berpengalaman > 15 tahun<br>
    2. Tes penempatan kelas sesuai kemampuan<br>
    3. Metode belajar yang menyenangkan dan menarik<br>
    4. Kelas hanya berkapasitas maksimal 10 siswa<br>
    5. Belajar lebih fokus dan maksimal<br>
    6. Terdapat E-sertifikat dan E-book<br>
    <b>pilihan kelas | kontak kami</b>
    `
  } else {
    return 'Silahkan coba pilihan lain'
  }
}