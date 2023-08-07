import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})
export class BoxComponent {
  @Input('delay') delay:string='';
  @Input('titulo') titulo:string='';
  @Input('texto') texto:string='';
  @Input('icono') icono:string='';
  @Input('id') id: number = 0;
 
  constructor(){  }
  

  
}
