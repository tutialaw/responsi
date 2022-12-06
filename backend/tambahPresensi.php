<?php
require 'koneksi.php';
$input = file_get_contents('php://input');
$data = json_decode($input, true);
$pesan = [];
$nama_mahasiswa = trim($data['nama_mahasiswa']);
$keterangan = trim($data['keterangan']);
//jika nama matakuliah dan keterangan tidak kosong
if ($nama_mahasiswa != '' and $keterangan != '') {
 $query = mysqli_query($koneksi, "insert into presensi(nama_mahasiswa,keterangan) values('$nama_mahasiswa','$keterangan')");
 $pesan['status'] = 'berhasil';
} else {
 $pesan['status'] = 'gagal';
}
echo json_encode($pesan);
echo mysqli_error($koneksi);
