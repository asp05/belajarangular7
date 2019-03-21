import { Component, OnInit, ViewChild } from '@angular/core';
import { CrudService } from '@app/_services/crud.service';
import { Router } from '@angular/router';
declare var s;
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  public tbl_barang: any=[];
  @ViewChild('barangTable') Table;
  public dataTable: any;
  constructor(
    private crudservice : CrudService,
    private router : Router
  ) { }

  ngOnInit() {
    this.loadtbl_barang();
  }
  loadtbl_barang()
  {
    this.crudservice.getbarang().subscribe(
      barangData =>{
        this.tbl_barang = barangData;
        this.dataTable =s(this.Table.nativeElement);
        setTimeout(()=>{this.dataTable.DataTable();},2000);
      }
    );
  }
  getNavigation(link,id)
  {
    if (id === '') {
      this.router.navigate([link]);
    }
    else
    {
      this.router.navigate([link +'/' + id]);
    }
  }

}
