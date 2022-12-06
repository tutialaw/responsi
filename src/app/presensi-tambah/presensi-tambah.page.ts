import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-presensi-tambah',
  templateUrl: './presensi-tambah.page.html',
  styleUrls: ['./presensi-tambah.page.scss'],
})
export class PresensiTambahPage implements OnInit {
  id: any;
  nama_mahasiswa: any;
  keterangan: any;
 
  constructor(private router: Router, public _apiService: ApiService,) { }

  ngOnInit() {
  }
  addPresensi() {
    let data = {
    nama_mahasiswa: this.nama_mahasiswa,
    keterangan: this.keterangan,
    }
    this._apiService.tambah(data, '/tambahPresensi.php').subscribe({
    next: (hasil: any) => {
    console.log(hasil);
    this.id = '';
    this.nama_mahasiswa = '';
    this.keterangan = '';
    this._apiService.notif('berhasil input Presensi');
    this.router.navigateByUrl('/presensi');
    },
    error: (err: any) => {
    this._apiService.notif('gagal input Presensi');
    }
    })
    }
   
}
