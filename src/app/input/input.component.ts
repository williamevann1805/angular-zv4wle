import { Router} from '@angular/router'
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  constructor(private router : Router) { }
  ngOnInit() {
  }
  txtNama  :string;
  txtPenjelasan : string;

  submit()
  {
     this.router.navigate(['/list', this.txtNama, this.txtPenjelasan]);
  }
}