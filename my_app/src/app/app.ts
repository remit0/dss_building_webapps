import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App  {
  title: String = "my-app";
  projects: String = "";
  backendUrl: string ='';

  constructor (private http:HttpClient){}

  ngOnInit() {
    this.backendUrl = 'http://127.0.0.1:5000/get_one';
    this.http.get<String>(this.backendUrl, { responseType: 'text' as 'json'})
    .subscribe((resp:any) => {
      this.projects = resp
    });
  }
}
