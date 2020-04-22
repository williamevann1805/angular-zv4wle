import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private route : ActivatedRoute) { }

  namaTemp = '';
  penjelasanTemp = '';
  arrNama:String[];
  arrPenjelasan:String[];

  ngOnInit() {
    let nama = this.route.snapshot.paramMap.get('txtNama');
    this.namaTemp = nama;
    let penjelasan = this.route.snapshot.paramMap.get('txtPenjelasan');
    this.penjelasanTemp = penjelasan;
  }

  show()
  {
    this.arrNama.push(this.namaTemp);
    this.arrPenjelasan.push(this.penjelasanTemp);
  }
}