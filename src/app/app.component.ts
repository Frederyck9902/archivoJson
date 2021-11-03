import { Component, OnInit , OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy,OnInit {
  title = 'Hurtos en Colombia';
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  articulos:any = null;

  constructor(private http: HttpClient){}

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 20,
      language: {
        url:'//cdn.datatables.net/plug-ins/1.11.3/i18n/es-mx.json'
      }
    };
    this.http.get("https://www.datos.gov.co/resource/6sqw-8cg5.json")
      .subscribe(
        (result) => {
          this.articulos = result;
          this.dtTrigger.next();
        },
        error => {
          console.log('Problemas');
        }
      );
  }

  ngOnDestroy(){
    this.dtTrigger.unsubscribe();
  }
}
