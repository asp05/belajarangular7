import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CrudService {
  //base api url
  public url = 'http://localhost/webapi/';
  constructor(private http : HttpClient) { }

  getbarang(){
    return this.http.get(this.url + 'home/index');
  }
  getdetailbarang(id){
    return this.http.get(this.url + 'home/index' + id );
  }
  createbarang(data){
    return this.http.post(this.url + 'home/tambah', data);
  }
  updatebarang(data){
    return  this.http.post(this.url + 'home/update',data);
  }
  hapusbarang(id){
    return this.http.get(this.url + 'home/hapus' +id);
  }

}
