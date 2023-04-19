import { Component, OnInit } from '@angular/core';
import { PhotosPetsService } from '../photos-pets.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public isCollapsed = false;

  // images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  images = [
            "./../assets/unidos.jpg",
            "./../assets/cat-lost.jpg",
            "./../assets/hueman-cat.jpg",
            "./../assets/thank-you.jpg"
          ];
  image = '';

  constructor(private pps: PhotosPetsService) {
  }

  ngOnInit(): void {
    this.pps.getDogPhoto().subscribe(result => {
      this.image = result.message;   
      console.log(this.image);   
    });
  }

  changePhoto(){
    // this.pps.getDogPhoto().subscribe(result => {
    //   this.image = result.message;      
    // });


    
  }

}
