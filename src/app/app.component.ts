import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyecto009';

  articulos:any = null;

  constructor(private http: HttpClient){}

  ngOnInit() {
    this.http.get("https://www.datos.gov.co/resource/rubk-nymq.json")
      .subscribe(
        result => {
          this.articulos = result;
        },
        error => {
          console.log('Problemas');
        }
      );
  }
}
