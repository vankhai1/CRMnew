import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-giao-dich',
  templateUrl: './giao-dich.component.html',
  styleUrls: ['./giao-dich.component.css']
})
export class GiaoDichComponent implements OnInit {

  itemStringsLeft = [
    'Windstorm',
    'Bombasto',
    'Magneta',
    'Tornado'
  ];
 
  itemStringsRight = ['Mr. O', 'Tomato'];
  constructor() { }

  ngOnInit(): void {
  }

}
