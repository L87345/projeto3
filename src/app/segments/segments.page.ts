import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-segments',
  templateUrl: './segments.page.html',
  styleUrls: ['./segments.page.scss'],
})
export class SegmentsPage implements OnInit {
categoria:any;
texto:any;
imagem:any;
teste: boolean=false;
  constructor() { }

  ngOnInit() {
  }
  segmentChanged(ev: any) {
    this.categoria=ev.detail.value;
    console.log(this.categoria);
    console.log('Segment changed', ev);

    if(this.categoria=="p1"){
      this.teste=true;
      this.texto="Buenos Aires 1....";
      this.imagem="pontoturistico1.jpg";
  }
  if(this.categoria=="p2"){
    this.teste=true;
    this.texto="Buenos Aires 2....";
    this.imagem="pontoturistico2.jpg";
}
}
}