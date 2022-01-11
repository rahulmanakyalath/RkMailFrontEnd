import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor( private http:HttpClient){}
  title = 'RkMail';
  onSubmit(data)
  {
    this.http.post('http://localhost:8089/spring-mail-app/api/v1/sendmail/',data)
    .subscribe((result)=>{
    console.warn("result",result)
    })
  }
}
