import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-http-test',
  templateUrl: './http-test.component.html',
  styleUrls: ['./http-test.component.scss']
})
export class HttpTestComponent implements OnInit {

  someData:String = "KendyYoloLoL";
  imageFolder:String = "http://media.mw.metropolia.fi/wbma/uploads/";
  imageUrl:String = "http://media.mw.metropolia.fi/wbma/media/"
  someData2:String = "https://pbs.twimg.com/profile_images/890642858306174976/ruvt45mZ.jpg";


  constructor(private http:HttpClient) { }

  getJSON() {
      this.http.get('assets/package.json').subscribe((response) => {
        console.log(response.getJSON);
        this.someData = response.name;
      });
  }

  getMedia() {
    this.http.get(this.imageUrl).subscribe((response) => {
      console.log(response.getJSON);
      this.someData2 = this.imageFolder+response[0].filename;
    });
  }

  ngOnInit() {
    this.getJSON();
    this.getMedia();
  }

}
