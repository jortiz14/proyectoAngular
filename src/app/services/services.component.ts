import { Component } from '@angular/core';
import { JsonplaceholderService } from '../apiServices/jsonplaceholder.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  posts:any=[];

  constructor(private JsonplaceholderService: JsonplaceholderService){
     this.JsonplaceholderService.allPost().subscribe(data =>{
         //console.log('All Posts:', data);
         this.posts=data;
     });
  }

}
