import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { Http } from "@capacitor-community/http";


@Component({
  selector: 'app-presensi-edit',
  templateUrl: './presensi-edit.page.html',
  styleUrls: ['./presensi-edit.page.scss'],
})
export class PresensiEditPage implements OnInit {
  id: any;
  nama_mahasiswa: any;
  keterangan: any;

  constructor(private route: ActivatedRoute, private router: Router, public _apiService: ApiService,) {
    this.route.params.subscribe((param: any) => {
      this.id = param.id;
      console.log(this.id);
      this.ambilPresensi(this.id)
   })
  }

  ngOnInit() {
  }

  ambilPresensi(id: any) {
    this._apiService.lihat(id, './lihatPresensi.php?id=').subscribe({
    next: (hasil: any) => {
    console.log('sukses', hasil);
    let presensi = hasil;
    this.nama_mahasiswa = presensi.nama_mahasiswa;
    this.keterangan = presensi.keterangan;
    },
    error: (error: any) => {
    this._apiService.notif('gagal ambil data');
    }
    })
    }
   

    editPresensi() {
    let data = {
    id: this.id,
    nama_mahasiswa: this.nama_mahasiswa,
    keterangan: this.keterangan,
    }
    this._apiService.edit(data, '/editPresensi.php').subscribe({
    next: (hasil: any) => {
    console.log(hasil);
    this.id = '';
    this.nama_mahasiswa = '';
    this.keterangan = '';
    this._apiService.notif('berhasil edit Presensi');
    this.router.navigateByUrl('/presensi');
  },
  error: (err: any) => {
  this._apiService.notif('gagal edit Presensi');
  }
  })
  }
  
 }

